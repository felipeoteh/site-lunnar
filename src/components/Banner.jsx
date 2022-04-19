import { useEffect, useState } from "react";
import Link from "next/link"

export default function Banner(){

    

    return(
        <>

            <div id="banner" className="snap-start
                flex items-center bg-[url('/bg-intro-site.jpeg')] h-screen w-screen index-0 px-12
            " >

                <div className="w-1/2">
                    <h1 className="text-white text-7xl font-extralight">
                        Acoplamos tecnologia em empresas para aumentar o lucro operacional.
                    </h1>
                    <Link href="#services">
                        <p className="cursor-pointer hover:opacity-90 transition-all w-1/3
                            flex items-center justify-center mt-4 rounded bg-primary text-white p-4 font-medium">
                            Saiba Como
                        </p>  
                    </Link>
                </div>

                <div>

                </div>

            </div>  
        
        </>
    )
}