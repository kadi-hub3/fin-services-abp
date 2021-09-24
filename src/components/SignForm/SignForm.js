import React, { useState } from "react";
import {
  FormContainer,
  FormWrapper,
  BlueBg,
  BoxSignIn,
  BoxSignUp,
  FormH2,
  FormBox,
  SignInForm,
  FormH3,
  FormBoxContainer,
  FormBoxContainer2,
  SignUpForm,
  Input,
} from "./SignForm.styles";
import { Button } from "../Button";

const SignForm = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <FormContainer className={clicked ? "active" : null}>
      <FormWrapper>
        <BlueBg>
          <BoxSignIn>
            <FormH2>Already Have an Account ?</FormH2>
            <Button onClick={handleClick}>Sign in</Button>
          </BoxSignIn>
          <BoxSignUp>
            <FormH2>Dont't Have an Account ?</FormH2>
            <Button onClick={handleClick}>Sign Up</Button>
          </BoxSignUp>
        </BlueBg>
        <FormBox className="formBox">
          <FormBoxContainer className="signin">
            <SignInForm>
              <FormH3>Sign In</FormH3>
              <Input type="text" placeholder="Enter your username" />
              <Input type="password" placeholder="Enter your password" />
              <Input type="submit" value="Log In" />
              <a href="google.com" className="forgot-pw">
                Forgot Password
              </a>{" "}
            </SignInForm>
          </FormBoxContainer>
          <FormBoxContainer2 className="signup">
            <SignUpForm>
              <FormH3>Sign Up</FormH3>
              <Input type="text" placeholder="Enter your username" />
              <Input type="email" placeholder="Enter your email" />
              <Input type="password" placeholder="Enter your password" />
              <Input type="password" placeholder="Confirm your password" />
              <Input type="submit" value="Sign Up" />
            </SignUpForm>
          </FormBoxContainer2>
        </FormBox>
      </FormWrapper>
    </FormContainer>
  );
};

export default SignForm;
