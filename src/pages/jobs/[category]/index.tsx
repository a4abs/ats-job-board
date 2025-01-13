import React from "react";
import CategoryJobs from "@/components/CategoryJobs";
import Layout from "@/components/Layout";
import JobDetails from "@/components/job-component/JobDetails";

const PAGE = {
  DETAILS: "DETAIL_PAGE",
  LIST: "JOB_LIST",
};
export default function Jobs({
  cities = [],
  functionalAreaList = [],
  appliedFunctionalArea = [],
  jobs,
  urlFilters,
  pageType = "JOB_LIST",
  job = {},
  similerJobs = [],
  title = "Find Jobs in India",
  description = "Search for the latest jobs",
}: any) {
  return (
    <Layout title={title} description={description} job={job}>
      {pageType == PAGE.LIST && (
        <CategoryJobs
          cities={cities}
          functionalAreaList={functionalAreaList}
          appliedFunctionalArea={appliedFunctionalArea}
          jobs={jobs}
          urlFilters={urlFilters}
        />
      )}
      {pageType == PAGE.DETAILS && (
        <JobDetails job={job} similerJobs={similerJobs} />
      )}
    </Layout>
  );
}

Jobs.getInitialProps = async (ctx: any) => {
  const { category = "", location = "", searchTerm = "" } = ctx.query;
  const urlSlug = category.toLowerCase().trim();

  if (!urlSlug) return null;

  const jobId = urlSlug?.split("/").pop()?.split("-").pop();

  const document = await fetch(
    `${process.env.NEXT_PUBLIC_SEARCH_LOCAL}/indexes/jobs/documents/${jobId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SECRET_KEY}`,
      },
    }
  );

  const job = await document.json();
  let similerJobs: any = [];

  // Get similer jobs
  if (job.functionalArea.secondary) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SEARCH_LOCAL}/indexes/jobs/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SECRET_KEY}`,
        },
        body: JSON.stringify({
          limit: 5,
          filter:
            "functionalArea.secondary='" + job.functionalArea.secondary + "'",
          sort: ["createdAt:desc"],
        }),
      }
    );

    similerJobs = await response.json();
    similerJobs = similerJobs.hits || [];

    similerJobs = similerJobs.filter((job: any) => job.id != jobId);
  }

  return {
    job,
    pageType: PAGE.DETAILS,
    title: `${job.title} Job for ${job.experience.min}-${job.experience.max} Years of Experience in ${job.location}-${job.id} | Savanna HR`,
    description: `Apply for ${job.title} Job in ${job.location}, India by ${job.functionalArea.secondary} for ${job.experience.min}-${job.experience.max} years of experience candidates. Apply on Savanna HR!`,
    similerJobs,
  };
};
