import "../App.css";
function Footer() {
  return (
    <div>
      <hr />
      <div className="linha2  ">
        <h4>Happy Steps</h4>
        <h4>
          <a href="/">Home</a>
        </h4>
        <h4 className="espaco">
          <a href="/sobre">Sobre</a>
        </h4>
        <h4>
          <a href="contato">Contato</a>
        </h4>
        <h4>© 2023 Happy Steps, Inc.</h4>
      </div>
      <p className="centro">Made By Davi Queiroz</p>
    </div>
  );
}

export default Footer;
