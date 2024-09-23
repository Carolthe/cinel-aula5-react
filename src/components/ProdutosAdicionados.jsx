export default function ProdutosAdicionados (){
    return(
        <div className=" container">
            <div className="img-add">
            <img src="#" />
            </div>
            <div>
            <p>nome do produto</p>
            <p>10£</p>
            </div>
            <div className="quantidade">
            <button> mais </button>
            <p>2</p>
            <button> menos </button>
            </div>
            <div className="remover">X</div>
        </div>
    )
}