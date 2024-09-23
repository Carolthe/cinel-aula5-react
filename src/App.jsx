import './App.css'
// Componentes
import Header from './components/Header'
import Templete from './components/Templete'
import Produtos from './components/ProdutosCard'
import Footer from './components/Footer'

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
import facebook from './img/facebook.png'
import instagram from './img/instagram.png'
import pinterest from './img/pinterest.png'


function App() {
  
const sobremesas =[
  {id: 0, 
    imagem: boloMorango,
    paragrafo: "Chocolate com Morango", 
    preço: "9 €uros", 
    button: "Adicionar",},
  {id: 1, 
    imagem: cafe, 
    paragrafo: "Creme Branco com Cafe", 
    preço: "7 €uros", 
    button: "Adicionar",},
  {id: 2, 
    imagem: cocoChocolate,
    paragrafo: "Chocolate com Coco", 
    preço: "10 €uros", 
    button: "Adicionar",},
  {id: 3, 
    imagem: chocolateBrancoMorango, 
    paragrafo: "Chocolate Branco com Morango", 
    preço: "5 €uros", 
    button: "Adicionar",},
  {id: 4, 
    imagem: abacaxiCoco, 
    paragrafo: "Abacaxi com Coco", 
    preço: "10 €uros", 
    button: "Adicionar",},
  {id: 5, 
    imagem: morangoTrufado, 
    paragrafo: "Morango Trufado", 
    preço: "10 €uros", 
    button: "Adicionar",},
  {id: 5, 
    imagem: frutosVermelhos, 
    paragrafo: "Morango com Creme Vermelho", 
    preço: "10 €uros", 
    button: "Adicionar",},
  {id: 5, 
    imagem: ganacheLimao, 
    paragrafo: "Ganhachi com Creme de Limão", 
    preço: "10 €uros", 
    button: "Adicionar",},
  {id: 5, 
    imagem: limao, 
    paragrafo: "Limão com Creme Branco", 
    preço: "10 €uros", 
    button: "Adicionar",},
  {id: 5, 
    imagem: morangoCreme, 
    paragrafo: "Cereja com Creme Branco", 
    preço: "10 €uros", 
    button: "Adicionar",},
  {id: 5, 
    imagem: nutella, 
    paragrafo: "Nutella com Cereja", 
    preço: "10 €uros", 
    button: "Adicionar",},
  {id: 5, 
    imagem: pistache, 
    paragrafo: "Pistache com Amendoas", 
    preço: "10 €uros", 
    button: "Adicionar",},
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
    <Footer img1={facebook} img2={instagram} img3={pinterest} />
  </div>
  )
}
export default App
