import React from "react";
import { useSelector } from 'react-redux'
import Header from "./components/Layout/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Layout/Footer.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {

  const showChart = useSelector(state => state.ui.isOpen)

  return (
    <React.Fragment>
      {showChart && <Cart />}
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
