import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  auth
} from "../../utils/firebase/firebase";

const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log("signin response: ", response)
      console.log(auth)

      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
    }
  };
console.log(auth)
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="p-4 w-50">
      <div className="d-flex justify-content-center">
        <h3>Sign In</h3>
      </div>
      <form className="form-floating" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div id="emailHelp" className="form-text">Need an account? <Link to="signup">Sign up here.</Link></div>
        <div className="py-3 d-flex justify-content-between">
          <button type="submit" className="btn btn-warning">
            Log In
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={signInWithGoogle}
          >
            Google Log In
          </button>
        </div>
      </form>
    </div>
  );
}
