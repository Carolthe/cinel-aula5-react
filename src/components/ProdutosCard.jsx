export default function ProdutosCard(props){
const {item} = props
    return(      
           <div>
        <div className="produtos">
            <img className="imagens" src={item.imagem} />
           <div className="paragrafo">
            <p className="descricao-card" >{item.paragrafo}</p>
            <p className="preco-card">{item.preço}</p>
            </div>
            <button className="button-produtos">{item.button}</button>
           </div>
        </div> 
    )
}