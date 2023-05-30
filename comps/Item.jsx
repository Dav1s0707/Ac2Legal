import "../App.css";
import json from "../../db.json";
import bem10 from "../assets/img/bem10.png"

function Item() {
  return (
    <div>
      <div className="itens">
      {json.produto.map((id) => (
        <div className="item" key={id}>
          <img
            src={bem10}
            className="bem10"
            alt="Sandalha do bem 10"
          />
          <h3>{id.produto}</h3>
          <p>{id.descricao}</p>
          <p>{id.preco}</p>
          <button>Conferir</button>
       
        </div>
      ))}
    </div>
    </div>
  );
}

export default Item;
