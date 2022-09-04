import Header from "./comp/Header";
import Nav from "./comp/Nav";
import Content from "./comp/Content";
import Footer from "./comp/Footer";
function App() {
  return (
    <section className="section_profile">
      <Header></Header>
      <Nav />
      <Content/>
      <Footer/>
    </section>
  );
}

export default App;
