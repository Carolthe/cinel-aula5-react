export default function Produtos(props){

    return(      
           <div>
        <div className="produtos">
            <img className="imagens" src={props.imagem} />
           <div className="paragrafo">
            <p>{props.paragrafo}</p>
            <p className="preço">{props.preço}</p>
            </div>
            <button className="button-produtos">{props.button}</button>
           </div>
        </div> 
    )
}