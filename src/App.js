import styled from "styled-components";

import Profile from "./comp/Feed/Profile";
import Header from "./comp/Header/StyledHeader";
import Footer from "./comp/StyledFooter";
import Dialogs from "./comp/Feed/StyledDialogs";
import { StyledSectionFeed } from "./comp/Feed/StyledSectionFeed";
import Posts from "./comp/Feed/Posts";
import StyledNav from "./comp/Nav/StyledNav";

const StyledMainContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  align-items: center;
  border: 2px solid red;
`;

export default function App() {
  return (
    <>
      <Header />

      <StyledMainContainer>
        <StyledNav />

        <StyledSectionFeed className="section_profile">
          <Profile />
          <Posts />
          <Dialogs />
        </StyledSectionFeed>
      </StyledMainContainer>

      <Footer />
    </>
  );
}
