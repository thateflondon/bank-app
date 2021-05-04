import React from "react";
import {
  SignInContainer,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormTitle,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SignInElements";

function SignIn() {
  return (
    <SignInContainer>
      <FormWrap>
        <Icon to="/">ECO</Icon>
        <FormContent>
          <Form action="#">
            <FormTitle>Sign in to your account</FormTitle>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password ?</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </SignInContainer>
  );
}

export default SignIn;
