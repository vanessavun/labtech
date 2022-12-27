import React from "react";
import { Routes, Route } from "react-router";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

function Authentication() {
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex flex-row justify-content-center">
          <Routes>
            <Route index element={<SignInForm />} />
            <Route path="signup" element={<SignUpForm />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Authentication;
