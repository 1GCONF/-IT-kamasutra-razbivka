import React from "react";
import styled from "styled-components";

const Header = styled.header`
  grid-area: header;
  display: grid;
  align-items: center;
  grid-template-columns:1fr 1fr 1fr 1fr 1fr;
  background:#1a1c22;
  box-shadow 4px 4px 2px rgba(3, 3, 19, 0.238);;
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
