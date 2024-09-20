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
import Footer from './components/Footer'



function App() {
  
const sobremesas =[
  {id: 0, imagem: waffle, paragrafo: "torta", preço: "9", button: "add",},
  {id: 1, imagem: waffle, paragrafo: "teste", preço: "8", button: "add",},
  {id: 2, imagem: waffle, paragrafo: "doce", preço: "5", button: "add",},
  {id: 3, imagem: waffle, paragrafo: "bolo", preço: "5", button: "add",},
  {id: 4, imagem: waffle, paragrafo: "doce", preço: "10", button: "add",},
  {id: 5, imagem: waffle, paragrafo: "doce", preço: "10", button: "add",},
  {id: 5, imagem: waffle, paragrafo: "doce", preço: "10", button: "add",},
  {id: 5, imagem: waffle, paragrafo: "doce", preço: "10", button: "add",},
  {id: 5, imagem: waffle, paragrafo: "doce", preço: "10", button: "add",},
  {id: 5, imagem: waffle, paragrafo: "doce", preço: "10", button: "add",},
  {id: 5, imagem: waffle, paragrafo: "doce", preço: "10", button: "add",},
  {id: 5, imagem: waffle, paragrafo: "doce", preço: "10", button: "add",},
]
  return (
  <div>
      <Header logo={logo} hamburguers="" bolos="" carrinhoCompras={fechar}/>
    <div className='div-img'>
      <Templete   descricao="Bem-vindo(a) a nossa loja de sobremesas!!" />
    </div>
    <div className='caixa'>
  
    {sobremesas.map(item =>(
      <Produtos key={item.id} item={item} />) )}
    </div>
    <Footer />
  </div>
  )
}
export default App
