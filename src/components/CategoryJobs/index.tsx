import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import _ from "lodash";

import JobList from "@/components/job-component/List";
import JobBoardAPI from "@/components/job-component/api-service";

interface IJobs {
  estimatedTotalHits: number;
  hits: Array<any>;
  limit: number;
}

interface CategoryJobsProps {
  readonly cities: Array<{
    label: string;
    value: string;
  }>;
  readonly functionalAreaList: Array<{
    label: string;
    value: string;
  }>;
  readonly appliedFunctionalArea: Array<any>;
  readonly jobs: IJobs;
  readonly urlFilters: any;
}

export default function CategoryJobs({
  cities = [],
  functionalAreaList = [],
  appliedFunctionalArea = [],
  jobs,
  urlFilters,
}: CategoryJobsProps) {
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
    query: urlFilters?.searchTerm || "",
  });
  const [pageJobs, setPageJobs] = useState(jobs);
  const [jobFunctionalArea, setJobFunctionalArea] =
    useState(functionalAreaList);
  const [selectedFunctionalArea, setSelectedFunctionalArea] = useState(
    appliedFunctionalArea
  );

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

    const { category = "" } = router.query;
    router.push(
      {
        pathname: `/jobs/${category}`,
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
  );
}
