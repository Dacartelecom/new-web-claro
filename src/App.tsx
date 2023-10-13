import { useEffect, useState } from 'react';
import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Nav } from './components/Header/Nav'
import HomeMovil from './app/movil/page';
import HomeFija from './app/fija/page';

function App() {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    const pathname = window.location.pathname;
    const movil = pathname.includes('planes-moviles');
    setShow(movil)
  },[])
  return (
    <>
      <Header />
    <main>
    <Nav />
    {show?<HomeMovil/> : <HomeFija/>}
    </main>
    <Footer />
    </>
  )
}

export default App
