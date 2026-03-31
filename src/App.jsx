import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Products from './components/digitalToolSection/Products'
import Navbar from './components/navbar/Navbar'
import Rating from './components/ratingSection/Rating'

const productFetch = async() =>{
  const res = await fetch('/data.json');
  return res.json();
}

function App() {

  const productPromise = productFetch();
  const [selectedProduct, setSelectedProduct] = useState([]);

  return (
    <>
      <header>
        <Navbar selectedProduct={selectedProduct}></Navbar>
      </header>

      <main>
        <Banner></Banner>
        <Rating></Rating>
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
          <Products
          selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}
          productPromise={productPromise}></Products>
        </Suspense>
      </main>
      
    </>
  )
}

export default App
