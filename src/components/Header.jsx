import Link from "next/link"
import { FiToggleLeft, FiMenu } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { useState } from "react"


export default function Header( {isScroll} ){

    const [isOpen, setIsOpen ] = useState(false)

    return(
        <header className={` ${isScroll ? "bg-primary" : null}
            text-xl font-normal flex p-6 md:px-12 justify-between z-30 fixed w-screen`}>

            <div className="uppercase font-light text-4xl text-white">
                <Link href="/">
                    <p>
                        lunnar<span className="font-medium"> digital</span>
                    </p>
                    {/* <svg className="w-[15rem] fill-white" */}
                        {/* xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.72 71.02"><defs></defs><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path className="cls-1" d="M0,53.19V.8C0,.64.32.48.88.48c1,0,1.75.56,1.75,2.71v50a1.12,1.12,0,0,1-1.2,1.27H1.11C.48,54.46,0,54.06,0,53.19Z"/><path className="cls-1" d="M45.86,18V54.14a1.4,1.4,0,0,1-1,.32c-.95,0-1.67-.56-1.67-2.79V46.34A15.35,15.35,0,0,1,29.06,55c-9.95,0-15.13-6.77-15.13-17V18c0-1,.48-1.35,1.12-1.35h.4c.63,0,1.11.32,1.11,1.35V37.9c0,8.92,4.38,14.65,12.66,14.65a14.7,14.7,0,0,0,14-9.55V18c0-1,.48-1.35,1.12-1.35h.32C45.38,16.64,45.86,17,45.86,18Z"/><path className="cls-1" d="M89.09,33V53.19a1.11,1.11,0,0,1-1.19,1.27h-.32c-.64,0-1.11-.32-1.11-1.27V33.28c0-8.92-4.46-14.65-12.66-14.65a14.75,14.75,0,0,0-14,9.48V53.19c0,1-.47,1.27-1.11,1.27h-.4c-.64,0-1.11-.32-1.11-1.27V17a1.11,1.11,0,0,1,.87-.32c1,0,1.67.56,1.67,2.79v5.49a15.26,15.26,0,0,1,14.18-8.76C83.92,16.16,89.09,22.85,89.09,33Z"/><path className="cls-1" d="M132,33V53.19a1.11,1.11,0,0,1-1.2,1.27h-.31c-.64,0-1.12-.32-1.12-1.27V33.28c0-8.92-4.46-14.65-12.66-14.65a14.73,14.73,0,0,0-14,9.48V53.19c0,1-.48,1.27-1.12,1.27h-.39c-.64,0-1.12-.32-1.12-1.27V17a1.14,1.14,0,0,1,.88-.32c1,0,1.67.56,1.67,2.79v5.49a15.25,15.25,0,0,1,14.17-8.76C126.83,16.16,132,22.85,132,33Z"/><path className="cls-1" d="M168.31,33h.8V30.65c0-7.56-4.7-12.1-12.34-12.1-6.85,0-11.39,3.19-13.46,7.33a1.63,1.63,0,0,1-1.43-1.6A6.58,6.58,0,0,1,144,20.86c2.31-2.39,6.37-4.7,12.9-4.7,9.16,0,14.73,5.5,14.73,14.41V54.14a1.14,1.14,0,0,1-.88.32c-.95,0-1.67-.56-1.67-2.79V45.46c-2.07,5.42-8,9.56-15.76,9.56-7.89,0-13.06-3.9-13.06-10.11C140.29,36.63,148.17,33.2,168.31,33Zm.8,2.07h-1c-18.4.24-25.16,3-25.16,9.8,0,4.93,4.22,7.88,10.51,7.88,8.67,0,15.6-5.81,15.6-13.62Z"/><path className="cls-1" d="M201,18.79a1.29,1.29,0,0,1-.8,1.35,6.91,6.91,0,0,0-4.54-1.51c-6.76,0-10.43,6.77-10.43,17V53.19c0,.87-.47,1.27-1.11,1.27h-.32a1.11,1.11,0,0,1-1.19-1.27V17a1.11,1.11,0,0,1,.87-.32c1,0,1.67.56,1.67,2.79V26.2c1.52-7.17,5.66-10,10.75-10C198.41,16.16,201,17.28,201,18.79Z"/><path className="cls-2" d="M218.79,35.27c0-11.78,7.49-19.82,17.68-19.82,6.77,0,11.54,3.42,13.69,7.32V.64c0-.24.88-.64,2-.64,1.91,0,3.75,1,3.75,5.1V51.83c0,2.07-1,2.71-2.55,2.71h-.56c-1.43,0-2.47-.64-2.47-2.55-.08-1.59-.08-3.18-.08-4.93a15.12,15.12,0,0,1-13.93,8.12C226.28,55.18,218.79,47.22,218.79,35.27Zm31.37-5.89c-2.07-5.49-6.29-9.08-12.74-9.08-7.64,0-12.89,6-12.89,15,0,8.84,5.33,15,12.81,15A12.47,12.47,0,0,0,250.16,37.9Z"/><path className="cls-2" d="M269.51.72a3.31,3.31,0,0,1,3.66,3.66c0,2.31-1.43,3.58-3.74,3.58a3.26,3.26,0,0,1-3.58-3.58A3.31,3.31,0,0,1,269.51.72Zm-2.95,18.07c0-2.07,1-2.79,2.55-2.79h.64c1.51,0,2.55.64,2.55,2.79v33c0,2.07-1,2.71-2.55,2.71h-.64c-1.51,0-2.55-.64-2.55-2.71Z"/><path className="cls-2" d="M277.71,60.67c0-5.57,5.49-9.47,12.42-10.75a4.31,4.31,0,0,1-2.39-3.82A5.06,5.06,0,0,1,290.05,42c-5.81-1.83-9.63-6.61-9.63-12.5,0-7.88,6.53-14.09,15.36-14.09a16.17,16.17,0,0,1,9,2.62l2.87-4.3c1.11-1.91,2.39-2.46,3.74-2.3A3.35,3.35,0,0,1,314.18,14l-6.29,6.69a12.82,12.82,0,0,1,3.42,8.6c0,7.72-6.53,13.62-15.45,13.62a18,18,0,0,1-2.07-.08,2.25,2.25,0,0,0-1,2.07c.08,2.54,3.9,2.94,10.35,4.53,5.49,1.36,11.38,4.07,11.38,10.2,0,7.08-7,11.38-19.1,11.38C283.6,71,277.71,67.52,277.71,60.67ZM309,60c0-3.5-4-5.09-8.36-6.21-1.59-.39-3.18-.71-4.7-1.11-6.76.56-12.66,3.42-12.66,7.88,0,4.06,4.3,6.29,12.34,6.29C304,66.88,309,64.49,309,60Zm-3.42-30.65c0-5.65-3.9-9.63-9.87-9.63-5.74,0-9.72,3.9-9.72,9.63s4.06,9.55,9.79,9.55S305.58,35.11,305.58,29.38Z"/><path className="cls-2" d="M322.85.72a3.32,3.32,0,0,1,3.67,3.66c0,2.31-1.44,3.58-3.74,3.58a3.27,3.27,0,0,1-3.59-3.58A3.31,3.31,0,0,1,322.85.72Zm-2.94,18.07c0-2.07,1-2.79,2.55-2.79h.63c1.52,0,2.55.64,2.55,2.79v33c0,2.07-1,2.71-2.55,2.71h-.63c-1.52,0-2.55-.64-2.55-2.71Z"/><path className="cls-2" d="M338.7,43.23v-22H335c-1.84,0-2.47-.8-2.47-2.15v-.56c0-1.35.63-2.15,2.47-2.15h3.74V9.63c0-2,1-2.78,2.55-2.78h.63c1.52,0,2.47.71,2.47,2.78v6.69H354c1.75,0,2.46.72,2.46,2.15V19c0,1.43-.71,2.23-2.54,2.23h-9.64V42.36c0,5.57,1.67,8,5.65,8a6.61,6.61,0,0,0,5.66-3c.24-.15,1.59.64,1.59,2.63a4,4,0,0,1-1.43,3,9.4,9.4,0,0,1-6.61,2.23C342.12,55.18,338.7,51.28,338.7,43.23Z"/><path className="cls-2" d="M387.19,32h.87V30.42c0-6.45-3.74-10-10.27-10-6.05,0-9.71,2.95-11.62,6.77-.16.08-3.51-.08-3.51-2.95A6.68,6.68,0,0,1,365,20c2.47-2.38,6.85-4.53,13.14-4.53,10.11,0,15.61,5.65,15.61,15V54c0,.24-1,.64-2.07.64-1.68,0-3-.8-3.35-3.66-.08-1.12-.16-2.31-.16-3.51-2.55,4.62-7.72,7.65-14.09,7.65-8,0-12.9-4.14-12.9-10.59C361.15,35.91,369.27,32.25,387.19,32Zm.87,3.74-1.35.08c-13.85.32-19.83,2.71-19.83,8.52,0,4,3.19,6.45,8.29,6.45,7.32,0,12.89-4.94,12.89-11.39Z"/><path className="cls-2" d="M404,51.83V.64c0-.24.95-.64,2.07-.64,1.83,0,3.66,1,3.66,5.1V51.83c0,2.07-1,2.71-2.55,2.71h-.64C405,54.54,404,53.9,404,51.83Z"/><circle className="cls-1" cx="202.92" cy="51.85" r="2.66"/></g></g></svg> */}
                    
                </Link>
            </div>

            <ul className={`${isOpen ? 
                "flex flex-col items-center justify-center gap-4 absolute left-0 top-0 w-screen h-screen bg-[rgba(7,179,199,.90)] opacity-100 visible" 
                : "opacity-0 invisible absolute"} 
                transition-all  text-white text-3xl font-light`}>

                <MdClose onClick={ () => setIsOpen(isOpen => !isOpen) }
                    className="w-10 h-10 absolute top-4 right-4 cursor-pointer"/>

                <Link href="#solutions">
                    <li className="cursor-pointer" onClick={ () => setIsOpen(isOpen => !isOpen) }>Soluções</li>
                </Link>
                <Link href="#cases">
                    <li className="cursor-pointer" onClick={ () => setIsOpen(isOpen => !isOpen) }>Cases</li>
                </Link>
                <Link href="#cluster-lunnar">
                    <li className="cursor-pointer" onClick={ () => setIsOpen(isOpen => !isOpen) }>Sobre a Lunnar</li>
                </Link>
                <Link href="#contact">
                    <li className="cursor-pointer" onClick={ () => setIsOpen(isOpen => !isOpen) }>Contato</li>
                </Link>
                
            </ul>

            <ul className="text-white flex items-center gap-4">
                
                <FiMenu className="w-10 h-10 p-2 rounded-full bg-primary cursor-pointer"
                    onClick={ () => setIsOpen(isOpen => !isOpen) }/>

                <li className="hidden">
                    <FiToggleLeft className="
                        p-2 rounded-full bg-primary
                        w-10 h-10 cursor-pointer"/>
                </li>
            </ul>


        </header>
    )
}