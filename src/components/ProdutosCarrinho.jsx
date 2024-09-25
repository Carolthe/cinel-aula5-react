import { useState } from 'react'
import lixo from '../img/lixo.png'

export default function ProdutosCarrinho({ addCarrinho }) {

    const [excluir, setExcluir] = useState (true)

    function excluirProduto (){
        setExcluir(false)
    }


    return (
        <div className="cards-carrinho">
            {
                addCarrinho.map(item => (
                    <div className="container" key={item.id}>
                        <div className="img-add">
                            <img className="imagem-card-carrinho" src={item.imagem} />
                        </div>
                        <div className="descricao-card">
                        <div>
                            <p className="produto-add">{item.paragrafo}</p>
                            <p className="valor-produtos-carrinho">{item.valor}</p>
                        <div className="container-quantidade">
                            <button className="quantidade">mais</button>
                            <p className="numero-produtos">2</p>
                            <button className="quantidade">menos</button>
                       </div>
                        </div>
                        </div>
                  
                        <button className="remover"
                        onClick={excluirProduto}
                        ><img src={lixo}/></button>
                    </div>
                ))
            }
        </div>

    )
}