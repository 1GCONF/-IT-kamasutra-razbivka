import Profile from "./comp/Feed/Profile";
import Header from "./comp/Header/StyledHeader";
import Footer from "./comp/StyledFooter";
import Dialogs from "./comp/Feed/StyledDialogs";
import { StyledSectionFeed } from "./comp/StyledSectionFeed";
import { StyledSectionNav } from "./comp/StyledSectionNav";
import Posts from "./comp/Feed/Posts";
import StyledNav from "./comp/Nav/StyledNav";
import { StyledMainContainer } from "./comp/StyledMainContainer";
export default function App() {
  return (
    <>
      <Header />

      <StyledMainContainer>
      <StyledSectionNav>
          <StyledNav />
        </StyledSectionNav>

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
