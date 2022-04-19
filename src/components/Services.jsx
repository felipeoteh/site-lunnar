import Link from "next/link"
import { FiChevronRight } from "react-icons/fi"
import { GoRocket } from "react-icons/go"

import { motion } from "framer-motion"


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

                <ul className="flex items-center justify-around w-full z-10 h-[15rem]
                    ">
                    <MyComponent>
                        <img 
                            src="/logo-lunnar-shop-white.svg" className={` 
                            w-[15rem] self-end
                            cursor-pointer transition-all `} /> 
                    </MyComponent>

                    <MyComponent>
                        <img
                        src="/logo-lunnar-academy-white.svg" className={`
                        w-[15rem]
                        cursor-pointer hover:opacity-100 transition-all `} />
                    </MyComponent>


                    <MyComponent>
                        <svg 
                            className={`
                            w-[15rem] self-start
                            cursor-pointer hover:opacity-100 transition-all `}
                            id="logo-lunnar-dev-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 945 299">
                            <text id="lunnar" transform="translate(0 182)" fill="#fff" font-size="170" font-family="Jost" font-weight="300" letter-spacing="0.07em"><tspan x="0" y="0">LUNNAR</tspan></text>
                            <text id="_dev_" data-name="&lt;/dev&gt;" transform="translate(566 258)" fill="#fff" font-size="110" font-family="Jost" font-weight="500" letter-spacing="-0.07em"><tspan x="0" y="0">&lt;/DEV&gt;</tspan></text>
                        </svg>
                    </MyComponent>
                          

                </ul>
                
                <img src="/lua.png" className="absolute top-0 right-0 h-[60rem] z-0" />

            </div> 
        
        </>
    )
}