import React from "react";
// import { logo } from "header-logo.png";
import styled from "styled-components";

const Header = styled.header`
  grid-area: header;
  display: grid;
  align-items: center;
  max-height: 100px;
`;
const Logo = styled.img`
  width: 12vw;
  max-height: 55px;
`;
export default function StyledHeader() {
  return (
    <Header className="header">
      <Logo id="header-logo" src="header-logo.png" alt="Company Logo" />
    </Header>
  );
}
