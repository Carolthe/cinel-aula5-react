import { useState } from "react"
import ProdutosCarrinho from "./ProdutosCarrinho"

export default function ProdutosCard(props) {
    const { item } = props
    const [produtoAdd, setProdutoAdd] = useState("")

    function adicionarAoCarrinho (){
       setProdutoAdd(<ProdutosCarrinho/>)
    }
    return (
        <div>
            <div className="produtos">
                <img className="imagem-cards" src={item.imagem} />
                <div className="paragrafo-cards">
                    <p className="descricao-cards" >{item.paragrafo}</p>
                    <p className="preco-cards">{item.preço}</p>
                </div>
                <button 
                onClick={adicionarAoCarrinho}
                value={produtoAdd}
                className="button-cards">{item.button}</button>
            </div>
        </div>
    )
}