import { useState } from "react";
import "./index.css";

export default function Modal(props) {
  const [boolPopUp, setBoolPopUp] = useState(true);

  var style = {
      display: props.open ? 'flex' : 'none'
  }

  function handlerSubmit(e) {
    e.preventDefault();
    setBoolPopUp(false);
  }

  function handlerPopUp() {
    let form = document.querySelector("form");
    let popUp = document.querySelector(".container-popup");
    popUp.style.display = "none";
    form.submit();
  }

  function handlerExit(){
    let maxLayout = document.querySelector('.maxLayout')
    maxLayout.style.display ='none'
  }

  return (
    <div
      className="maxLayout" style={style}
    >
      <div className="modalLayout">
        <h1>Novo Veículo</h1>
        <form onSubmit={handlerSubmit} action="/veiculos" method="POST">
          <div className="rowOne">
            <div className="column">
              <div className="label-input">
                <input
                  type="text"
                  id="veiculo"
                  name="veiculo"
                  placeholder="Veículo"
                />
              </div>

              <div className="label-input">
                <input type="number" id="ano" name="ano" placeholder="Ano" />
              </div>
            </div>

            <div className="column">
              <div className="label-input">
                <input
                  type="text"
                  id="marca"
                  name="marca"
                  placeholder="Marca"
                />
              </div>

              <div className="toggle">
                <input type="checkbox" id="vendido" name="vendido" />
                <label htmlFor="vendido" id="vendidoLabel"></label>
                <label htmlFor="vendido">Vendido</label>
              </div>
            </div>
          </div>

          <div className="label-input">
            <label htmlFor="descricao">Descrição</label>
            <textarea name="descricao" id="descricao"></textarea>
          </div>

          <div className="buttons">
            <button type="submit">ADD</button>
            <span id="sair" onClick={handlerExit}>FECHAR</span>
          </div>
        </form>

        <div
          className="container-popup"
          style={{
            display: boolPopUp ? "none" : "flex",
          }}
        >
          <div className="popup">
            <p>Enviado com Sucesso!</p>
            <button onClick={handlerPopUp}>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}
