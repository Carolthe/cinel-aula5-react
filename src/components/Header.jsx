import { useState } from "react"
import carrinhoCompras from '../img/carrinhoCompras.png'

export default function Header(props){
  const [sidebarAberta, setSidebarAberta] = useState(false)
  
  function alterar (){
    setSidebarAberta(!sidebarAberta)
  }

    return(
        <div className='header'>
          <img src={props.logo} className='logo'/>
          <p className='header-hamburgers'>{props.hamburguers}</p>
          <p className='header-bolos'>{props.bolos}</p>
          

        <div >
          <img className='carrinho' src={sidebarAberta ? props.carrinhoCompras : carrinhoCompras }
          onClick={alterar}
          />
       
       
       <div className={sidebarAberta ? 'abrir' : 'fechar' }>

       </div>
       </div>
       </div>
    )
}