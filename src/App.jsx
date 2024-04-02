import './App.css'

import Footer from './components/Footer/Footer'
import InfoProduct from './components/InfoProduct'
import NavBar from './components/NavBar'
import Product from './components/Product/Product'
import RelatedProducts from './components/RelatedProducts/RelatedProducts'
import { useState } from 'react'

function App() {

  return (
    <> 
      {/*<NavBar />*/}
      <Product />
      <InfoProduct />
      <RelatedProducts />
      <Footer />
    </>
  )
}

export default App
