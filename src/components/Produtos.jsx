export default function Produtos(props){

    return(
        <div className="produtos">
           <h1 className="nomeproduto">{props.nomeproduto}</h1>
           <div>
            <img className="imagens" src={props.imagem} />
            <p>{props.paragrafo}</p>
            <button>{props.button}</button>
           </div>
        </div>
    )
}