import React from "react";
import { useSelector } from 'react-redux'
import Header from "./components/Layout/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Layout/Footer.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Notification from "./components/UI/Notification.jsx";

function App() {

  const showCart = useSelector(state => state.ui.showCart)
  const notification = useSelector(state => state.ui.notification)
  
  return (
    <React.Fragment>
      {showCart && <Cart />}
      <Header />
      {notification.message && <Notification status={notification.status} message={notification.message} />}
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
