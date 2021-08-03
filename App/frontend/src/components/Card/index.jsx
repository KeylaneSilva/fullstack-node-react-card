
import './index.css'

export default function Card(props){
    return(
        <div className="card">
            <div className="dados">
                <h3 className="title-card">
                    {props.marca}
                </h3>
                <p className="veiculo">
                    {props.veiculo}
                </p>
                <p className="ano">
                    {props.ano}
                </p>
            </div>

            <div className="fav">
                <img src={MarcadorImg} alt="icone de marcação" />
                {/* <input type="checkbox" id="checkboxFav" />
                <label htmlFor="checkboxFav">
                    F
                </label> */}
            </div>
        </div>
    )
}