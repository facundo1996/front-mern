import { Formik, Field, Form } from 'formik';
import { useUser } from "../context/UserContext.jsx";
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import { useState } from 'react';

export default function TaskForm() {
  const navigate = useNavigate();
  const { loginUser } = useUser();
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Box sx={{ width: 400, padding: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
          Login
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
          onSubmit={async (values) => {
            const response = await loginUser(values);
            if (response.id) {
              navigate('/');
            } else {
              setErrorMessage(response.message || 'Login failed');
            }
          }}
        >
          <Form>
            <Box sx={{ marginBottom: 2 }}>
              <Field
                name="username"
                as={TextField}
                label="Username"
                fullWidth
                variant="outlined"
                placeholder="Enter your username"
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
              />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
}
