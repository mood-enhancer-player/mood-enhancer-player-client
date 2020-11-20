import React, { useState, useContext } from "react";
import { makeStyles, TextField, Button } from "@material-ui/core";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/auth";

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
  signUpLink: {
    color: "lightblue",
    width: "500px",
    // margin: "10px",
    cursor: "pointer",
    marginLeft: "20px",
  },
  forgotPassLink: {
    color: "lightblue",
    width: "500px",
    // margin: "10px",
    cursor: "pointer",
    marginRight: "20px",
  },
}));

const ResetPass = () => {
  document.getElementsByTagName("html")[0].style.background = "black";
  const context = useContext(AuthContext);

  const classes = useStyles();
  const [error, setError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const [values, setValues] = useState({
    email: "",
  });
  console.log(error);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // onInput change all the erro messages are remove.
    setError(false);
    setEmailHelperText("");
  };

  const history = useHistory();
  const [loginUser, { loading }] = useMutation(LOGIN_MUTATION, {
    update(_, result) {
      if (result) {
        context.login(result.data.login);
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
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    formValidation();
    // loginUser();
    console.log("form is submited");
  };

  return (
    <div>
      <h1 className={classes.title}>RESET PASSWORD</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onFormSubmit}
      >
        {/* {loading ? (
          <CircularProgress color="secondary" />
        ) : (
          <h1>Hello Data Loaded</h1>
        )} */}

        <div>
          <TextField
            id="outlined-flexible"
            label="Enter your email"
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
          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            className={classes.textField}
          >
            RESET PASSWORD
          </Button>
        </div>
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

export default ResetPass;
