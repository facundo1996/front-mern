import { Formik, Field, Form } from 'formik';
import { useUser } from "../context/UserContext.jsx";
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';
import * as Yup from 'yup';
import { useState } from 'react';


const validationSchema = Yup.object({
  username: Yup.string()
    .min(4, "Username must be at least 4 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(3, "Password must be at least 3 characters")
    .required("Password is required"),
});

export default function TaskForm() {
  const navigate = useNavigate();
  const { registerUser } = useUser();
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box sx={{ width: 400, padding: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
          Sign Up
        </Typography>

        {errorMessage && (
          <Box sx={{ marginBottom: 2 }}>
            <Alert severity="error">{errorMessage}</Alert>
          </Box>
        )}

        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            const response = await registerUser(values);
            if (response.id) {
              navigate('/');
            } else {
              setErrorMessage(response.message || 'Registration failed');
            }
          }}
        >
          {({ handleChange, handleSubmit, values, errors, touched, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Box sx={{ marginBottom: 2 }}>
                <Field
                  name="username"
                  as={TextField}
                  label="Username"
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your username"
                  onChange={handleChange}
                  value={values.username}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
              </Box>

              <Box sx={{ marginBottom: 2 }}>
                <Field
                  name="password"
                  as={TextField}
                  label="Password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={values.password}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                <Button type="submit" variant="contained" color="primary" fullWidth disabled={isSubmitting}>
                  {isSubmitting ? 'Registering...' : 'Sign Up'}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
