import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [isMatching, setIsMatching] = useState(true);
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setIsMatching(false);
      return;
    }

    if (password === confirmPassword) {
      setIsMatching(true);
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userDocRef = await createUserDocumentFromAuth(user, { displayName });
      console.log(userDocRef)
      resetFormFields();
      navigate("/");

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="p-4 w-50">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3>Create a new account</h3>
      </div>
      <form className="form-floating" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name@example.com"
            name="displayName"
            value={displayName}
            onChange={handleChange}
          />
          <label for="name">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="input-group has-validation">
          <div className="form-floating pr-1">
            <input
              type="password"
              className={`form-control ${!isMatching && "is-invalid"}`}
              id="floatingPassword"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="form-floating px-1 is-invalid">
            <input
              type="password"
              className={`form-control ${!isMatching && "is-invalid"}`}
              id="floatingConfirmPassword"
              placeholder="ConfirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              required
            />
            <label for="floatingPassword">Confirm Password</label>
          </div>
          {!isMatching && <div className="invalid-feedback">Passwords don't match.</div>}
        </div>
        <div className="py-3 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
