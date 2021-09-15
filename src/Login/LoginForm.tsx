import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Stack,
  TextField,
} from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';

const initialValues = {
  email: '',
  password: '',
  keepLogin: false,
};

function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export type LoginFromValues = typeof initialValues;
interface LoginFromProps {
  onSubmit: (values: LoginFromValues) => Promise<unknown>;
}

export function LoginForm(props: LoginFromProps) {
  const { onSubmit } = props;
  const formik = useFormik({
    initialValues,
    validate: (values) => {
      const errors: Record<string, string> = {};
      const valid = validateEmail(values.email);
      if (!valid) {
        errors.email = 'bad email';
      }
      return errors;
    },
    onSubmit: async (values, helpers) => {
      await onSubmit(values);
      helpers.setSubmitting(false);
    },
  });

  return (
    <Box
      sx={{
        width: '100%', // Fix IE 11 issue.
        marginTop: (theme) => theme.spacing(3),
        padding: (theme) => theme.spacing(2),
      }}
    >
      <form onSubmit={formik.handleSubmit} noValidate>
        <Stack spacing={2}>
          <TextField
            fullWidth
            id="email"
            name="email"
            type="email"
            label="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={
              formik.touched.email && formik.errors.email && formik.errors.email
            }
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            required
            error={formik.touched.password && formik.values.password === ''}
          />
          <FormControlLabel
            control={
              <Checkbox
                value={formik.values.keepLogin}
                onChange={formik.handleChange}
                id="keepLogin"
                name="keepLogin"
                color="primary"
              />
            }
            label="keep_login"
          />
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <CircularProgress size={20} />
            ) : (
              'login.button_title'
            )}
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default LoginForm;
