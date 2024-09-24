export default function ProdutosCarrinho({ addCarrinho }) {

    return (
        <div className="cards-carrinho">
            {
                addCarrinho.map(item => (
                    <div className=" container" key={item.id}>
                        <div className="img-add">
                            <img src="#" />
                        </div>
                        <div>
                            <p className="produto-add">{item.paragrafo}</p>
                            <p className="valor-produtos">{item.preco}</p>
                        </div>
                        <div className="container-quantidade">
                            <button className="quantidade"> + </button>
                            <p className="numero-produtos">2</p>
                            <button className="quantidade">-</button>
                        </div>
                        <div className="remover">X</div>
                    </div>
                ))
            }
        </div>

    )
}