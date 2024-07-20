import { useState } from 'react'
import { NavBar } from './assets/components/Navbar';
import { Home } from './assets/components/Home'
import { About } from './assets/components/About';
import { Product } from './assets/components/Product';
import { Pricing } from './assets/components/Pricing';

function App() {

  return (
    <>

      <NavBar />
      <main
        className='flex-1'>
        <Home />
        <About />
        <Product />
        <Pricing />
      </main>


    </>
  );
}

export default App
