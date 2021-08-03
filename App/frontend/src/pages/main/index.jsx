import { useEffect, useState } from "react";
import api from "../../services/api";

import favImg from "../../assets/marcador.png"
import "./index.css";

export default function Main() {
  const [carros, setCarros] = useState({});

  // alterar os valores no card detalhes
  const [veiculo, setVeiculo] = useState('');
  const [marca, setMarca] = useState('');
  const [ano, setAno] = useState('');
  const [descricao, setDescricao] = useState('');

  api.then((e) => {
    setCarros(e);
  });

  useEffect(() => {
    handleCards();
    handleDetails();
    handleCorFav();
  });

  function handleCards() {
    if (Object.values(carros).length === 0) {
      console.log("Parece que esta sem carros cadastrados, qualquer coisa é só atualizar lista :)");
    } else {
      let sectionList = document.querySelector("#lista-de-veiculos");
      sectionList.innerHTML = "";
      for (let i = 0; i <= Object.values(carros).length - 1; i++) {
        sectionList.innerHTML +=
          '<div class="card"> <div class="dados"> <h3 class="title-card">' +
          carros[i].marca +
          ' </h3> <p class="veiculo">' +
          carros[i].veiculo +
          ' </p> <p class="ano">' +
          carros[i].ano +
          '</p> </div> <div class="fav"> <div class="img"> </div </div> </div>';
      }
    }
  }

  function handleDetails() {
    let cards = document.querySelectorAll(".card");
    let dadosCard;

    cards.forEach(function (card) {
      card.addEventListener("click", () => {
        let recebeDadosCard = card.innerText.replaceAll("\n", "-");
        dadosCard = recebeDadosCard.replaceAll("--", "-");
        window.location.href = '#details'

        for (let i = 0; i <= Object.values(carros).length - 1; i++) {
          let idVeiculo =
            carros[i].marca + "-" + carros[i].veiculo + "-" + carros[i].ano;

          if (dadosCard.toLowerCase() === idVeiculo.toLowerCase()) {
            setVeiculo(carros[i].veiculo)
            setMarca(carros[i].marca)
            setAno(carros[i].ano)
            setDescricao(carros[i].descricao)
          }
        }
      });
    });
  }

  function handleCorFav(){
    let favsImgs = document.querySelectorAll('.img')
    favsImgs.forEach(function(favImg){
      favImg.addEventListener('click',()=>{
        favImg.style.filter = 'invert(48%) sepia(25%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%)'
      })
    })
  }

  return (
    <div className="container-main">
      <div className="container-section">
        <div className="lista">
          <p className="title-section">Lista de veículos</p>
          <button onClick={handleCards}>Atualizar Lista</button>
        </div>

        <section id="lista-de-veiculos"> </section>
      </div>

      <div className="container-section details" id="details">
        <p className="title-section">Detalhes</p>
        <section id="detalhes">
          <h2>{veiculo ? veiculo : 'Nome do veiculo'}</h2>
          <div className="marca-ano">
            <div className="marca">
              <label>Marca</label>
              <p>{marca ? marca : 'Marca do veiculo'}</p>
            </div>
            <div className="ano">
              <label>Ano</label>
              <p>{ano ? ano : 'Ano do veiculo'}</p>
            </div>
          </div>
          <div className="descricao">
            <p>{descricao ? descricao : 'Descição do veiculo'}</p>
          </div>
          <span id="linha"></span>
          <label className="editar">
            &#x270F;&#xFE0F;
            EDITAR
          </label>
          <img className="img" src={favImg} alt="icone de favoritar" />
        </section>
      </div>
    </div>
  );
}
