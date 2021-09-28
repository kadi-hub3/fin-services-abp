import React, { useState, useRef } from "react";
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
import { useAuth } from "../../contexts/AuthContext";

const SignForm = () => {
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordConfirmRef = useRef();
  const passwordRef = useRef();

  const { SignUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordConfirmRef.current.value !== passwordRef.current.value) {
      return setError("Passwords Do Not Match");
    }

    try {
      setError("");
      setLoading(true);
      await SignUp(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }
  };
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
          <FormBoxContainer2 onSubmit={handleSubmit} className="signup">
            <SignUpForm>
              <FormH3>Sign Up</FormH3>
              <Input
                type="text"
                useRef={nameRef}
                placeholder="Enter your username"
              />
              <Input
                type="email"
                useRef={emailRef}
                placeholder="Enter your email"
              />
              <Input
                type="password"
                useRef={passwordRef}
                placeholder="Enter your password"
              />
              <Input
                type="password"
                useRef={passwordConfirmRef}
                placeholder="Confirm your password"
              />
              <Button disabled={loading} type="submit" value="Sign Up" />
            </SignUpForm>
          </FormBoxContainer2>
        </FormBox>
      </FormWrapper>
    </FormContainer>
  );
};

export default SignForm;
