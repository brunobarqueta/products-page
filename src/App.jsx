import './App.css'

import Footer from './components/Footer/Footer'
import InfoProduct from './components/InfoProduct'
import NavBar from './components/NavBar/NavBar'
import Product from './components/Product/Product'
import RelatedProducts from './components/RelatedProducts/RelatedProducts'
import Title from './components/Title'

function App() {

  return (
    <> 
      <NavBar />
      <Title />
      <Product />
      <InfoProduct />
      <RelatedProducts />
      <Footer />
    </>
  )
}

export default App
