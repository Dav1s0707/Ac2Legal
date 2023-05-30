import Header from "./comps/Header";
import Footer from "./comps/Footer";
import Cabeca from "./comps/Cabeca";

function Home() {
  return (
    <div>
      <Cabeca></Cabeca>
      <Header></Header>
      <div className="centro">
        <h2>Sobre Nos</h2>
        <div className="meio">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis obcaecati iste consequuntur rem qui rerum delectus fugit repudiandae natus? Facilis placeat soluta odio eveniet blanditiis aliquam praesentium ipsam vitae voluptate.</h3><br />
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat distinctio suscipit minima ad voluptate tempore iure, soluta itaque excepturi, incidunt aliquid illum fuga quo placeat nihil ex officia! Consequatur, veritatis!</h3><br />
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestias earum laboriosam excepturi sed. Quam cum ullam beatae, at temporibus eius nihil ad corporis possimus eveniet? Eos quas nihil harum?</h3><br />
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
