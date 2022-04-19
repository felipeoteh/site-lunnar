import { useEffect, useState } from "react";

import Banner from "../components/Banner";
import Cases2 from "../components/Cases2";
import Header from "../components/Header";
import Solutions from "../components/Solutions";

export default function Home() {

  
  const [ scroll, setScroll ] = useState("sem scroll")

    useEffect( () => {

        const solutions = document.querySelector("#banner")
        const position = solutions.getBoundingClientRect()
        console.log(position)
    
      }, [scroll])

    useEffect( () => {

        const boxPai = document.querySelector("#boxPai")

        const body = document.querySelector("body")

        function posicaoScroll(){
          setScroll("fiz scroll")
        }

        boxPai.addEventListener('scroll', posicaoScroll )

    }, [] )

    console.log("scroll", scroll)

  return (
    <>
      <Header />
  
      <section id="boxPai" className="relative scroll-smooth boxPai snap-y h-screen snap-mandatory overflow-y-scroll">
        <Banner/>
        <Solutions/>
        <Cases2/>

      </section>
    </>
  )
}
