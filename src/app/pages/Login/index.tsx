import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ButtonSubmit, CustomAvatar, CustomForm, Paper } from './styles';
import Link from '@material-ui/core/Link';
import { useFormik } from 'formik';
import schema from './validation';
import { login } from '../../../core/actionCreators/authActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../core/reducers/rootReducer';
import * as actionTypes from '../../../core/actionTypes/authActionsTypes';

export default function SignIn() {
  const dispatch = useDispatch();
  const token = useSelector((state: AppState) => state.auth.token);
  const isLoading = useSelector((state: AppState) => state.isLoading[actionTypes.LOGIN]);
  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      dispatch(login(values.email, values.password));
    }
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <Paper>
        <CustomAvatar>
          <LockOutlinedIcon/>
        </CustomAvatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <CustomForm noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && !!formik.errors.email}
            helperText={
              (formik.touched.email && !!formik.errors.email) ? formik.errors.email : null
            }
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && !!formik.errors.password}
            helperText={
              (formik.touched.password && !!formik.errors.password) ? formik.errors.password : null
            }
            autoComplete="current-password"
          />
          <ButtonSubmit
            fullWidth
            variant="contained"
            color="primary"
            disabled={isLoading}
            onClick={() => formik.submitForm()}
          >
            Sign In
          </ButtonSubmit>
        </CustomForm>
      </Paper>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            Bank of Mars
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Container>
  );
}
