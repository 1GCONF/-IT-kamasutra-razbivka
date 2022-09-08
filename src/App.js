
import Content from "./comp/Content";
import StyledHeader from "./comp/Header/StyledHeader";
import StyledNav from "./comp/StyledNav";
import StyledFooter from "./comp/StyledFooter";
import StyledPostContainer from "./comp/StyledPostContainer";
function App() {
  return (
    <section className="section_profile">
      <StyledHeader/>
      <StyledNav />
      <Content/>
      <StyledPostContainer/>
      <StyledFooter/>
    </section>
  );
}

export default App;
