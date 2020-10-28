import React, { useState } from "react";
import {
  makeStyles,
  TextField,
  Button,
  CircularProgress,
  Typography,
  Divider,
  FormHelperText,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

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
  title: {
    color: "#f0db72",
    textAlign: "center",
    marginTop: "90px",
    fontFamily: "fangsong",
  },
  textField: {
    margin: "10px",
    width: "500px",
  },
}));

const Login = () => {
  document.getElementsByTagName("html")[0].style.background = "black";

  const classes = useStyles();
  const [_, setError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // onInput change all the erro messages are remove.
    setError(false);
    setEmailHelperText("");
    setPasswordHelperText("");
  };

  const history = useHistory();
  const [addUser, { loading }] = useMutation(LOGIN_MUTATION, {
    update(_, result) {
      if (result) {
        history.push("/");
      }
    },
    onError(err) {
      //   setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    // variables:{
    //   username:values.username,
    //   email:values.email
    // }
    // OR
    variables: values,
  });

  const formValidation = () => {
    // Email validation
    let reg = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;

    if (values.email === "" || values.email === null) {
      setError(true);
      setEmailHelperText("Email must not be empty");
    } else if (reg.test(values.email) === false) {
      setError(true);
      setEmailHelperText("Please enter valid email  address");
    } else {
      setError(false);
    }

    // Password validation

    if (values.password === "" || values.password === null) {
      setError(true);
      setPasswordHelperText("Password must not be empty");
    } else if (values.password.toString().length < 8) {
      setError(true);
      setPasswordHelperText("Password Length atleast 8 characters");
    } else {
      setError(false);
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    formValidation();
    addUser();
    console.log("form is submited");
  };

  return (
    <div>
      <h1 className={classes.title}>SIGN IN</h1>
      <form className={classes.root} noValidate autoComplete="off">
        {/* {loading ? (
          <CircularProgress color="secondary" />
        ) : (
          <h1>Hello Data Loaded</h1>
        )} */}

        <div>
          <TextField
            id="outlined-flexible"
            label="Email"
            variant="outlined"
            color="secondary"
            type="email"
            name="email"
            onChange={onChange}
            error={emailHelperText ? 1 : 0}
            helperText={emailHelperText}
            size="small"
            className={classes.textField}
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
            error={passwordHelperText ? 1 : 0}
            helperText={passwordHelperText}
            size="small"
            className={classes.textField}
          />
        </div>
        <div>
          <Button
            variant="outlined"
            color="secondary"
            onClick={onFormSubmit}
            className={classes.textField}
          >
            Sign In
          </Button>
        </div>
        {/* <div style={{ color: "white", background: "red" }}>
        <div>{values.username}</div>
        <div>{values.email}</div>
        <div>{values.password}</div>
        <div>{values.confirmPassword}</div>
      </div> */}
      </form>
    </div>
  );
};

const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      token
    }
  }
`;

export default Login;
