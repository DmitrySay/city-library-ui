import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Button, InputAdornment, Link, Paper, Typography } from '@material-ui/core';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import logo from '../../assets/logo.svg';
import { useAuth } from '../../context/AuthContext';
import PATHS from '../../router/paths';
import useStyles from './auth.styles';
import FormTextField from '../../components/auth/formTextField';
import * as yup from 'yup';

const SignIn = (props) => {
  const classes = useStyles();
  const { history } = props;
  const { authenticate } = useAuth();

  const [passwordVisible, setPasswordVisibility] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = yup.object({
    email: yup.string().required('Field is required'),
    password: yup.string().required('Field is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (formData) => {
      setLoading(true);
      await authenticate(formData).then(
        () => {
          history.push(PATHS.cities);
        },
        (error) => {
          console.error(error);
        },
      );
      setLoading(false);
    },
  });

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <Paper elevation={4} className={classes.paper}>
          <Typography variant="h4" style={{ textAlign: 'center', fontWeight: 300 }}>
            Welcome
          </Typography>
          <img src={logo} alt="logo" className={classes.logo} />
          <form onSubmit={formik.handleSubmit}>
            <FormTextField
              autoFocus
              name="email"
              label="email"
              formik={formik}
              type="text"
              fullWidth
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineOutlinedIcon className={classes.icon} />
                  </InputAdornment>
                ),
              }}
            />
            <FormTextField
              id="password"
              name="password"
              label="password"
              type={passwordVisible ? 'test' : 'password'}
              autoComplete="current-password"
              variant="outlined"
              formik={formik}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon className={classes.icon} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    {passwordVisible ? (
                      <VisibilityIcon
                        onClick={() => {
                          setPasswordVisibility(false);
                        }}
                        className={classes.eye}
                      />
                    ) : (
                      <VisibilityOffIcon
                        onClick={() => {
                          setPasswordVisibility(true);
                        }}
                        className={classes.eye}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              fullWidth
              size="large"
              color="primary"
              variant="contained"
              disabled={loading}
              className={classes.button}
            >
              signin
            </Button>
          </form>
        </Paper>
        <Typography className={classes.policy} variant="overline">
          <Link color="inherit" href="https://example.com/privacy-policy/">
            privacy-policy
          </Link>
        </Typography>
      </div>
    </div>
  );

};

export default SignIn;
