import { useState } from "react"
import carrinhoCompras from '../img/carrinhoCompras.png'
import lupa from '../img/lupa.png'
import ProdutosAdicionados from "./ProdutosAdicionados"

export default function Header(props){
  const [sidebarAberta, setSidebarAberta] = useState(false)
  
  function alterar (){
    setSidebarAberta(!sidebarAberta)
  }

    return(
        <div className='header'>
          <img src={props.logo} className='logo'/>
        
        <div className="div-pesquisa"><input className="input" placeholder="Qual sobremesa você gostaria de pedir?" />
          <button className="button-lupa"><img className="img-lupa" src={lupa} /></button>
        </div>  

        <div >
          <img className='carrinho' src={sidebarAberta ? props.carrinhoCompras : carrinhoCompras }
          onClick={alterar}/>
            {sidebarAberta && (
    <div className="">
   <ProdutosAdicionados />
    </div>
    )}
       
       
       <div className={sidebarAberta ? 'abrir': 'fechar' }>

       </div>
       </div>
       </div>
    )
}