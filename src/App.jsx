import {ScrollTrigger, SplitText} from "gsap/all"
import gsap from "gsap"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
gsap.registerPlugin(ScrollTrigger, SplitText)

export default function App() {
  return (
    <main>
       <NavBar />
       <Hero />
       {console.log(`i day work o`)}
    </main>
  )
}
