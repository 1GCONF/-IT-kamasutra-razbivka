import React from "react";
import styled from "styled-components";

const Header = styled.header`
width: 100%;
margin: 0 auto;
  display: grid;
  align-items: center;
  background:#1a1c22;
  box-shadow 4px 4px 2px rgba(3, 3, 19, 0.238);
  margin-bottom 2vh;
  height:50px;
  border-radius:50px 0;
`;
const Logo = styled.a`
  width:100%;
  height:100%;
  justify-self:center;
  display:grid;
  cursor:default;
`;
const LogoImg=styled.img`
  align-self center;
  max-width 100px;
  max-height 100px;
  padding 0 2.5ex;
  cursor:pointer;
  &:hover{
    opacity .3;
  }
`;
export default function StyledHeader() {
  return (
    <Header className="header">
      <Logo href="#">
        <LogoImg id="header-logo" src="header-logo.png" alt="Company Logo" />
      </Logo>
    </Header>
  );
}
