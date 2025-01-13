import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Card,
  CardContent,
  Collapse,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const CustomCollapseList = ({
  option = [],
  handleChange,
}: {
  option: any;
  handleChange: any;
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <ListItemButton onClick={handleOpen} dense>
        <ListItemText primary={option.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto">
        <List component="div" disablePadding>
          {option.secondaryArea.map((secondaryArea: any) => (
            <ListItem dense key={`secondaryArea-id-${secondaryArea.id}`}>
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={secondaryArea.checked}
                    sx={{ paddingY: 0 }}
                    name={secondaryArea.name}
                    onChange={handleChange}
                  />
                }
                label={`${secondaryArea.name}`}
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "0.875rem",
                    lineHeight: "1rem",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

interface Props {
  options: Array<any>;
  handleChange: any;
}

const JobFilter = (props: Props) => {
  const { options = [], handleChange } = props;

  return (
    <Card variant="outlined">
      <CardContent sx={{ padding: 0 }}>
        <List
          sx={{
            width: "100%",
            maxWidth: {
              xs: "100%",
              sm: "100%",
              md: 300,
            },
            bgcolor: "background.paper",
          }}
        >
          {options.map((option) => (
            <CustomCollapseList
              option={option}
              handleChange={handleChange}
              key={`functional-area-${option.id}`}
            />
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default JobFilter;
