import { useState } from "react";
import Modal from "../modal";

import buttonImg from "../../assets/buttonPlus.png";

import "./index.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <h2>Veículo</h2>
        <input
          type="checkbox"
          id="buttonModal"
          onChange={(e) => setOpen(e.target.checked)}
        />
        <label id="buttonModalLabel" htmlFor="buttonModal">
          <img src={buttonImg} alt="botão redondo plus" />
        </label>
      </header>
      <Modal open={open} id="modal" />
    </>
  );
}
