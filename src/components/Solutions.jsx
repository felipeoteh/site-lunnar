import Link from "next/link"
import { FiPlus } from "react-icons/fi"


import { useState } from "react"



export default function Services(){
    const [ service, setService ] = useState(0)

    return(
        <>
            <div id="solutions" className="snap-start relative
                flex items-start justify-center bg-white h-screen w-screen index-0
                 text-white flex-col gap-16
            " >

                <h1 className="titleSection solutions text-[8.75rem] uppercase text-bold 
                text-transparent ml-[-15px] ">
                    Soluções
                </h1>


                <ul className="flex items-stretch w-screen font-light z-10 h-[19rem] text-[1.9rem] leading-none
                    ">
                        <li className="bg-shop w-full flex items-center p-8 relative cursor-pointer">
                            <p className="uppercase">
                                <span className="font-bold">Mais Lucro</span><br/>
                                com Vendas
                            </p>
                            <FiPlus className="w-20 h-20 stroke-[.5px] absolute right-4 bottom-4"/>
                        </li>
                        <li className="bg-academy w-full flex items-center p-8 relative cursor-pointer">
                            <p className="uppercase">
                                <span className="font-bold">Mais Lucro</span><br/>
                                com Produtividade
                            </p>
                            <FiPlus className="w-20 h-20 stroke-[.5px] absolute right-4 bottom-4 cursor-pointer"/>
                        </li>   
                        <li className="bg-dev w-full flex items-center p-8 relative cursor-pointer">
                            <p className="uppercase">
                                <span className="font-bold">Mais Lucro</span><br/>
                                com Desenvolvimento
                            </p>
                            <FiPlus className="w-20 h-20 stroke-[.5px] absolute right-4 bottom-4"/>
                        </li>
                </ul>
                


        

            </div> 
        
        </>
    )
}