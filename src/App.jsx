import './App.css'
// Componentes
import Header from './components/Header'
import Templete from './components/Templete'
import ProdutosCard from './components/ProdutosCard'
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
import { useState } from 'react'


function App() {
  const [addCarrinho, setAddCarrinho] = useState([])
  function adicionarAoCarrinho (produto){
    setAddCarrinho([...addCarrinho, produto])
    console.log(addCarrinho)
  }
  
const sobremesas =[
  {id: 0, 
    imagem: boloMorango,
    paragrafo: "Chocolate e Morango", 
    valor: "9 €uros", 
    button: "Adicionar",},
  {id: 1, 
    imagem: cafe, 
    paragrafo: "Creme com Cafe", 
    valor: "7 €uros", 
    button: "Adicionar",},
  {id: 2, 
    imagem: cocoChocolate,
    paragrafo: "Chocolate com Coco", 
    valor: "10 €uros", 
    button: "Adicionar",},
  {id: 3, 
    imagem: chocolateBrancoMorango, 
    paragrafo: "Creme com Morango", 
    valor: "5 €uros", 
    button: "Adicionar",},
  {id: 4, 
    imagem: abacaxiCoco, 
    paragrafo: "Abacaxi com Coco", 
    valor: "10 €uros", 
    button: "Adicionar",},
  {id: 5, 
    imagem: morangoTrufado, 
    paragrafo: "Morango Trufado", 
    valor: "10 €uros", 
    button: "Adicionar",},
  {id: 6, 
    imagem: frutosVermelhos, 
    paragrafo: "Creme Vermelho", 
    valor: "10 €uros", 
    button: "Adicionar",},
  {id: 7, 
    imagem: ganacheLimao, 
    paragrafo: "Ganhachi com Limão", 
    valor: "10 €uros", 
    button: "Adicionar",},
  {id: 8, 
    imagem: limao, 
    paragrafo: "Limão com Creme", 
    valor: "10 €uros", 
    button: "Adicionar",},
  {id: 9, 
    imagem: morangoCreme, 
    paragrafo: "Cereja com Creme", 
    valor: "10 €uros", 
    button: "Adicionar",},
  {id: 10, 
    imagem: nutella, 
    paragrafo: "Nutella com Cereja", 
    valor: "10 €uros", 
    button: "Adicionar",},
  {id: 11, 
    imagem: pistache, 
    paragrafo: "Pistache", 
    valor: "10 €uros", 
    button: "Adicionar",},
]
  return (
  <div>
      <Header logo={logo} carrinhoCompras={fechar} addCarrinho={addCarrinho}/>
    <div className='div-img'>
      <Templete descricao="Delicious Cakes" />
    </div>
    <div className='container-cards'>
    {sobremesas.map(item =>(
      <ProdutosCard key={item.id} item={item} adicionarAoCarrinho={adicionarAoCarrinho} />) )}
    </div>
      <Footer img1={facebook} img2={instagram} img3={pinterest} />
  </div>
  )
}
export default App
