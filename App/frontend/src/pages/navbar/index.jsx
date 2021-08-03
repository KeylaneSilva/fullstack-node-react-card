import Buscar from "../../components/Buscar";

import logoImg from "../../assets/logo.png";

import "./index.css";

export default function NavBar() {
  return (
    <nav>
      <div className="container">
        <div className="containerLogo">
          <img className = "logo" src={logoImg} alt="Logo em forma de gota" />
          <h1>FullStack</h1>
        </div>
        
        <Buscar />
      </div>
    </nav>
  );
}
