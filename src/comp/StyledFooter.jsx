import React from "react";
import styled from "styled-components";
const Footer = styled.footer`
  grid-area: footer;
`;
export default function StyledFooter() {
  return (
    <Footer className="footer">
      <p>Footer</p>
    </Footer>
  );
}
