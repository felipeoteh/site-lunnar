import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Cases from "../components/Cases";
import Header from "../components/Header";
import Services from "../components/Services";


export default function Home() {

  return (
    <>
      <Header />
  
      <section id="boxPai" className="scroll-smooth boxPai snap-y h-screen snap-mandatory overflow-y-scroll">
        <Banner/>
        <Services/>
        <Cases/>

      </section>
    </>
  )
}
