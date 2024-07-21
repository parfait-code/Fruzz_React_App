import { useState } from 'react'
import { NavBar } from './assets/components/Navbar';
import { Home } from './assets/components/Home'
import { About } from './assets/components/About';
import { Product } from './assets/components/Product';
import { Pricing } from './assets/components/Pricing';
import { Footer } from './assets/components/Footer';

function App() {

  return (
    <>
      <header
        className=''>

        <NavBar />
      </header>
      <main
        className='flex-1'>
        <Home />
        <About />
        <Product />
        <Pricing />
      </main>
      <Footer />



    </>
  );
}

export default App
