import { Formik, Field, Form } from 'formik';
import { useTasks } from "../context/TaskContext.jsx";
import { useUser } from "../context/UserContext.jsx";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function TaskForm() {
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
          console.log(values)
          await loginUser(values)
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