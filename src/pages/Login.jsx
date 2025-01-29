import { Formik, Field, Form } from 'formik';
import { useUser } from "../context/UserContext.jsx";
import { useNavigate } from 'react-router-dom';

export default function TaskForm() {
  const navigate = useNavigate()
  const { loginUser } = useUser()

  return (
    <div>
      <h1>Login</h1>
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
            alert(response.message)
          }
        }}
      >
        <Form>
          <label htmlFor="username">Username</label>
          <Field
            name="username"
            placeholder="Facundo" />

          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
          />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  )
}