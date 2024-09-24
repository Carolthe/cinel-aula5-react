export default function ProdutosCarrinho() {
    return (
        <div className="cards-carrinho">
            <div className=" container">
                <div className="img-add">
                    <img src="#" />
                </div>
                <div>
                    <p className="produto-add">nome do produto</p>
                    <p className="valor-produtos">10£</p>
                </div>
                <div className="container-quantidade">
                    <button className="quantidade"> + </button>
                    <p className="numero-produtos">2</p>
                    <button className="quantidade">-</button>
                </div>
                <div className="remover">X</div>
            </div>
        </div>
    )
}