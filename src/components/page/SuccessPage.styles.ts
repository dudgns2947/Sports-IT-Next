import { PageWrapper } from "@component/components/container/container";
import styled from "styled-components";
import Image from "next/image";

export const SignUpContainer = styled(PageWrapper)`
  background-color: #212121;
  height: 100vh;
  width: 100vw;
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  font-weight: 600;
`;

export const Text = styled.span`
  color: #ffffff;
  font-size: 30px;
  margin-bottom: 10px;
`;

export const ImageArea = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;

export const LogoImage = styled(Image)``;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 55px;
`;

export const NavButton = styled.button`
  background-color: #ffffff;
  border-radius: 12px;
  width: 90%;
  height: 50px;
  font-size: 18px;
`;
