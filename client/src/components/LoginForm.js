import React from 'react';
import '../App.css';
import {Form, Field} from 'formik';

export default LoginForm;

function LoginForm({errors, touched}) {
    return (
      <Form>
        <div>
          {touched.username && errors.username && <p>{errors.username}</p>}
          <Field type="text" name="username" placeholder="Username" />
        </div>
        <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type="password" name="password" placeholder="Password" />
        </div>
  
        <button type="submit">Login</button>
      </Form>
    );
  }