import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Rating from './components/ratingSection/Rating'

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Banner></Banner>
        <Rating></Rating>
      </main>
      
    </>
  )
}

export default App
