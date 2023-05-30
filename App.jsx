// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx"
import Contato from "./Contato.jsx"
import Sobre from "./Sobre.jsx"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contato" element={<Contato></Contato>}></Route>
          <Route path="/sobre" element={<Sobre></Sobre>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
