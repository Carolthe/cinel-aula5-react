import './App.css'
// Componentes
import Header from './components/Header'
import Templete from './components/Templete'
import Produtos from './components/Produtos'
import Footer from './components/Footer'
import ProdutosAdd from './components/ProdutoAdd'
// Imagens
import logo from './img/logo.png'
import fechar from './img/fechar.png'
import cocoChocolate from './img/produtos/cocoChocolate.png'
import boloMorango from './img/produtos/boloMorango.png'
import cafe from './img/produtos/cafe.png'
import chocolateBrancoMorango from './img/produtos/chocolateBrancoMorango.png'
import abacaxiCoco from './img/produtos/abacaxiCoco.png'
import frutosVermelhos from './img/produtos/frutosVermelhos.png'
import ganacheLimao from './img/produtos/ganacheLimao.png'
import morangoTrufado from './img/produtos/morangoTrufado.png'
import morangoCreme from './img/produtos/morangoCreme.png'
import limao from './img/produtos/limao.png'
import nutella from './img/produtos/nutella.png'
import pistache from './img/produtos/pistache.png'

function App() {
  
const sobremesas =[
  {id: 0, imagem: boloMorango, paragrafo: "Chocolate com Morango", preço: "9 €uros", button: "Add to cart",},
  {id: 1, imagem: cafe, paragrafo: "Creme Branco com Cafe", preço: "7 €uros", button: "Add to cart",},
  {id: 2, imagem: cocoChocolate, paragrafo: "Chocolate com Coco", preço: "10 €uros", button: "Add to cart",},
  {id: 3, imagem: chocolateBrancoMorango, paragrafo: "Chocolate Branco com Morango", preço: "5 €uros", button: "Add to cart",},
  {id: 4, imagem: abacaxiCoco, paragrafo: "Abacaxi com Coco", preço: "10 €uros", button: "Add to cart",},
  {id: 5, imagem: morangoTrufado, paragrafo: "Morango Trufado", preço: "10 €uros", button: "Add to cart",},
  {id: 5, imagem: frutosVermelhos, paragrafo: "Morango com Creme Vermelho", preço: "10 €uros", button: "Add to cart",},
  {id: 5, imagem: ganacheLimao, paragrafo: "Ganhachi com Creme de Limão", preço: "10 €uros", button: "Add to cart",},
  {id: 5, imagem: limao, paragrafo: "Limão com Creme Branco", preço: "10 €uros", button: "Add to cart",},
  {id: 5, imagem: morangoCreme, paragrafo: "Massa de Morango com Creme Branco", preço: "10 €uros", button: "Add to cart",},
  {id: 5, imagem: nutella, paragrafo: "Nutella com Cereja", preço: "10 €uros", button: "Add to cart",},
  {id: 5, imagem: pistache, paragrafo: "Pistache com Amendoas", preço: "10 €uros", button: "Add to cart",},
]
  return (
  <div>
      <Header logo={logo} hamburguers="" bolos="" carrinhoCompras={fechar}/>
    <div className='div-img'>
      <Templete   descricao="Delicious Cakes" />
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
