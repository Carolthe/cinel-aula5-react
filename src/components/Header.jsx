import { useState } from "react"
import carrinhoCompras from '../img/carrinhoCompras.png'
import lupa from '../img/lupa.png'
import ProdutosAdicionados from "./ProdutosCarrinho"

export default function Header(props) {

  const [sidebarAberta, setSidebarAberta] = useState(false)
  const [addCarrinho, setAddCarrinho] = useState ("")

  function alterar() {
    setSidebarAberta(!sidebarAberta)

  }
  return (
  <div className='header'>
      <img src={props.logo} className='logo' />
      <div className="div-pesquisa"><input className="input" placeholder="Qual sobremesa você gostaria de pedir?" />
        <button className="button-lupa"><img className="img-lupa" src={lupa} /></button>
    </div>
      <div >
        <img className='carrinho'
          src={sidebarAberta ? props.carrinhoCompras : carrinhoCompras}
          onClick={alterar} />
        <div className={sidebarAberta ? 'abrir' : 'fechar'}>
          {sidebarAberta && (
            <div className="">
              <ProdutosAdicionados />
        </div>
          )}
        </div>
      </div>
    </div>
  )
}