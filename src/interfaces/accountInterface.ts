export interface ISignUpForm {
  name: string;
  id: string;
  password: string;
  passwordCheck: string;
  email: string;
  phoneNumber: string;
  authNumber: string;
}

export interface ISignupProps {
  loginId: string;
  pw: string;
  name: string;
  memberType: string;
  email: string;
  phone: string;
  activated: number;
}

export interface ILoginProps {
  loginId: string;
  pw: string;
}
