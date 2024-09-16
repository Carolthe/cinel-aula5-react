import './App.css'
import produtoComidas from './produtoComidas.json'
// Componentes
import Templete from './components/Templete'
import Produtos from './components/Produtos'

// Imagens
import logo from './img/logo.png'
import fechar from './img/fechar.png'
import bolo from './img/bolo.png'
import Header from './components/Header'
import baklava from './img/produtos/baklava.png'



function App() {
  

  return (
  <div>
      <Header logo={logo} hamburguers="Hamburguers" bolos="Sobremesas" carrinhoCompras={fechar}/>
    <div className='div-img'>
      
      

      <Templete classe="sobremesa" imgtemplete={bolo} descrição="Sobremesas" />
    </div>
    
    <Produtos nomeproduto="Sobremesas" imagem={baklava} paragrafo="sobremeda 50$" button="add"/>
    
  </div>
  )
}
export default App
