import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Test from "./Test";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./services/Services";
import Cursor from "./components/cursor/Cursor";
import CertificateUpload from "./components/certificate/CertificateUpload";

const App = () => {
  
  return <div>
     <Cursor/>
    <section id="Homepage"><Navbar/> <Hero/></section>
    
    <section id="Services"><Parallax type="services"/></section>

    <CertificateUpload/>

    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact">
      <Contact/>
    </section>

 </div>


};

export default App;
