
import Profile from "./comp/Profile";
import Header from "./comp/Header/StyledHeader";
import Nav from "./comp/Nav/StyledNav";
import Footer from "./comp/StyledFooter";
import Dialogs from "./comp/StyledDialogs";
import Feed from "./comp/Feed/Feed";
function App() {
  return (
    <section className="section_profile">

      <Header/>
      <Nav />
      <Profile/> 
      <Feed/>
      <Dialogs/>
      <Footer/>

    </section>
  );
}

export default App;
