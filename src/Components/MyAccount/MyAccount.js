import React, { useState, useContext } from "react";
import {
  makeStyles,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import Profile from "../Common/Profile/Profile";

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
  profileImg: {
    width: "500px",
  },
  signUpLink: {
    color: "lightblue",
    width: "500px",
    margin: "10px",
    cursor: "pointer",
    marginLeft: "20px",
  },
}));

const MyAccount = () => {
  document.getElementsByTagName("html")[0].style.background = "black";
  const context = useContext(AuthContext);

  const classes = useStyles();
  const [error, setError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const [usernameHelperText, setUserNameHelperText] = useState("");
  const [values, setValues] = useState({
    email: "",
    username: "",
  });
  console.log(error);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // onInput change all the erro messages are remove.
    setError(false);
    setEmailHelperText("");
    setUserNameHelperText("");
  };

  const { data, loading, error: queryError } = useQuery(USER_PROFILE_QUERY, {
    onCompleted: (data) => {
      console.log(data);
      setValues({ username: data.me.username, email: data.me.email });
    },
  });

  const history = useHistory();
  // const [loginUser, { loading }] = useMutation(LOGIN_MUTATION, {
  //   update(_, result) {
  //     if (result) {
  //       context.login(result.data.login);
  //       history.push("/");
  //     }
  //   },
  //   onError(err) {
  //     //   setErrors(err.graphQLErrors[0].extensions.exception.errors);
  //   },
  //   variables: values,
  // });

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

    if (values.username === "" || values.username === null) {
      setError(true);
      setUserNameHelperText("Username must not be empty");
    } else if (values.username.toString().length < 5) {
      setError(true);
      setUserNameHelperText("Username Length atleast 5 characters");
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

  if (data) {
    console.log(data);
  }

  return (
    <div>
      <h1 className={classes.title}>MY ACCOUNT</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onFormSubmit}
      >
        <div className={classes.profileImg}>
          <Profile />
        </div>

        {queryError && (
          <h1>{`Account Information not open ! ${queryError.message}`}</h1>
        )}
        {!data || loading ? (
          <CircularProgress />
        ) : (
          <>
            <div>
              <TextField
                id="outlined-flexible"
                label="Username"
                variant="outlined"
                color="secondary"
                type="text"
                name="username"
                onChange={onChange}
                error={usernameHelperText ? 1 : 0}
                helperText={usernameHelperText}
                size="small"
                className={classes.textField}
                defaultValue={data.me.username}
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
                error={emailHelperText ? 1 : 0}
                helperText={emailHelperText}
                size="small"
                className={classes.textField}
                defaultValue={data.me.email}
              />
            </div>
            <div>
              <p
                className={classes.signUpLink}
                onClick={() => history.push("/signUp")}
              >
                New to Mood Enhancer ? <u>Create an account</u>
              </p>
            </div>
            <div>
              <Button
                variant="outlined"
                color="secondary"
                type="submit"
                className={classes.textField}
              >
                Update Username or Email
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

// const LOGIN_MUTATION = gql`
//   mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       id
//       email
//       token
//     }
//   }
// `;

const USER_PROFILE_QUERY = gql`
  query {
    me {
      username
      email
    }
  }
`;

export default MyAccount;
