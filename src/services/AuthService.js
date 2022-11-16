import { Auth } from "aws-amplify";

export const SignOut = () =>  Auth.signOut();

export const ConfirmSignUp = (username, code) => Auth.confirmSignUp(username, code);

export const SignIn = (username, password) => Auth.signIn(username, password);

export const SignUp = (data) => Auth.signUp(data);