import React from "react";
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import LoginForm from './LoginForm';
import axios from 'axios';


const FormikLoginForm = withFormik({

  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
//======VALIDATION SCHEMA==========
validationSchema: Yup.object().shape({
  username: Yup.string()
    .min(4)
    .required(),
  password: Yup.string()
    .min(8)
    .required()
}),
//======END VALIDATION SCHEMA==========

  handleSubmit(values, { props }) {
  console.log(values);
  //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  axios
  .post('http://localhost:5000/api/login', values)
  .then(res => {
    console.log(res.data.payload);
    localStorage.setItem('token', res.data.payload);
    props.history.push('/bubblepage');
  })
  .catch(err => console.log(err.response));
  }
})(LoginForm);

export default FormikLoginForm;


// const Login = () => {
//   // make a post request to retrieve a token from the api
//   // when you have handled the token, navigate to the BubblePage route
//   return (
//     <>
//       <h1>Welcome to the Bubble App!</h1>
      
//     </>
    
//   );
// };


