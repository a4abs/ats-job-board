import React from "react";

import {
  InputAdornment,
  Box,
  Divider,
  IconButton,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      //   border={"1px solid #599D15"}
      //   borderRadius={1}
      //   py={1}
    >
      <TextField
        sx={{ ml: 1, flex: 1 }}
        size="medium"
        placeholder="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton color="primary">
                <SearchIcon color="inherit" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBox;
