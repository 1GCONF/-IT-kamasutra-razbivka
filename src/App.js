import Profile from "./comp/Profile";
import Header from "./comp/Header/StyledHeader";
import Nav from "./comp/Nav/StyledNav";
import Footer from "./comp/StyledFooter";
import Dialogs from "./comp/StyledDialogs";
import Feed from "./comp/Feed/Feed";
import {StyledSection} from "./comp/StyledSection";
export default function App() {
  return (
    <>
      <Header />
      <StyledSection className="section_profile">
        <Nav />
        <Profile />
        <Feed />
        <Dialogs />
        <Footer />
      </StyledSection>
    </>
  );
}
