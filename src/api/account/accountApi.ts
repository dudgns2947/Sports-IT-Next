import { ILoginProps, ISignupProps, ICheckEmailProps } from "@component/interfaces/accountInterface";
import baseApi from "../utils/instance";

const SIGNUP_URI = "signup";
const LOGIN_URI = "authenticate";
const CHECK_EMAIL_URI = "member/checkEmail";

export const loginPost = (loginProps: ILoginProps) =>
  baseApi.post(LOGIN_URI, {
    loginId: loginProps.loginId,
    pw: loginProps.pw,
  });

export const signupPost = (signupProps: ISignupProps) =>
  baseApi.post(SIGNUP_URI, {
    email: signupProps.email,
    pw: signupProps.pw,
    name: signupProps.name,
    memberType: signupProps.memberType,
    phone: signupProps.phone,
    activated: signupProps.activated,
  });

export const checkEmail = (checkEmailProps: ICheckEmailProps) =>
  baseApi.post(CHECK_EMAIL_URI, {
    email: checkEmailProps.email,
  });

// export const signupPost = async (signupProps: ISignupProps) => {
//   const { data } = await baseApi.post(SIGNUP_URI, {
//     loginId: signupProps.loginId,
//     pw: signupProps.pw,
//     name: signupProps.name,
//     memberType: signupProps.memberType,
//     email: signupProps.email,
//     phone: signupProps.phone,
//     activated: signupProps.activated,
//   });

//   return data;
// };
