
import { ReactLenis } from 'lenis/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Skill from './Components/Skill'
import Work from './Components/Work'
import Review from './Components/Review'

import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { element } from 'prop-types';


function App() {
  useEffect(() => {
    const elements = gsap.utils.toArray('.reveal-up')
    elements.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        ease: 'power2.out',
      })
    })
    // cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <ReactLenis root>
      <Header/>
      <main>
      <Hero/>
      <About/>
      <Skill/>
      <Work/>
      {/* <Review/> */}
      <Contact/>
      </main>
      <Footer/>
     
      </ReactLenis>
      
  )
}

export default App
