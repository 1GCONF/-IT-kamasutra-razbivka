import React from "react";
import styled from "styled-components";
const Footer = styled.footer`
     
display: grid;
align-items: center;
text-align: center;
color: rgba(255, 255, 255, 0.273);
background-color: #282c34;
`;
export default function StyledFooter() {
  return (
    <Footer className="footer">
      <p>Footer</p>
    </Footer>
  );
}
