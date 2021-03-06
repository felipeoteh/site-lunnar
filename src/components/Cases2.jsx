import Link from "next/link"
import { FiChevronRight, FiChevronDown, FiChevronUp } from "react-icons/fi"
import { GoRocket } from "react-icons/go"
import { useState, useEffect } from "react"

import Slider from "react-slick"

import { useIsPresent } from "framer-motion"

    export const Component = () => {
    const isPresent = useIsPresent()

    useEffect(() => {
            !isPresent && console.log("I've been removed!")
        }, [isPresent])

        return <div />
    }

export default function Cases2(){

    const [ acordion, setAcordion ] = useState(1)

    function changeAcordion(position){
        if (position < 1){
            setAcordion(3)
        }else if (position > 3){
            setAcordion(1)
        }else(
            setAcordion(position)
        )
    } 

    const settings = {
        dots: true,
        arrows: false,
        infinite: true, 
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 3000,
        cssEase: "ease"
    }

    return(
        <>
            <div id="cases" className="snap-start relative
                flex items-center bg-[url('/bg-cases.jpg')] h-screen w-screen index-0 px-12
                justify-between text-white gap-12
            " >
                <Component/>

            <h1 className="text-7xl hidden
                text-white absolute top-[15vh] left-[3rem]">
                Cases
            </h1>

            <div className="w-1/5 flex">

                <div className={`w-full flex items-center flex-col gap-8`}>
                    <img onClick={ () => { changeAcordion(1) } } 
                        src="/logo-lunnar-shop-white.svg" className={` 
                        ${ (acordion == 1) ? ("acordionOpen opacity-100") : "opacity-50" } 
                        cursor-pointer hover:opacity-100 transition-all `} />
                    
                    <img onClick={ () => { changeAcordion(2) } }
                        src="/logo-lunnar-academy-white.svg" className={`
                        ${ (acordion == 2) ? ("acordionOpen opacity-100") : "opacity-50" }
                         cursor-pointer hover:opacity-100 transition-all `} />

                    <svg onClick={ () => { changeAcordion(3) } }
                        className={`
                        ${ (acordion == 3) ? ("acordionOpen opacity-100") : "opacity-50" }
                        cursor-pointer hover:opacity-100 transition-all `}
                        id="logo-lunnar-dev-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 945 299">
                        <text id="lunnar" transform="translate(0 182)" fill="#fff" font-size="170" font-family="Jost" font-weight="300" letter-spacing="0.07em"><tspan x="0" y="0">LUNNAR</tspan></text>
                        <text id="_dev_" data-name="&lt;/dev&gt;" transform="translate(566 258)" fill="#fff" font-size="110" font-family="Jost" font-weight="500" letter-spacing="-0.07em"><tspan x="0" y="0">&lt;/DEV&gt;</tspan></text>
                    </svg>

                </div>
    
            </div>

            <div className={`w-[5rem] flex flex-col items-center justify-center gap-4`}>
                    
                <div onClick={ () => { changeAcordion(acordion - 1) } }
                    className="flex items-center justify-center cursor-pointer hover:bg-primary 
                    w-10 h-10 p-2 border rounded transition-all border-primary">
                    <FiChevronUp className="w-8 h-8"/>
                </div>

                <div onClick={ () => { changeAcordion(acordion + 1) } }
                    className="flex items-center justify-center cursor-pointer hover:bg-primary 
                    w-10 h-10 p-2 border rounded transition-all border-primary">
                    <FiChevronDown className="w-8 h-8"/>
                </div>

            </div>

            <div className="flex-1 w-4/5 relative flex items-center">

                <div className={`
                    ${ (acordion == 1) ? ("opacity-100 visible") : "opacity-0 invisible" }
                    transition-all absolute
                `}>
                    
                    <div className="flex flex-col gap-2">

                        <img className="w-[13rem] mb-4" src="https://ninho.digital/wp-content/themes/ninho_site/assets/img/logo_branca.svg" alt="" />

                        <h1 className="text-4xl mb-4 italic">"s??o super atenciosos e cuidam dos m??nimos detalhes, com um entrega excelente...."</h1>

                        <p>
                            "Fizemos um projeto muito especial e bem desafiador em parceria com a Lunnar Digital, que foi um desenvolvimento de uma Loja TrayCorp para vendas de resinas para impressoras 3D. O atendimento da Lunnar ?? excelente, s??o super atenciosos e cuidam dos m??nimos detalhes, com um entrega excelente. O projeto foi um sucesso e espero que essa parceria renda muitos outros cases.". 
                        </p>

                        <p className="text-sm mt-4">
                            Dandy / <small>COO Ninho Digital</small>
                        </p>

                        <div className="text-2xl hover:opacity-90 cursor-pointer
                            p-4 bg-primary rounded transition-all mt-6 w-1/3 flex items-center gap-2 justify-center" >
                            Quero ser Case <GoRocket className="w-8 h-8"/>
                        </div>

                    </div>
                    
                </div>

                <div className={`
                    ${ (acordion == 2) ? ("opacity-100 visible") : "opacity-0 invisible" }
                    transition-all absolute
                `}>
                    
                    <div>

                    <img className="w-[13rem] mb-4" src="https://hubpaladio.com.br/wp-content/uploads/2022/01/logo-home-2048x613.png" alt="" />

                    <h1 className="text-4xl mb-4 italic">"?? mais do que uma empresa de software..."</h1>

                    <p>
                        "O projeto de desenvolvido do Academy da nossa empresa teve todo o apoio e suporte necess??rio para uma excelente execu????o, a equipe sempre disposta em trazer ideias e funcionalidades que tornaram o aprendizado dos nossos alunos muito mais eficiente no dia-dia. ?? muito mais do que apenas uma empresa de Software a Lunnar realmente se importa em resolver os problemas de seus parceiros". 
                    </p>

                    <p className="text-sm mt-4">
                        Gabriel / <small>Diretor de Marketing do Hub Pal??dio</small>
                    </p>

                    <div className="text-2xl hover:opacity-90 cursor-pointer
                        p-4 bg-primary rounded transition-all mt-6 w-1/3 flex items-center gap-2 justify-center" >
                        Quero ser Case <GoRocket className="w-8 h-8"/>
                    </div>

                    </div>

                    
                </div>

                <div className={`
                    ${ (acordion == 3) ? ("opacity-100 visible") : "opacity-0 invisible" }
                    transition-all absolute w-full
                `}>
                    <Slider>
                        <div>

                            <img className="w-[13rem] mb-4" src="https://agencianascer.com.br/wp-content/uploads/2022/03/logo-nascer.png" alt="" />

                            <h1 className="text-4xl mb-4 italic">"t??nhamos apenas uma ideia e eles tornaram realidade superando as expectativas..."</h1>

                            <p>
                                "A Lunnar, foi uma pe??a fundamental para tirar o site do papel, t??nhamos apenas uma ideia e eles tornaram realidade superando as expectativas, sem falar que todo o trabalho foi categoricamente cumprido dentro do prazo! O Felipe ?? um dos melhores gestores de projetos que tivemos o prazer de trabalhar.". 
                            </p>

                            <p className="text-sm mt-4">
                                Gabriel / <small>Fundador Ag??ncia Nascer</small>
                            </p>

                            <div className="text-2xl hover:opacity-90 cursor-pointer
                                p-4 bg-primary rounded transition-all mt-6 w-1/3 flex items-center gap-2 justify-center" >
                                Quero ser Case <GoRocket className="w-8 h-8"/>
                            </div>

                        </div>

                        <div>

                            <img className="w-[13rem] mb-4" src="https://ninho.digital/wp-content/themes/ninho_site/assets/img/logo_branca.svg" alt="" />

                            <h1 className="text-4xl mb-4 italic">"S??o super atenciosos, entregas dentro do prazo e com muita qualidade..."</h1>

                            <p>
                                "J?? trabalho em parceria com o Felipe da Lunnar h?? muitos anos com desenvolvimentos de sites e recomendo! S??o super atenciosos, entregas dentro do prazo e com muita qualidade. Experts em Elementor e Wordpress!". 
                            </p>

                            <p className="text-sm mt-4">
                                Dandy / <small>COO Ninho Digital</small>
                            </p>

                            <div className="text-2xl hover:opacity-90 cursor-pointer
                                p-4 bg-primary rounded transition-all mt-6 w-1/3 flex items-center gap-2 justify-center" >
                                Quero ser Case <GoRocket className="w-8 h-8"/>
                            </div>

                        </div>

                    </Slider>
                </div>

                              
            </div>
                

            </div> 
        
        </>
    )
}