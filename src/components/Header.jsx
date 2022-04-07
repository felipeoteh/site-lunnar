import Link from "next/link"
import { FiChevronDown } from "react-icons/fi"

export default function Header( {isScroll} ){
    return(
        <header className={` ${isScroll ? "bg-primary" : null}
            text-xl font-normal flex p-4 px-12 justify-between z-10 fixed w-screen`}>

            <div>
                <Link href="/">
                    <img src="/logo-lunnar-color.svg" alt="" className="w-[15rem]" />
                </Link>
            </div>

            <ul className="flex gap-4 items-center text-white">
                <Link href="#services">
                    <li>Serviços</li>
                </Link>
                <Link href="#cases">
                    <li>Cases</li>
                </Link>
                <Link href="#contato">
                    <li>Contato</li>
                </Link>
                <Link href="#about">
                    <li>Sobre a Lunnar</li>
                </Link>
                <li className="loginbutton transition-all relative
                    cursor-pointer p-2 border border-primary rounded px-4 flex gap-1 items-center">

                    Fazer Login <FiChevronDown/>
                    <ul className="hidden absolute top-[2.8rem] w-full left-0 border
                        rounded flex-col p-4 items-center gap-4">
                        <li>
                            <img src="/logo-lunnar-shop-white.svg" alt="" 
                                className="w-[10rem] cursor-pointer hover:opacity-90 transition-all" 
                            />
                        </li>
                        <li>
                            <img src="/logo-lunnar-academy-white.svg" alt="" 
                                className="w-[10rem] cursor-pointer hover:opacity-90 transition-all" /> 
                        </li>
                    </ul>
                </li>
                
            </ul>


        </header>
    )
}