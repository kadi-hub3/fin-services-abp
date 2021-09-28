import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #00c7a7;
  transition: 0.5s;
  &.active {
    background: #001922;
  }
  &.active .formBox {
    left: 50%;
  }

  &.active .signup {
    left: 0%;
  }
  &.active .signin {
    left: 100%;
  }
  .signup {
    left: -100%;
  }

  @media screen and (max-width: 991px) {
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.active .formBox {
      left: 0;
      top: 150px;
    }
  }
`;

export const FormWrapper = styled.div`
  position: relative;
  height: 500px;
  width: 800px;
  margin: 20px;

  @media screen and (max-width: 991px) {
    max-width: 500px;
  }
`;

export const BlueBg = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  height: 420px;
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 991px) {
    top: 0;
    height: 550px;
  }
`;

export const BoxSignUp = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 991px) {
    position: absolute;
    width: 100%;
    height: 150px;
    bottom: 0;
  }
`;
export const FormH2 = styled.h2`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const BoxSignIn = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 991px) {
    position: absolute;
    width: 100%;
    height: 150px;
    top: 0;
  }
`;

export const FormBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #fff;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  @media screen and (max-width: 991px) {
    width: 100%;
    height: 400px;
    top: 0;
    box-shadow: none;
  }
`;

export const FormBoxContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 50px;
  transition: 0.5s;
`;
export const FormBoxContainer2 = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 50px;
  transition: 0.5s;
`;

export const SignInForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  transition-delay: 0.25s;
  input[type="submit"] {
    background: #00bfa6;
    border: none;
    color: #fff;
    max-width: 100px;
    cursor: pointer;
  }
`;

export const FormH3 = styled.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  outline: none;
  font-size: 16px;
  border: 1px solid #333;

  &.attrs({
    type: "submit",
    value: "Submit",
  }) {
    background: #00bfa6;
  }
`;

export const SignUpForm = styled.div`
  input[type="submit"] {
    background: #001922;
    border: none;
    color: #fff;
    max-width: 100px;
    cursor: pointer;
  }
`;
