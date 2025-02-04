import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import _ from "lodash";

import Layout from "@/components/Layout";
import JobList from "@/components/job-component/List";
import JobBoardAPI from "@/components/job-component/api-service";

export default function Jobs({
  cities = [],
  functionalAreaList = [],
  jobs,
  urlFilters,
}: any) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    experience: {},
    salary: {},
    location: urlFilters?.location
      ? {
          label: urlFilters.location,
          value: urlFilters.location,
        }
      : {},
    query: urlFilters.searchTerm || "",
  });
  const [pageJobs, setPageJobs] = useState(jobs);
  const [jobFunctionalArea, setJobFunctionalArea] =
    useState(functionalAreaList);
  const [selectedFunctionalArea, setSelectedFunctionalArea] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchJobs = (filters: any) => {
    setLoading(true);
    JobBoardAPI.getJobs({
      page: filters.page || page,
      query: filters.query || "",
      location: filters.location?.value || "",
      exp: filters.experience?.value || 0,
      functionalArea: filters.functionalArea || [],
    })
      .then((jobs) => {
        setPageJobs(jobs);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const handlePageChange = (e: any, page: number) => {
    setPage(page);
    fetchJobs({ ...filters, page, functionalArea: selectedFunctionalArea });
  };

  const handleOnCheckFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedFilters: any = functionalAreaList.map((filters: any) => {
      return {
        ...filters,
        secondaryArea: filters.secondaryArea.map((options: any) => {
          if (options.name == e.target.name) {
            options["checked"] = e.target.checked;
          }
          return {
            ...options,
          };
        }),
      };
    });
    setJobFunctionalArea(checkedFilters);
    let functionalAreaFilter: any = [...selectedFunctionalArea];
    if (e.target.checked) {
      if (!functionalAreaFilter.includes(e.target.name)) {
        functionalAreaFilter.push(e.target.name);
      }
    } else {
      _.remove(functionalAreaFilter, (n) => n === e.target.name);
    }
    setSelectedFunctionalArea(functionalAreaFilter);

    fetchJobs({ ...filters, functionalArea: functionalAreaFilter });
  };

  const handleSearchChange = (filters: any) => {
    const { query = "", location = {}, experience = {} } = filters;
    const filteredQueryParams = Object.fromEntries(
      Object.entries({
        searchTerm: query,
        location: location?.value || "",
        experience: experience?.value || "",
      }).filter(([key, value]) => value != null && value !== "")
    );
    router.push(
      {
        pathname: router.pathname,
        query: filteredQueryParams,
      },
      undefined,
      { shallow: true }
    );
    setPage(1);
    setFilters(filters);
    fetchJobs({ ...filters, page: 1, functionalArea: selectedFunctionalArea });
  };

  return (
    <Layout title="Find Jobs in India" description="Search for the latest jobs">
      <JobList
        page={page}
        filters={filters}
        loading={loading}
        cities={cities}
        functionalAreaList={jobFunctionalArea}
        jobs={pageJobs}
        onPageChange={handlePageChange}
        onCheckFilter={handleOnCheckFilter}
        onSearchChange={handleSearchChange}
      />
    </Layout>
  );
}

Jobs.getInitialProps = async (ctx: any) => {
  const { location = "", searchTerm = "" } = ctx.query;

  // Get locations
  let data: any = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/job/cities`
  );
  data = await data.json();
  const cities = data.map(({ name = "" }) => ({
    label: name,
    value: name,
  }));

  // Get functional area
  let workspaceFunctional: any = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/job/functional-area-with-secondary-area/${process.env.NEXT_PUBLIC_WORKSPACE}`
  );
  workspaceFunctional = await workspaceFunctional.json();
  // TODO: Only a temporary hack to handle spelling check
  const functionalAreaList = workspaceFunctional.map((functionalArea: any) => ({
    id: functionalArea.id,
    name: functionalArea.name,
    icon: functionalArea.icon,
    workspaceId: functionalArea.workspaceId,
    secondaryArea: functionalArea.secodaryArea,
  }));

  // Get jobs
  let jobs = {
    estimatedTotalHits: 0,
    hits: [],
    limit: 15,
  };
  try {
    jobs = await JobBoardAPI.getJobs({
      page: 0,
      query: searchTerm,
      location,
      salary: 0,
      exp: 0,
    });
  } catch (error) {
    console.log("error in fetching jobs", error);
  }

  return {
    cities,
    functionalAreaList,
    jobs,
    urlFilters: {
      location,
      searchTerm,
    },
  };
};
