import { useState } from "react"
import Carrinho from '../img/carrinhoCompras.png'
import lupa from '../img/lupa.png'
import ProdutosCarrinho from "./ProdutosCarrinho"

export default function Header({logo, carrinhoCompras, addCarrinho}) {

  const [sidebarAberta, setSidebarAberta] = useState(false)
  function alterar() {
    setSidebarAberta(!sidebarAberta)

  }
  return (
  <div className='header'>
      <img src={logo} className='logo' />
      <div className="div-pesquisa"><input className="input" placeholder="Qual sobremesa você gostaria de pedir?" />
        <button className="button-lupa"><img className="img-lupa" src={lupa} /></button>
    </div>
      <div >
        <img className='carrinho'
          src={sidebarAberta ? carrinhoCompras : Carrinho}
          onClick={alterar} />
        <div className={sidebarAberta ? 'abrir' : 'fechar'}>
          {sidebarAberta && (
            <div className="">
              <ProdutosCarrinho addCarrinho={addCarrinho} />
              <div className="container-total">
                <div className="container-itens">
              <div className="subtotal-sidebar">
                <p>Subtotal</p>
                <p>0 €uros</p>
              </div>
              <hr/>
              <div className="total-sidebar" >
              <b>Total</b>
              <b>0 €uros</b>
              </div>
              <button className="button-finalizar-pedido">Finalizar pedido</button>
              </div>
              </div>
        </div>
          )}
        </div>
      </div>
    </div>
  )
}