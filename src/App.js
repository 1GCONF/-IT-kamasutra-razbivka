
import Nav from "./comp/Nav";
import Content from "./comp/Content";
import Footer from "./comp/Footer";
import StyledHeader from "./comp/Header/StyledHeader";
function App() {
  return (
    <section className="section_profile">
      <StyledHeader/>
      <Nav />
      <Content/>
      <Footer/>
    </section>
  );
}

export default App;
