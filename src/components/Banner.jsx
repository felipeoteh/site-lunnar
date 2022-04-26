import { useEffect, useState } from "react";
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"

export default function Banner(){

    return(
        <>

            <div id="banner" className="snap-start
                flex items-center bg-primary h-screen w-screen index-0 px-6 md:px-12
            " >

                <div className="w-full md:w-2/3">
                    <h1 className="text-white text-6xl md:text-7xl font-medium uppercase tracking-tight">
                        A tecnologia que sua empresa precisa para aumentar o lucro.
                    </h1>
                    <Link href="#solutions">
                        <p className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-all 
                            text-white mt-4 font-light text-2xl tracking-[.7rem]">
                            saiba como <BsArrowRight/>
                        </p>  
                    </Link>
                </div>

                <div></div>

            </div>  
        
        </>
    )
}