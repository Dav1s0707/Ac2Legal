import Header from "./comps/Header";
import Item from "./comps/Item";
import Footer from "./comps/Footer";
import Cabeca from "./comps/Cabeca";
import img1 from "./assets/img/amongus.png";

function Home() {
  return (
    <div className="">
      <Cabeca/>
      <Header />
      <h2 className="itens">Tendencia🤩🤩</h2>
      <img
        src={img1}
        alt="Amongus"
        
      />
      <h2 className="itens">Nossos itens🤤</h2>
      
        <Item />
       
      
      <br />
      <Footer />
    </div>
  );
}

export default Home;
