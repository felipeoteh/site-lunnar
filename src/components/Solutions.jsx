import Link from "next/link"
import { FiShoppingCart, FiShoppingBag, FiPlus, FiSmartphone } from "react-icons/fi"
import { HiAcademicCap, HiOutlineAcademicCap } from "react-icons/hi"
import { FaGooglePlay, FaLinux } from "react-icons/fa"
import { GrAppleAppStore } from "react-icons/gr"
import { BsArrowRight } from "react-icons/bs"
import { MdOutlineWeb, MdDashboard, MdOutlineScreenSearchDesktop } from "react-icons/md"
import { AiFillWindows, AiOutlineApple } from "react-icons/ai"
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

                <h1 className="titleSection solutions  uppercase text-bold 
                text-transparent text-[6rem] md:text-[8.75rem] ml-[-10px] md:ml-[-15px] ">
                    Soluções
                </h1>


                <ul className="flex flex-col md:flex-row items-stretch w-screen font-light z-10 md:h-[19rem] text-[1.9rem] leading-none
                    ">
                        
                        <a href="#lunnar-shop" className="bg-shop w-full h-[11rem] md:h-auto flex items-center p-8 relative cursor-pointer">
                            <li className="">
                                <p className="uppercase">
                                    <span className="font-bold">Mais Lucro</span><br/>
                                    com Vendas
                                </p>
                                <FiPlus className="w-20 h-20 stroke-[.5px] absolute right-4 bottom-4"/>
                            </li>
                        </a>
                        
                        <a href="#lunnar-academy" className="bg-academy w-full h-[11rem] md:h-auto flex items-center p-8 relative cursor-pointer">
                            <li>
                                <p className="uppercase">
                                    <span className="font-bold">Mais Lucro</span><br/>
                                    com Produtividade
                                </p>
                                <FiPlus className="w-20 h-20 stroke-[.5px] absolute right-4 bottom-4 cursor-pointer"/>
                            </li>
                        </a>  
                         
                        <a href="#lunnar-dev" className="bg-dev w-full h-[11rem] md:h-auto flex items-center p-8 relative cursor-pointer">
                            <li>
                                <p className="uppercase">
                                    <span className="font-bold">Mais Lucro</span><br/>
                                    com Desenvolvimento
                                </p>
                                <FiPlus className="w-20 h-20 stroke-[.5px] absolute right-4 bottom-4"/>
                            </li>
                        </a>
                </ul>
            </section>

            <section id="lunnar-shop" className="snap-start bg-shop p-12 gap-4
                    w-screen h-screen flex items-start flex-col justify-center">

                <img src="/logo-lunnar-shop-white.svg" className="max-w-[18rem]"  />

                <p className="text-2xl w-2/3 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus, nulla in mollis consectetur, ante elit vestibulum ante, ac fermentum tellus velit id leo. Ut et varius dolor.
                </p>

                <h1 className="titleSection services text-[3.5rem] uppercase text-bold 
                    text-transparent mt-12">
                    Serviços
                </h1>

                <ul className="flex items-stretch w-screen font-light z-10 gap-8
                    ">
                    <li className="w-1/4 flex flex-col gap-4 py-4 relative cursor-pointer">
                        <p className="uppercase flex items-center gap-4 text-[1.9rem] leading-none">
                            <FiShoppingCart/>
                            <span className="font-light"><b>Implantação</b><br/>de e-commerce</span>
                        </p>
                        <p className="text-[1.2rem]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus, nulla in mollis consectetur, ante elit vestibulum ante, ac fermentum tellus velit id leo. Ut et varius dolor. 
                        </p>

                        <Link href="#contact">
                            <p className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-all 
                                text-white font-light text-[1.2rem] tracking-[.5rem]">
                                saiba como <BsArrowRight/>
                            </p>  
                        </Link>
                    </li>

                    <li className="w-1/4 flex flex-col gap-4 py-4 relative cursor-pointer">
                        <p className="uppercase flex items-center gap-4 text-[1.9rem] leading-none">
                            <FiShoppingBag/>
                            <span className="font-light"><b>Marketplace de</b><br/>Negócios Locais</span>
                        </p>
                        <p className="text-[1.2rem]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus, nulla in mollis consectetur, ante elit vestibulum ante, ac fermentum tellus velit id leo. Ut et varius dolor. 
                        </p>

                        <Link href="#contact">
                            <p className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-all 
                                text-white font-light text-[1.2rem] tracking-[.5rem]">
                                saiba como <BsArrowRight/>
                            </p>  
                        </Link>
                    </li>
                </ul>

            </section>

            <section id="lunnar-academy" className="snap-start bg-academy p-12 gap-4
                w-screen h-screen flex items-start flex-col justify-center">

                <img src="/logo-lunnar-academy-white.svg" className="max-w-[18rem]"  />

                <p className="text-2xl w-2/3 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus, nulla in mollis consectetur, ante elit vestibulum ante, ac fermentum tellus velit id leo. Ut et varius dolor.
                </p>

                <h1 className="titleSection services text-[3.5rem] uppercase text-bold 
                    text-transparent mt-12">
                    Serviços
                </h1>

                <ul className="flex items-stretch w-screen font-light z-10 gap-8
                    ">
                    <li className="w-1/4 flex flex-col gap-4 py-4 relative cursor-pointer">
                        <p className="uppercase flex items-center gap-4 text-[1.9rem] leading-none">
                            <HiAcademicCap/>
                            <span className="font-light"><b>Ead Corporativo</b><br/>customizado</span>
                        </p>
                        <p className="text-[1.2rem]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus, nulla in mollis consectetur, ante elit vestibulum ante, ac fermentum tellus velit id leo. Ut et varius dolor. 
                        </p>

                        <Link href="#contact">
                            <p className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-all 
                                text-white font-light text-[1.2rem] tracking-[.5rem]">
                                saiba como <BsArrowRight/>
                            </p>  
                        </Link>
                    </li>

                    <li className="w-1/4 flex flex-col gap-4 py-4 relative cursor-pointer">
                        <p className="uppercase flex items-center gap-4 text-[1.9rem] leading-none">
                            <HiOutlineAcademicCap/>
                            <span className="font-light"><b>Ead Corporativo</b><br/>SaaS</span>
                        </p>
                        <p className="text-[1.2rem]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus, nulla in mollis consectetur, ante elit vestibulum ante, ac fermentum tellus velit id leo. Ut et varius dolor. 
                        </p>

                        
                        <ul className="flex items-center gap-4">
                            Disponível:
                            <li className="flex items-center gap-2">
                                <FaGooglePlay className="w-5 h-5"/>Google Play
                            </li>
                            <li className="flex items-center gap-2">
                                <GrAppleAppStore className="w-6 h-6"/> Apple Store
                            </li>
                            <li className="flex items-center gap-2">
                                <MdOutlineWeb className="w-6 h-6"/> Web
                            </li>
                        </ul>

                        <Link href="#contact">
                            <p className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-all 
                                text-white font-light text-[1.2rem] tracking-[.5rem]">
                                saiba como <BsArrowRight/>
                            </p>  
                        </Link>
                    </li>
                </ul>
            </section>

            <section id="lunnar-dev" className="snap-end bg-dev p-12 gap-4
                w-screen h-screen flex items-start flex-col justify-center">

                    <img src="/logo-lunnar-dev-white.svg" className="max-w-[18rem]"  />

                    <p className="text-2xl w-2/3 font-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus, nulla in mollis consectetur, ante elit vestibulum ante, ac fermentum tellus velit id leo. Ut et varius dolor.
                    </p>

                    <h1 className="titleSection services text-[3.5rem] uppercase text-bold 
                        text-transparent mt-12">
                        Serviços
                    </h1>

                    <ul className="flex items-stretch w-screen font-light z-10 gap-8
                        ">
                        <li className="w-1/4 flex flex-col gap-4 py-4 relative cursor-pointer">
                            <p className="uppercase flex items-center gap-4 text-[1.9rem] leading-none">
                                <MdDashboard/>
                                <span className="font-light"><b>Sistema</b><br/>customizado</span>
                            </p>
                            <p className="text-[1.2rem]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus, nulla in mollis consectetur, ante elit vestibulum ante, ac fermentum tellus velit id leo. Ut et varius dolor. 
                            </p>

                            <ul className="flex items-center gap-4">
                                <li className="flex items-center gap-2">
                                    <MdOutlineWeb className="w-6 h-6"/> Web
                                </li>
                                <li className="flex items-center gap-2">
                                    <AiFillWindows className="w-5 h-5"/>Windows
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaLinux className="w-6 h-6"/> Linux
                                </li>
                                <li className="flex items-center gap-2">
                                    <AiOutlineApple className="w-6 h-6"/> MacOs
                                </li>
                                
                            </ul>

                            <Link href="#contact">
                                <p className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-all 
                                    text-white font-light text-[1.2rem] tracking-[.5rem]">
                                    saiba como <BsArrowRight/>
                                </p>  
                            </Link>
                        </li>

                        <li className="w-1/4 flex flex-col gap-4 py-4 relative cursor-pointer">
                            <p className="uppercase flex items-center gap-4 text-[1.9rem] leading-none">
                                <FiSmartphone/>
                                <span className="font-light"><b>Aplicativo</b><br/>Multiplataforma</span>
                            </p>
                            <p className="text-[1.2rem]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus, nulla in mollis consectetur, ante elit vestibulum ante, ac fermentum tellus velit id leo. Ut et varius dolor. 
                            </p>
                            
                            <ul className="flex items-center gap-4">
                                <li className="flex items-center gap-2">
                                    <FaGooglePlay className="w-5 h-5"/>Google Play
                                </li>
                                <li className="flex items-center gap-2">
                                    <GrAppleAppStore className="w-6 h-6"/> Apple Store
                                </li>
                            </ul>

                            <Link href="#contact">
                                <p className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-all 
                                    text-white font-light text-[1.2rem] tracking-[.5rem]">
                                    saiba como <BsArrowRight/>
                                </p>  
                            </Link>
                        </li>

                        <li className="w-1/4 flex flex-col gap-4 py-4 relative cursor-pointer">
                            <p className="uppercase flex items-center gap-4 text-[1.9rem] leading-none">
                                <MdOutlineScreenSearchDesktop/>
                                <span className="font-light"><b>Desenvolvimento</b><br/>de Site</span>
                            </p>
                            <p className="text-[1.2rem]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus, nulla in mollis consectetur, ante elit vestibulum ante, ac fermentum tellus velit id leo. Ut et varius dolor. 
                            </p>

                            <Link href="#contact">
                                <p className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-all 
                                    text-white font-light text-[1.2rem] tracking-[.5rem]">
                                    saiba como <BsArrowRight/>
                                </p>  
                            </Link>
                        </li>
                    </ul>
                
            </section>
                
            </div> 
        
        </>
    )
}