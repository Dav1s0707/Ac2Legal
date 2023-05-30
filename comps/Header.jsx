import "../App.css";
import img1 from "../assets/img/logo.png";
function Header() {
  return (
    <div className="linha">
      <img src={img1} alt="Logo" className="logo"/>
      <div className="linha">
        <h2>
          <a href="/">Home</a>
        </h2>
        <h2 className="espaco">
          <a href="/sobre">Sobre</a>
        </h2>
        <h2>
          <a href="contato">Contato</a>
        </h2>
      </div>
    </div>
  );
}

export default Header;
