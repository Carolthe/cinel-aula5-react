export default function Produtos(props){
const {item} = props
    return(      
           <div>
        <div className="produtos">
            <img className="imagens" src={item.imagem} />
           <div className="paragrafo">
            <p>{item.paragrafo}</p>
            <p className="preço">{item.preço}</p>
            </div>
            <button className="button-produtos">{item.button}</button>
           </div>
        </div> 
    )
}