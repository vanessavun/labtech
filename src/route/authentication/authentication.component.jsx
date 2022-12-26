import React from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

function Authentication() {
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex flex-row justify-content-center">
          <div>
            <SignInForm />
          </div>
          <div>
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Authentication;
