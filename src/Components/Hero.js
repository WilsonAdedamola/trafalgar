import React from 'react'
import illustration from '../assets/illustration.svg'
import './hero.css'

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className="hero-text">
        <h2>Virtual healthcare for you</h2>
        <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
        <button className='hero-cta'>Consult today</button>
      </div>
      <div className="hero-illustration">
        <img src={illustration} alt="Trafalgar" className='illustration'/>
      </div>
    </section>
  )
}

export default Hero
