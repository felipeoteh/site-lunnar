import { FiPlus, FiInstagram, FiLinkedin } from "react-icons/fi"

export default function Contact(){
    return(
        <>
            <div id="contact" className="scroll-smooth snap-x overflow-x-scroll snap-mandatory
                        snap-start flex flex-nowrap relative
                        bg-[#00707C] h-screen w-screen index-0 text-white
                    " >

                    <section className="snap-start w-[100vw] h-[100vh] flex flex-col 
                        items-start justify-center gap-8 md:gap-12">    

                        <h1 className="titleSection uppercase text-bold 
                        text-transparent text-[5rem] md:text-[8.75rem] ml-[-10px] md:ml-[-15px] leading-none">
                            Fale Conosco
                        </h1>

                        <ul className="text-4xl font-light px-4
                            flex flex-col md:flex-row w-full max-w-[600px] self-center gap-8 items-center justify-content-stretch">
                            <a target="_blank" href="https://wa.me/5541997652730?text=Ol%C3%A1%2C%20vim%20pelo%20site!">
                                <li className="w-full flex p-4 md:p-8 border relative">
                                    <p>
                                        <span className="font-medium">Fale agora </span>pelo Whatsapp
                                    </p>
                                    <FiPlus className="w-16 h-16 stroke-[.5px] absolute right-4 bottom-4"/>
                                </li>
                            </a>
                            <li className="hidden w-full p-4 md:p-8 border relative">
                                <p>
                                    <span className="font-medium">Aumentar o lucro</span><br/>
                                    por E-mail
                                </p>
                                <FiPlus className="w-16 h-16 stroke-[.5px] absolute right-4 bottom-4"/>
                            </li>
                        </ul>

                        <p className="flex w-full max-w-screen-xl self-center font-light px-4">
                            Estamos em São Mateus do Sul, PR e atendemos o mundo todo de forma remota. Bora fazer um call?
                        </p>

                        <ul className="flex w-full max-w-screen-xl self-center gap-6 px-4" >
                            <a href="https://www.instagram.com/lunnar.digital/" target="_blank">
                                <li className="p-4 border cursor-pointer">
                                    <FiInstagram className="w-8 h-8 stroke-[1px]"/>
                                </li>
                            </a>
                            <li className="hidden p-4 border cursor-pointer">
                                <FiLinkedin className="w-8 h-8 stroke-[1px]"/>
                            </li>
                        </ul>
                    
                    </section> 
                    
                    
            </div> 
        </>
    )
}