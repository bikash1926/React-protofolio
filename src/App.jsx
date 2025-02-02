
import { ReactLenis,  } from 'lenis/react'

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP , ScrollTrigger);


import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Skill from './Components/Skill'
import Work from './Components/Work'
import Review from './Components/Review'
import Edu from './Components/Edu'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { element } from 'prop-types';


function App() {

useGSAP (()=>{
  const element = gsap.utils .toArray('.reveal-up');
  
  element.forEach((element)=>{
    gsap.to(element,{
     scrollTrigger:
     {
      trigger:element,
      start:'-200 bottom',
      end:'bottom 80%',
      scrub:true,
     
     },
     y:0,
     opacity:1,
     direction:1,
     ease:'power2.out'
    })
  })
})


  return (
    <ReactLenis root>
      <Header/>
      <main>
      <Hero/>
      <About/>
      <Skill/>
      <Work/>
      {/* <Review/> */}
      <Edu/>
      <Contact/>
      </main>
      <Footer/>
     
      </ReactLenis>
      
  )
}

export default App
