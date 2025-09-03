import { useGSAP } from '@gsap/react'
import { cocktailLists, mockTailLists } from '../constants/index'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function Cocktails() {
  const containerRef = useRef(null)

  useGSAP(
    () => {
      const parallaxTimeLine = gsap.timeline({
        scrollTrigger: {
          trigger: '#cocktails', 
          start: 'top 30%', 
          end: 'bottom 80%',
          scrub: true, 
        },
      })

      parallaxTimeLine.from('#c-left-leaf', {
        x: -100,
        y: 150,
      })

      .from('#c-right-leaf', {
        x: 100,
        y: 100,
      })
    },
    { scope: containerRef } 
  )

  return (
    <section id='cocktails' className='noisy' ref={containerRef}>
      <img src='/images/cocktail-left-leaf.png' alt='l-leaf' id='c-left-leaf' />
      <img src='/images/cocktail-right-leaf.png' alt='r-leaf' id='c-right-leaf' />

      <div className='list'>
        <div className='popular'>
          <h2>Most popular</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className='md:me-28'>
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>-{price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='loved'>
          <h2>Most loved mocktail</h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className='md:me-28'>
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>-{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}