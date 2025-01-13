import axios from "axios";
export default class JobBoardAPI {
  private static readonly ROOT_URL = process.env.NEXT_PUBLIC_API_URL;
  private static readonly SEARCH_URL = process.env.NEXT_PUBLIC_SEARCH_LOCAL;

  static async getLocationOptions() {
    try {
      let data: any = await fetch(`${this.ROOT_URL}/api/v1/job/cities`);
      data = await data.json();
      const cities = data.map(({ name = "" }) => ({
        label: name,
        value: name,
      }));
      return cities;
    } catch (error) {
      return [];
    }
  }

  static async getWorkspaceFunctionalArea() {
    try {
      const data = await fetch(
        `${this.ROOT_URL}/api/v1/job/functional-area-with-secondary-area/${process.env.NEXT_PUBLIC_WORKSPACE}`
      );
      let workspaceFunctional = await data.json();
      workspaceFunctional = workspaceFunctional.map((functionalArea: any) => ({
        id: functionalArea.id,
        name: functionalArea.name,
        icon: functionalArea.icon,
        workspaceId: functionalArea.workspaceId,
        secondaryArea: functionalArea.secodaryArea,
      }));

      return workspaceFunctional;
    } catch (error) {
      return [];
    }
  }

  static async getJobs({
    page = 0,
    query = "",
    location = "",
    salary = 0,
    exp = 0,
    functionalArea = [],
    primaryFunctionalArea = [],
  }: {
    page: number;
    query?: string;
    location?: string;
    salary?: number;
    exp?: number;
    functionalArea?: Array<string>;
    primaryFunctionalArea?: Array<string>;
  }) {
    try {
      const searchQuery = {
        q: query || "",
        limit: 15,
        offset: page ? (page - 1) * 15 : 0,
        filter: "",
        sort: ["createdAt:desc"],
      };

      let filterQuery = `workspace.id = ${process.env.NEXT_PUBLIC_WORKSPACE} AND `;
      if (functionalArea.length) {
        const functionalAreaQuery = functionalArea.map(
          (keyword) => `functionalArea.secondary='${keyword}'`
        );
        const functionalAreaQueryString = functionalAreaQuery.join(" OR ");
        filterQuery = `${filterQuery} ${functionalAreaQueryString} AND`;
      }

      if (location) {
        filterQuery = `${filterQuery} location='${location}' AND`;
      }

      filterQuery = `${filterQuery} salary.min >= ${salary}`;

      if (exp) {
        filterQuery = `${filterQuery} AND experience.min <= ${exp} AND experience.max >= ${exp}`;
      }

      searchQuery.filter = filterQuery;
      const data = await fetch(`${this.SEARCH_URL}/indexes/jobs/search`, {
        method: "POST",
        body: JSON.stringify(searchQuery),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SECRET_KEY}`,
        },
      });

      const jobs = await data.json();
      return jobs;
    } catch (error) {}
  }

  static async getJob(id: number) {
    const document = await fetch(
      `${this.SEARCH_URL}/indexes/jobs/documents/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SECRET_KEY}`,
        },
      }
    );

    return await document.json();
  }

  static async directApplyToJob(application: {
    cv: any;
    name: string;
    email: string;
    mobile: string;
    job: string;
  }) {
    const data = new FormData();
    data.append("resume", application.cv);
    data.append("name", application.name);
    data.append("email", application.email);
    data.append("mobile", application.mobile);
    data.append("jobId", application.job);
    data.append("workspaceId", `${process.env.NEXT_PUBLIC_WORKSPACE}`);

    return await axios({
      baseURL: this.ROOT_URL,
      url: "/api/v1/job-application/direct-apply",
      method: "POST",
      headers: {
        "content-type": "multipart/form-data",
      },
      data,
    });
  }
}
