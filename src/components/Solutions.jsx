import Link from "next/link"
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai"

import { motion } from "framer-motion"
import { useState } from "react"

export const MyComponent = ( {children} ) => (
    <motion.div
        animate={{ 
          y: [1, 20, 1] 
        }}
      transition={{ repeat: Infinity, duration: 5 }}
    >
        {children}
    </motion.div>
)

export default function Services(){
    const [ service, setService ] = useState(0)

    return(
        <>
            <div id="solutions" className="snap-start relative
                flex items-center bg-[url('/bg-services.png')] h-screen w-screen index-0 px-12
                justify-between text-white
            " >

                <h1 className="hidden text-7xl
                    text-white absolute top-[12vh] left-[3rem]">
                    Soluções
                </h1>

                <img src="/terra.png" className="absolute bottom-0 left-0 h-[35rem] z-0" />

                <ul className="flex items-center justify-around w-full z-10 h-[15rem]
                    ">

                    <div onClick={ () => setService(1) } className="self-end cursor-pointer">
                        <MyComponent>
                            <div className="flex items-center gap-2">
                                <img 
                                src="/logo-lunnar-shop-white.svg" className={` 
                                w-[15rem] 
                                cursor-pointer transition-all `} /> 
                                <AiOutlinePlusCircle className="hover:text-primary transition-all w-6 h-6"/>
                            </div>
                        </MyComponent>
                    </div>

                    <div onClick={ () => setService(2) } className="cursor-pointer">
                        <MyComponent>
                            <div className="flex items-center gap-2">
                                <img
                                src="/logo-lunnar-academy-white.svg" className={`
                                w-[15rem]
                                cursor-pointer hover:opacity-100 transition-all `} />
                                <AiOutlinePlusCircle className="hover:text-primary transition-all w-6 h-6"/>
                            </div>
                        </MyComponent>
                    </div>

                    <div onClick={ () => setService(3) } className="self-start cursor-pointer">
                        <MyComponent>
                            <div className="flex items-center gap-2">
                                <svg 
                                    className={`
                                    w-[15rem]
                                    cursor-pointer hover:opacity-100 transition-all `}
                                    id="logo-lunnar-dev-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 945 299">
                                    <text id="lunnar" transform="translate(0 182)" fill="#fff" fontSize="170" fontFamily="Jost" fontWeight="300" letterSpacing="0.07em"><tspan x="0" y="0">LUNNAR</tspan></text>
                                    <text id="_dev_" data-name="&lt;/dev&gt;" transform="translate(566 258)" fill="#fff" fontSize="110" fontFamily="Jost" fontWeight="500" letterSpacing="-0.07em"><tspan x="0" y="0">&lt;/DEV&gt;</tspan></text>
                                </svg>
                                <AiOutlinePlusCircle className="hover:text-primary transition-all w-6 h-6"/>
                            </div>
                        </MyComponent>
                    </div>
                          
                </ul>
                
                <img src="/lua.png" className="absolute top-0 right-0 h-[60rem] z-0" />

            <div className={`
                ${ (service == 1 || service == 2 || service == 3) ? "visible opacity-100" : "invisible opacity-0" }
                bg-[rgba(0,0,0,.6)] transition-all w-screen h-screen absolute top-0 left-0 z-10`}>

                <div className="w-[30rem] h-[30rem] bg-primary rounded-full shadow-[rgba(255,255,255,.3)] shadow-2xl
                    absolute left-[calc(50%-15rem)] top-[calc(50%-13rem)] flex items-center p-16">

                    <AiOutlineCloseCircle onClick={() => setService(0)}
                        className="text-white cursor-pointer w-6 h-6 absolute right-4 top-4 hover:text-primary transition-all" />

                    { (service == 1) ? (
                        <div className="flex flex-col gap-4 items-center">
                            <img 
                                src="/logo-lunnar-shop-white.svg" className={` 
                                w-[15rem] 
                                cursor-pointer transition-all `} /> 
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus aliquet interdum. Nunc bibendum enim tortor, ac pharetra felis sollicitudin vel. Ut a finibus enim. 
                            </p>

                            <Link href="/">
                                <p className="cursor-pointer hover:bg-white hover:text-primary transition-all w-1/3 border-2
                                    flex items-center justify-center mt-2 rounded bg-primary text-white px-2 py-2 font-medium">
                                    Saiba Como
                                </p>  
                            </Link>

                        </div>
                    ) : null }

                    { (service == 2) ? (
                        <div className="flex flex-col gap-4 items-center">
                            <img
                                src="/logo-lunnar-academy-white.svg" className={`
                                w-[15rem]
                                cursor-pointer hover:opacity-100 transition-all `} />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus aliquet interdum. Nunc bibendum enim tortor, ac pharetra felis sollicitudin vel. Ut a finibus enim. 
                            </p>

                            <Link href="">
                                <p className="cursor-pointer hover:bg-white hover:text-primary transition-all w-1/3 border-2
                                    flex items-center justify-center mt-2 rounded bg-primary text-white px-2 py-2 font-medium">
                                    Saiba Como
                                </p>  
                            </Link>

                        </div>
                    ) : null }

                    { (service == 3) ? (
                        <div className="flex flex-col gap-4 items-center">
                            <svg 
                                    className={`
                                    w-[15rem]
                                    cursor-pointer hover:opacity-100 transition-all `}
                                    id="logo-lunnar-dev-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 945 299">
                                    <text id="lunnar" transform="translate(0 182)" fill="#fff" fontSize="170" fontFamily="Jost" fontWeight="300" letterSpacing="0.07em"><tspan x="0" y="0">LUNNAR</tspan></text>
                                    <text id="_dev_" data-name="&lt;/dev&gt;" transform="translate(566 258)" fill="#fff" fontSize="110" fontFamily="Jost" fontWeight="500" letterSpacing="-0.07em"><tspan x="0" y="0">&lt;/DEV&gt;</tspan></text>
                            </svg>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus aliquet interdum. Nunc bibendum enim tortor, ac pharetra felis sollicitudin vel. Ut a finibus enim. 
                            </p>

                            <Link href="">
                                <p className="cursor-pointer hover:bg-white hover:text-primary transition-all w-1/3 border-2
                                    flex items-center justify-center mt-2 rounded bg-primary text-white px-2 py-2 font-medium">
                                    Saiba Como
                                </p>  
                            </Link>

                        </div>
                    ) : null }

                </div>


            </div>

            </div> 
        
        </>
    )
}