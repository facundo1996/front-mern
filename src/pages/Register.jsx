import { Formik, Field, Form } from 'formik';
import { useTasks } from "../context/TaskContext.jsx";
import { useUser } from "../context/UserContext.jsx";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function TaskForm() {
  const navigate = useNavigate();
  const { registerUser } = useUser()

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={async (values) => {
          console.log(values)
          await registerUser(values)
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
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}