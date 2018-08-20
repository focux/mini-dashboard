import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const CustomField = ({ id = '', name = '', value, icon, label, required = false, onChange, type = 'text' }) => (
  <FormControl fullWidth>
  <InputLabel htmlFor={id}>{label}</InputLabel>
  <Input
    id={id}
    name={name}
    startAdornment={
      <InputAdornment position="start">
        {icon}
      </InputAdornment>
    }
    required={required}
    onChange={onChange}
    type={type}
    value={value}
    fullWidth
  />
</FormControl>
);

export default CustomField;
