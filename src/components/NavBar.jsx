import { useGSAP } from '@gsap/react'
import { useRef } from 'react';
import {navLinks}  from '../constants/index'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
  const containerRef = useRef();

  useGSAP(()=>{
    const navTween = gsap.timeline({
      scrollTrigger : {
        trigger: 'nav',
        start: 'bottom top',
        scrub: true, 
      }
    });

    navTween.fromTo('nav', {
      backgroundColor: 'transparent'
    }, {
      backgroundColor: "#00000050",
      backdropFilter: 'blur(10px)', 
      duration:1,
      ease: 'power1.inOut',
    });
  }, { scope: containerRef }); 

  return (
    <nav ref={containerRef}>
        <div>
            <a href="#home" className='flex items-center gap-2'>
               <img src="/images/logo.png" alt="" />
                <p>Velvet Pour</p>
            </a>

            <ul> 
                {navLinks.map((link)=>(
                  <li key={link.id}>
                    <a href={`#${link.id}`}>{link.title}</a>  
                  </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}