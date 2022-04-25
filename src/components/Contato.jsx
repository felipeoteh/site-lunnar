import { FiPlus, FiInstagram, FiLinkedin } from "react-icons/fi"

export default function Contact(){
    return(
        <div id="contact" className="snap-start relative text-white bg-cover gap-12 
                flex flex-col justify-center items-start bg-[#00707C] h-screen w-screen index-0
            " >

                <h1 className="titleSection text-[8.75rem] uppercase text-bold 
                text-transparent ml-[-15px] ">
                    Fale Conosco
                </h1>

                <ul className="text-4xl font-light
                    flex w-full max-w-screen-xl self-center gap-8 items-center justify-content-stretch">
                    <li className="w-full flex p-8 border relative">
                        <p>
                            <span className="font-medium">Aumentar o lucro</span><br/>
                            pelo Whatsapp
                        </p>
                        <FiPlus className="w-16 h-16 stroke-[.5px] absolute right-4 bottom-4"/>
                    </li>
                    <li className="w-full flex p-8 border relative">
                        <p>
                            <span className="font-medium">Aumentar o lucro</span><br/>
                            por E-mail
                        </p>
                        <FiPlus className="w-16 h-16 stroke-[.5px] absolute right-4 bottom-4"/>
                    </li>

                </ul>

                <p className="flex w-full max-w-screen-xl self-center font-light">
                    Estamos em São Mateus do Sul, PR e atendemos o mundo todo de forma remota. Bora fazer um call?
                </p>

                <ul className="flex w-full max-w-screen-xl self-center gap-6" >
                    <li className="p-4 border cursor-pointer">
                        <FiInstagram className="w-8 h-8 stroke-[1px]"/>
                    </li>
                    <li className="p-4 border cursor-pointer">
                        <FiLinkedin className="w-8 h-8 stroke-[1px]"/>
                    </li>
                </ul>
                

        </div> 
    )
}