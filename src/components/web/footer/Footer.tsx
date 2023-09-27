import React from "react";
import * as S from "./Footer.style";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <S.Footer>
      <div className="info-area">
        <Image
          src="/images/logo/web_text_logo.png"
          width={142}
          height={22}
          alt="text_logo"
          style={{
            marginBottom: "30px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Image
            src="/images/logo/stunning.png"
            width={92}
            height={12}
            alt="stunning_logo"
            style={{
              marginBottom: "20px",
            }}
          />
          <div>
            <S.NavRow>
              <p>
                <span>대표</span>
                <span>김영훈</span>
              </p>
              <p>
                <span>서비스명</span>
                <span>스포츠잇</span>
              </p>
            </S.NavRow>
            <S.NavRow>
              <p>
                <span>사업자번호</span>
                <span>120-87-69298</span>
              </p>
              <p>
                <span>통신판매</span>
                <span>제2011-서울강남-01864</span>
              </p>
              <p>
                <span>직업정보제공</span>
                <span>emailme@gmail.com</span>
              </p>
            </S.NavRow>
            <S.NavRow>
              <p>
                <span>주소</span>
                <span>
                  서울시 강남구 봉은사로 112길 6, 익성빌딩 2층(삼성동)
                </span>
              </p>
            </S.NavRow>
          </div>

          <span
            style={{
              color: "#AEAEAE",
              marginTop: "10px",
            }}
          >
            Copyright.© 2023 PLAYMAKERS. All rights reserved
          </span>
        </div>
      </div>
      <S.FooterNav>
        <div className="top-nav">
          <Link href="/">
            <span>회사소개</span>
          </Link>
          <Link href="/">
            <span>공지사항</span>
          </Link>
          <Link href="/">
            <span>개인정보처리방침</span>
          </Link>
        </div>
        <div className="down-nav">
          <Link href="/">
            <span>사업자 확인</span>
          </Link>
          <Link href="/">
            <span>이용약관</span>
          </Link>
          <Link href="/">
            <span style={{ border: "none" }}>광고 문의</span>
          </Link>
        </div>
      </S.FooterNav>
    </S.Footer>
  );
};

export default Footer;
