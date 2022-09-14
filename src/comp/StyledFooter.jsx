import React from "react";
import styled from "styled-components";
const Footer = styled.footer`
position:relative;
width: 80%;
margin: 0 auto;
display: grid;
align-items: center;
text-align: center;
color: rgba(255, 255, 255, 0.273);
background-color: #282c34;
height:100px;
// margin-top: 2vh;
`;
export default function StyledFooter() {
  return (
    <Footer className="footer">
      <p>Footer</p>
    </Footer>
  );
}
