import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Products from './components/digitalToolSection/Products'
import Navbar from './components/navbar/Navbar'
import Rating from './components/ratingSection/Rating'
import { ToastContainer } from 'react-toastify'
import StepSection from './components/stepsSection/StepSection'
import TransparentPricing from './components/transparentPricing/TransparentPricing'
import Footer from './components/footerSection/Footer'
import WorkFlow from './components/workflowSection/WorkFlow'

const productFetch = async() =>{
  const res = await fetch('/data.json');
  return res.json();
}

const productPromise = productFetch();

function App() {

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

        <StepSection></StepSection>
        <TransparentPricing></TransparentPricing>
        <WorkFlow></WorkFlow>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
      
      <ToastContainer></ToastContainer>
      
    </>
  )
}

export default App
