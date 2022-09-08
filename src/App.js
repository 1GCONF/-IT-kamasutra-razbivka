
import Content from "./comp/Content";
import StyledHeader from "./comp/Header/StyledHeader";
import StyledNav from "./comp/StyledNav";
import StyledFooter from "./comp/StyledFooter";
import StyledPost from "./comp/Post";
function App() {
  return (
    <section className="section_profile">
      <StyledHeader/>
      <StyledNav />
      <Content/>
      <StyledPost></StyledPost>
      <StyledFooter/>
    </section>
  );
}

export default App;
