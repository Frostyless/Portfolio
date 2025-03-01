import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import NavBar from './components/NavBar'
const App = () => {
  return (
    <main className='w-full overflow-x-hidden overflow-y-auto scrollbar-hide'>
      <NavBar />
      <Hero />
      <Services />
    </main>
     
  )
}

export default App