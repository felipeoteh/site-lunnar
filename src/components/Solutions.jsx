import Link from "next/link"
import { FiPlus } from "react-icons/fi"
import { useState } from "react"


export default function Services(){

    return(
        <>
            <div id="solutions" className="scroll-smooth snap-x overflow-x-scroll
                snap-start relative flex
                bg-white h-screen w-screen index-0
                 text-white
            " >

            <section className="snap-end w-screen h-screen flex flex-col items-start justify-center">

                <h1 className="titleSection solutions text-[8.75rem] uppercase text-bold 
                text-transparent ml-[-15px] ">
                    Soluções
                </h1>


                <ul className="flex items-stretch w-screen font-light z-10 h-[19rem] text-[1.9rem] leading-none
                    ">
                        
                        <li className="bg-shop w-full flex items-center p-8 relative cursor-pointer">
                            <a href="#lunnar-shop">
                                <p className="uppercase">
                                    <span className="font-bold">Mais Lucro</span><br/>
                                    com Vendas
                                </p>
                                <FiPlus className="w-20 h-20 stroke-[.5px] absolute right-4 bottom-4"/>
                            </a>
                        </li>
                        
                        
                        <li className="bg-academy w-full flex items-center p-8 relative cursor-pointer">
                            <a href="#lunnar-academy">
                                <p className="uppercase">
                                    <span className="font-bold">Mais Lucro</span><br/>
                                    com Produtividade
                                </p>
                                <FiPlus className="w-20 h-20 stroke-[.5px] absolute right-4 bottom-4 cursor-pointer"/>
                            </a>
                        </li>  
                         
                        <li className="bg-dev w-full flex items-center p-8 relative cursor-pointer">
                            <a href="#lunnar-dev">
                                <p className="uppercase">
                                    <span className="font-bold">Mais Lucro</span><br/>
                                    com Desenvolvimento
                                </p>
                                <FiPlus className="w-20 h-20 stroke-[.5px] absolute right-4 bottom-4"/>
                            </a>
                        </li>
                </ul>
            </section>

            <section id="lunnar-shop" className="snap-end bg-shop w-screen h-screen flex items-start flex-col justify-center">

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
            </section>

            <section id="lunnar-academy" className="snap-end bg-academy w-screen h-screen flex items-start flex-col justify-center">

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
            </section>

            <section id="lunnar-dev" className="snap-end bg-dev w-screen h-screen flex items-start flex-col justify-center">

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
            </section>
                
            </div> 
        
        </>
    )
}