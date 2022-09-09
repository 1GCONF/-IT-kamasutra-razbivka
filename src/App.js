
import Content from "./comp/Content";
import StyledHeader from "./comp/Header/StyledHeader";
import StyledNav from "./comp/StyledNav";
import StyledFooter from "./comp/StyledFooter";
import StyledPostContainer from "./comp/StyledPostContainer";
import Dialogs from "./comp/Dialogs";
function App() {
  return (
    <section className="section_profile">
      <StyledHeader/>
      <StyledNav />
      <Content/>
      <StyledPostContainer/>
      <Dialogs/>
      <StyledFooter/>

    </section>
  );
}

export default App;
