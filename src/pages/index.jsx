import { useEffect, useState } from "react";

import Banner from "../components/Banner";
import Cases2 from "../components/Cases2";
import ClusterLunnar from "../components/ClusterLunnar";
import Contact from "../components/Contato";
import Solutions from "../components/Solutions";

export default function Home() {

  return (
    <>  
      <section id="boxPai" className="relative scroll-smooth boxPai snap-y h-screen snap-mandatory overflow-y-scroll">
        <Banner/>
        <Solutions/>
        <Cases2/>
        <ClusterLunnar/>
        <Contact/>
      </section>
    </>
  )
}
