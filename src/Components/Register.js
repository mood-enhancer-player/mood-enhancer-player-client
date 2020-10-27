import React, { useState } from "react";
import {
  makeStyles,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { gql, useMutation } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    background: "black",
    padding: "20px",
    width: "600px",
    margin: "auto",
  },
}));

const Register = () => {
  const classes = useStyles();

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [addUser, { loading }] = useMutation(REGISTER_MUTATION, {
    update(_, result) {
      console.log("Rsult of maution", result);
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    // variables:{
    //   username:values.username,
    //   email:values.email
    // }
    // OR
    variables: values,
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    addUser();
    console.log("form is submited");
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <h1>Hello Data Loaded</h1>
      )}
      <div>
        <TextField
          id="outlined-flexible"
          label="Username"
          variant="outlined"
          color="secondary"
          type="text"
          name="username"
          onChange={onChange}
        />
      </div>
      <div>
        <TextField
          id="outlined-flexible"
          label="Email"
          variant="outlined"
          color="secondary"
          type="email"
          name="email"
          onChange={onChange}
        />
      </div>
      <div>
        <TextField
          id="outlined-flexible"
          label="Password"
          variant="outlined"
          color="secondary"
          type="password"
          name="password"
          onChange={onChange}
        />
      </div>
      <div>
        <TextField
          id="outlined-flexible"
          label="Confirm Password"
          variant="outlined"
          color="secondary"
          type="password"
          name="confirmPassword"
          onChange={onChange}
        />
      </div>
      <div>
        <Button variant="contained" color="secondary" onClick={onFormSubmit}>
          Register
        </Button>
      </div>
      <div style={{ color: "white", background: "red" }}>
        <div>{values.username}</div>
        <div>{values.email}</div>
        <div>{values.password}</div>
        <div>{values.confirmPassword}</div>
      </div>
    </form>
  );
};

const REGISTER_MUTATION = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      token
      username
    }
  }
`;

export default Register;
