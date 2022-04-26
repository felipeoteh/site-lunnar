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
            <div id="solutions" className="scroll-smooth snap-x overflow-x-scroll snap-mandatory
                snap-start flex relative
                bg-white h-screen w-screen index-0 text-white
            " >

                <section className="snap-start w-[screen] h-screen flex flex-col items-start justify-center">

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

                <section id="lunnar-shop" className="snap-start bg-shop p-4 md:p-12 gap-4
                        w-screen h-[120vh] flex items-start flex-col justify-center">

                    <img src="/logo-lunnar-shop-white.svg" className="max-w-[18rem]"  />

                    <p className="text-xl md:text-2xl font-light">
                        Vender online se tornou uma necessidade e viabilizar essa canal de vendas em seu negócio está mais acessível que você imagina. Em menos de 30 dias é possível colocar sua loja virtual no ar.
                    </p>

                    <h1 className="titleSection services text-[3.5rem] uppercase text-bold 
                        text-transparent mt-4 md:mt-12">
                        Serviços
                    </h1>

                    <ul className="flex flex-col md:flex-row items-stretch w-[calc(100vw-2rem)] font-light z-10 gap-8
                        ">
                        <li className="md:w-1/3 flex flex-col gap-4 md:py-4 relative cursor-pointer">
                            <p className="uppercase flex items-center gap-4 text-[1.9rem] leading-none">
                                <FiShoppingCart/>
                                <span className="font-light"><b>Implantação</b><br/>de e-commerce</span>
                            </p>
                            <p className="text-[1.2rem]">
                                Colocamos sua loja no ar em poucos dias no modelo mvp e também implantação 
                                corporativa de alto impacto. Platafomas: Tray Commerce e Tray Corp by Fbits.
                            </p>

                            <Link href="#contact">
                                <p className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-all 
                                    text-white font-light text-[1.2rem] tracking-[.5rem]">
                                    saiba como <BsArrowRight/>
                                </p>  
                            </Link>
                        </li>

                        <li className="md:w-1/3 flex flex-col gap-4 md:py-4 relative cursor-pointer">
                            <p className="uppercase flex items-center gap-4 text-[1.9rem] leading-none">
                                <FiShoppingBag/>
                                <span className="font-light"><b>Marketplace de</b><br/>Negócios Locais</span>
                            </p>
                            <p className="text-[1.2rem]">
                                Plataforma SaaS de Marketplace para negócios locais.  
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

                <section id="lunnar-academy" className="snap-start bg-academy p-4 md:p-12 gap-4
                    w-screen h-[120vh] flex items-start flex-col justify-center">

                    <img src="/logo-lunnar-academy-white.svg" className="max-w-[18rem]"  />

                    <p className="text-1xl md:text-2xl font-light">
                        Você sabia que um colaborador desengajado chega a custar 7x o próprio salário ao longo do tempo? 
                        Não deixe isso acontecer na sua empresa! Aumente o engajamento dos seus colaboradores com as soluções de academy 
                        customizado ou no modelo saas. Ideal para aumento de engajamento, gamificação e inventario de processos.
                    </p>

                    <h1 className="titleSection services text-[2.5rem] uppercase text-bold 
                        text-transparent mt-4 md:mt-12">
                        Serviços
                    </h1>

                    <ul className="flex flex-col md:flex-row items-stretch w-[calc(100vw-2rem)] font-light z-10 md:gap-8
                        ">
                        <li className="md:w-1/3 flex flex-col gap-4 py-4 relative ">
                            <p className="uppercase flex items-center gap-4 text-[1.9rem] leading-none">
                                <HiAcademicCap/>
                                <span className="font-light"><b>Ead Corporativo</b><br/>customizado</span>
                            </p>
                            <p className="text-[1.2rem]">
                                Academy Corporativo voltado para empresas para mais de 200 colaboradores onde é 100% customizável conforme as necessidades. 
                            </p>

                            <Link href="#contact">
                                <p className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-all 
                                    text-white font-light text-[1.2rem] tracking-[.5rem]">
                                    saiba como <BsArrowRight/>
                                </p>  
                            </Link>
                        </li>

                        <li className="md:w-1/3 flex flex-col gap-4 py-4 relative cursor-pointer">
                            <p className="uppercase flex items-center gap-4 text-[1.9rem] leading-none">
                                <HiOutlineAcademicCap/>
                                <span className="font-light"><b>Ead Corporativo</b><br/>SaaS</span>
                            </p>
                            <p className="text-[1.2rem]">
                                Academy ideal para empresas apartir de 06 colaboradores.
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

                <section id="lunnar-dev" className="snap-end bg-dev p-4 md:p-12 gap-4
                    w-screen h-[120vh] flex items-start flex-col pt-20 md:justify-center">

                        <svg className={`hover:opacity-100 transition-all max-w-[18rem]`}
                            id="logo-lunnar-dev-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 945 299">
                            <text id="lunnar" transform="translate(0 182)" fill="#fff" fontSize="170" fontFamily="Jost" fontWeight="300" letterSpacing="0.07em"><tspan x="0" y="0">LUNNAR</tspan></text>
                            <text id="_dev_" data-name="&lt;/dev&gt;" transform="translate(566 258)" fill="#fff" fontSize="110" fontFamily="Jost" fontWeight="500" letterSpacing="-0.07em"><tspan x="0" y="0">&lt;/DEV&gt;</tspan></text>
                        </svg>

                        <p className="text-1xl font-light">
                            Mapear, Analisar e Criar Planos de Ação com Dados é o Diferencial Competitivo que fará seu negócio decolar. Desenvolvemos softwares sob demanda, aplicativos e sites inteligentes com tecnologia de ponta.
                        </p>

                        <h1 className="titleSection services text-[2.5rem] uppercase text-bold 
                            text-transparent mt-4 md:mt-12">
                            Serviços
                        </h1>

                        <ul className="flex flex-col md:flex-row items-stretch w-[calc(100vw-2rem)] font-light z-10 md:gap-8
                            ">
                            <li className="md:w-1/3 flex flex-col gap-4 py-4 relative cursor-pointer">
                                <p className="uppercase flex items-center gap-4 text-[1.9rem] leading-none">
                                    <MdDashboard/>
                                    <span className="font-light"><b>Sistema</b><br/>customizado</span>
                                </p>
                                <p className="text-[1.2rem]">
                                    Quem faz gestão de negócios orientado a dados sabe a importância de um bom sistema azeitado e voltado para seu negócio.  
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

                            <li className="md:w-1/3 flex flex-col gap-4 py-4 relative cursor-pointer">
                                <p className="uppercase flex items-center gap-4 text-[1.9rem] leading-none">
                                    <FiSmartphone/>
                                    <span className="font-light"><b>Aplicativo</b><br/>Multiplataforma</span>
                                </p>
                                <p className="text-[1.2rem]">
                                    Disponibilize um aplicativo para seus clientes. Desenvolvemos aplicativos multiplataforma (Android e IOS).
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

                            <li className="hidden md:w-1/3 md:flex flex-col gap-4 py-4 relative ">
                                <p className="uppercase flex items-center gap-4 text-[1.9rem] leading-none">
                                    <MdOutlineScreenSearchDesktop/>
                                    <span className="font-light"><b>Sites</b><br/>Inteligentes</span>
                                </p>
                                <p className="text-[1.2rem]">
                                    Desenvolvemos sites de alto impacto com tecnologia de ponta.
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