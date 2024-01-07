import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Pages/Hero';
import Service from './Pages/Service';
import Activities from './Pages/Activites';
import Programme from './Pages/Programme';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Programme />
      <Activities />
      <Footer/>
      </>
  )
}

export default App
