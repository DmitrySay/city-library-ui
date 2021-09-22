import React from 'react';

import { TextField } from '@material-ui/core';

const AuthFormTextField = ({ name, label, formik, ...props }) => {
  return (
    <TextField
      fullWidth
      label={label}
      id={name}
      name={name}
      margin="dense"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && !!formik.errors[name]}
      helperText={formik.touched[name] && formik.errors[name]}
      {...props}
    />
  );
};

export default AuthFormTextField;
