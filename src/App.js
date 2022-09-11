import styled from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Profile from "./comp/Feed/Profile";
import Header from "./comp/Header/StyledHeader";
import Footer from "./comp/StyledFooter";
import Dialogs from "./comp/Feed/StyledDialogs";
import { StyledSectionFeed } from "./comp/Feed/StyledSectionFeed";
import Posts from "./comp/Feed/Messages";
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
    <BrowserRouter>
      <Header />
      <StyledMainContainer>
        <StyledNav />

        <StyledSectionFeed className="section_profile">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messagesт" element={<Posts />} />
            <Route path="/dialogs" element={<Dialogs />} />
          </Routes>
        </StyledSectionFeed>
      </StyledMainContainer>
      <Footer />
    </BrowserRouter>
  );
}
