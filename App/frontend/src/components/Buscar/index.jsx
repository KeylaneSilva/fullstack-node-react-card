import { useEffect, useState } from "react";
import lupaImg from "../../assets/lupa.png";

import "./index.css";

export default function Buscar() {
  const [value, setValue] = useState("");

  useEffect(() => {
    let campoFiltro = document.querySelector("#buscar");

    campoFiltro.addEventListener("input", function () {
      let cards = document.querySelectorAll(".card");

      if (this.value.length > 0) {
        for (let i = 0; i < cards.length; i++) {
          let card = cards[i];
          let marcaCarro = card.querySelector(".veiculo");
          let marca = marcaCarro.textContent;

          let nomeCarro = card.querySelector(".title-card");
          let nome = nomeCarro.textContent;

          let anoCarro = card.querySelector(".ano");
          let ano = anoCarro.textContent;

          let expressao = new RegExp(this.value, "i");

          if (
            !expressao.test(nome) &&
            !expressao.test(marca) &&
            !expressao.test(ano)
          ) {
            card.style.height = "0";
            card.style.padding = "0";
            card.style.margin = "0";
            card.style.transition = "all 700ms";
            card.style.transform = "translateX(-600px)";
          } else {
            card.style.height = "";
            card.style.padding = "";
            card.style.margin = "";
            card.style.transform = "";
          }
        }
      } else {
        for (let i = 0; i < cards.length; i++) {
          let card = cards[i];
          card.style.height = "";
          card.style.padding = "";
          card.style.margin = "";
          card.style.transform = "";
        }
      }
    });
  });

  return (
    <>
      <input type="checkbox" id="checkbox" />
      <input
        type="text"
        name="buscar"
        id="buscar"
        placeholder="BUSCA por um veículo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label id="labelCheck" htmlFor="checkbox">
        <img src={lupaImg} alt="imagem de lupa de pesquisa" className="lupa" />
      </label>
    </>
  );
}
