import Link from "next/link"
import { FiChevronRight } from "react-icons/fi"
import { GoRocket } from "react-icons/go"

export default function Services(){
    return(
        <>
            <div id="services" className="snap-start relative
                flex items-center bg-[url('/bg-services.png')] h-screen w-screen index-0 px-12
                justify-between text-white
            " >

                <h1 className="text-7xl
                    text-white absolute top-[12rem] left-[12rem]">
                    Serviços
                </h1>

                <img src="/terra.png" className="absolute bottom-0 left-0 h-[35rem] z-0" />

                <ul className="flex items-center justify-around w-full text-2xl h-[25rem] z-10
                    bg-[url('/risco.png')] bg-contain bg-center bg-no-repeat">
                    <li className="relative transition-all hover:border-primary p-2 hover:mt-[13.4rem] hover:rotate-[-4deg]
                     border-2 border-dashed border-transparent rounded pl-4 gap-2
                        cursor-pointer mt-[14.4rem] ml-[5rem] flex items-center">
                        <div className="w-6 h-6 border-4 border-white border-dashed rounded-full absolute top-[-1.2rem] left-[-1rem]"></div>
                        Para Vender Online <GoRocket/>
                    </li>
                    <li className="relative transition-all hover:border-primary p-2 hover:rotate-[-4deg]
                     border-2 border-dashed border-transparent rounded pl-4 hover:mt-[-16.4rem]
                        cursor-pointer mt-[-15rem] flex items-center gap-2">
                        <div className="
                            w-6 h-6  border-4 border-white border-dashed rounded-full absolute top-[-1.2rem] left-[-1rem]"></div>
                        Para Aumentar o Lucro <GoRocket/>
                    </li>
                </ul>
                
                <img src="/lua.png" className="absolute top-0 right-0 h-[60rem] z-0" />

            </div> 
        
        </>
    )
}