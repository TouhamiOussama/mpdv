import Portfolio from "./components/portfolio/portfolio"
import { useLenis } from "lenis/react"
import Lenis from "lenis";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Portfolio />
    </>
  )
}

export default App
