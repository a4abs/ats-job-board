import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  Autocomplete,
  TextField,
  styled,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

const salaryOptions = Array.from({ length: 30 }).map((_, index) => ({
  label: `${index} LPA`,
  value: index,
}));

const expOptions = Array.from({ length: 30 }).map((_, index) => ({
  label: `${index} Yrs`,
  value: index,
}));

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const SearchTextField = styled(TextField)(() => ({
  "& .MuiAutocomplete-inputRoot": {
    fontSize: "1rem",
  },
  "& .MuiAutocomplete-input": {
    fontSize: "1rem",
  },
  "& .MuiFormLabel-root": {
    fontSize: "1rem",
  },
  "& .MuiInputBase-input::placeholder": {
    fontSize: "1rem",
  },
}));

const KeywordTextField = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    fontSize: "1rem",
  },
  "& .MuiFormLabel-root": {
    fontSize: "1rem",
  },
  "& .MuiInputBase-input::placeholder": {
    fontSize: "1rem",
  },
}));

interface Props {
  locations: Array<any>;
  filters: {
    experience: any;
    salary: any;
    location: any;
    query: string;
  };
  onApplyFilter: Function;
}

const JobSearchBar = (props: Props) => {
  const router = useRouter();
  const { locations, onApplyFilter, filters } = props;
  const [filterValues, setFilterValues] = useState<any>(filters);

  const pathArray = router.asPath.split("/");
  const lastSegment = pathArray[pathArray.length - 1];

  const handleChange = (name: string, value: any) => {
    setFilterValues({
      ...filterValues,
      [name]: value,
    });
  };

  const handleClick = () => {
    onApplyFilter(filterValues);
  };

  useEffect(() => {
    setFilterValues(filters);
  }, [filters]);

  return (
    <Grid container width={"100%"} py={2} mb={2} spacing={2}>
      <Grid item xs={12} md={4.5}>
        <KeywordTextField
          fullWidth
          size="medium"
          value={filterValues.query}
          variant="outlined"
          label="Keyword / Job Title"
          placeholder="Search job with title & description"
          onChange={(e: any) => handleChange("query", e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Autocomplete
          options={locations}
          value={
            filterValues?.location?.value
              ? capitalizeFirstLetter(filterValues.location.value)
              : ""
          }
          sx={{
            "& .MuiAutocomplete-listbox .MuiAutocomplete-option": {
              fontSize: "1rem",
            },
          }}
          onChange={(e, value) => handleChange("location", value)}
          renderInput={(params) => (
            <SearchTextField
              {...params}
              size="medium"
              variant="outlined"
              label="Location"
              placeholder="Search job by locations"
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <Autocomplete
          options={expOptions}
          sx={{
            fontSize: "1rem",
            "& .MuiAutocomplete-listbox .MuiAutocomplete-option": {
              fontSize: "1rem",
            },
          }}
          value={filterValues?.experience?.value || null}
          onChange={(e, value) => handleChange("experience", value)}
          renderInput={(params) => (
            <SearchTextField
              {...params}
              size="medium"
              variant="outlined"
              label="Experience"
              placeholder="Experience"
            />
          )}
        />
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={1.5}
        display={"flex"}
        justifyContent={"center"}
      >
        <Button
          variant="contained"
          size="large"
          fullWidth
          startIcon={<SearchIcon />}
          onClick={handleClick}
          sx={{
            backgroundColor: "rgba(0,51,153)",
            color: "#FFFFFF",
            textTransform: "none",
            border: "1px solid #003399",
            "&:hover": {
              border: "1px solid #003399",
              backgroundColor: "#003399",
              color: "#FFFFFF",
            },
          }}
        >
          Search
        </Button>
      </Grid>
      <Grid item container xs={12} justifyContent={"flex-start"}>
        <Typography
          variant="h1"
          fontWeight={"bold"}
          fontSize="20px"
          lineHeight="32px"
          mt={2}
          color={"#003399"}
          fontFamily="'JetBrains Mono', sans-serif"
        >
          {`Explore ${lastSegment.replace(/[^a-zA-Z0-9 ]/g, " ") || ""}`}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default JobSearchBar;
