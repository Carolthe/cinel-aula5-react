import './App.css'
import produtoComidas from './produtoComidas.json'
// Componentes
import Templete from './components/Templete'
import Produtos from './components/Produtos'

// Imagens
import logo from './img/logo.png'
import fechar from './img/fechar.png'
import Header from './components/Header'
import waffle from './img/produtos/waffle.png'
import ProdutosAdd from './components/ProdutoAdd'



function App() {
  

  return (
  <div>
      <Header logo={logo} hamburguers="" bolos="" carrinhoCompras={fechar}/>
    <div className='div-img'>
      <Templete   descrição="Bem-vindo(a) a nossa loja de sobremesas!!" />
    </div>
    <div className='caixa'>
    <Produtos nomeproduto="Sobremesas" imagem={waffle} paragrafo="nome da sobremesa" preço="10£" button="add"/>
    <Produtos imagem={waffle} paragrafo="nome da sobremesa" preço="10£" button="add"/>
    <Produtos nomeproduto="Sobremesas" imagem={waffle} paragrafo="nome da sobremesa" preço="10£" button="add"/>
    
    {/* <ProdutosAdd /> */}
    
    </div>
  </div>
  )
}
export default App
