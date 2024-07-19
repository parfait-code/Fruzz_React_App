import { useState } from 'react'
import { NavBar } from './assets/components/Navbar';
import { Home } from './assets/components/Home'
import { About } from './assets/components/About';

function App() {

  return (
    <>

      <NavBar />
      <main
        className='flex-1'>
        <Home />
        <About />
      </main>


    </>
  );
}

export default App
