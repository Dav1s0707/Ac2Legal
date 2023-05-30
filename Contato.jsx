// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from "./comps/Header";
// import Item from "./comps/Item";
import Footer from "./comps/Footer";
import Cabeca from "./comps/Cabeca";

function Home() {
  return (
    <div>
      <Cabeca></Cabeca>
      <Header></Header>
      <div className="centro">
        <h2>Contate Nos</h2>
        <h3>Telefone: xxxx-xxxx</h3>
        <h3>Email: @gmail.com</h3>
        <h3>Instagram: @instagram</h3>
        <br />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
