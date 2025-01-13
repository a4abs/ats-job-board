import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material"
import React from "react"

interface Props {
  label: string
  items: Array<{ label: string; value: string | number }>
  onChange: any
  name: string
  error: any
  helperText: any
  value: string
}

export default ({
  label = "Select",
  items = [],
  onChange,
  name = "",
  helperText = "",
  error = false,
  value = "",
}: Props) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={`select-helper-label-${label}`} sx={{ fontSize: "16px" }}>
        {label}
      </InputLabel>
      <Select
        labelId={`select-helper-label-${label}`}
        id={`select-label-${label}`}
        label={label}
        onChange={onChange}
        name={name}
        value={value}
      >
        {items.map((item, i) => (
          <MenuItem key={`menu-item-${i}`} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && (
        <FormHelperText
          error={error}
          sx={{ paddingLeft: 0, paddingRight: 0, marginX: 0 }}
        >
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}
