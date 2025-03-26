// import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cards from './components/Cards'

function App() {

  return (
    <>

     <Navbar/> 

     <div className="cards">
      
      <Cards title="Card 1" desc="Card 1 desciption"/>
      <Cards title="Card 2" desc="Card 2 desciption"/>
      <Cards title="Card 3" desc="Card 3 desciption"/>
      <Cards title="Card 4" desc="Card 4 desciption"/>

     </div>

     <Footer/>

    </>
  )
}

export default App
