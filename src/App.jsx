import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Works from './pages/Works'
import Contact from './pages/Contact'

function App() {

  return (
    <>
    <Header/>
     <div className='container mx-auto px-1 min-h-10/12'>
      <Home/>
      <Skills/>
      <Works/>
      <Contact/>
     </div>
     <Footer/>
    </>
  )
}

export default App
