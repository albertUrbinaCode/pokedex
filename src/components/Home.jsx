import React from 'react'
import InputHome from './InputHome'

const Home = () => {
  return (
    <div className='home'>
      <div className='home_principal'>
        <div className='welcome'>
          <h1>Pokedex</h1>
          <h2>Hello Trainer!</h2>
          <p>Enter your name to start</p>
        </div>
        <div className='img'>
          <img src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png" alt="avatar" />
        </div>
      </div>
      <div className='input'>
        <InputHome/>
      </div>
    </div>
  )
}

export default Home