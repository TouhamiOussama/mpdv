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
      {/* <Portfolio /> */}
      <div className="min-h-[100vh] flex items-center justify-center ">
        <h1 className="darkBorderedText text-[4rem] max-md:text-[3rem] text-center font-[900]" >Not available at the moment !</h1>
      </div>
    </>
  )
}

export default App
