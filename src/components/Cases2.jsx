
import {  BsArrowUp, BsArrowDown, BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { GoRocket } from "react-icons/go"
import { useState } from "react"


export default function Cases2(){

    const [ acordion, setAcordion ] = useState(1)
    const [ depo, setDepo ] = useState(1)

    function changeAcordion(position){
        if (position < 1){
            setAcordion(3)
        }else if (position > 3){
            setAcordion(1)
        }else(
            setAcordion(position)
        )
    } 

    function changeDepo(position){
        if (position < 1){
            setDepo(2)
        }else if (position > 2){
            setDepo(1)
        }else(
            setDepo(position)
        )
    } 

    console.log(depo)

    return(
        <>
            <div id="cases" className="snap-start relative
                flex items-start bg-[#0092A3] h-[120vh] w-screen index-0
                justify-center pt-20 md:pt-0 text-white flex-col
            " >                

                <h1 className="titleSection uppercase text-bold 
                    text-transparent text-[5rem] md:text-[8.75rem] ml-[-10px] md:ml-[-15px]">
                    Cases
                </h1>

                <div className="flex h-[35rem] md:h-[27rem]
                    md:flex-row md:flex-nowrap w-full items-center
                    md:w-4/5 md:self-end p-4 md:pr-12">
                    
                    <div className="hidden w-2/5 md:w-1/5 md:flex">

                        <div className={`w-full md:flex items-center flex-col gap-4 md:gap-8`}>
                            <img onClick={ () => { changeAcordion(1) } } 
                                src="/logo-lunnar-shop-white.svg" className={` 
                                ${ (acordion == 1) ? `acordionOpen opacity-100` : `opacity-50` } 
                                cursor-pointer hover:opacity-100 transition-all `} />
                            
                            <img onClick={ () => { changeAcordion(2) } }
                                src="/logo-lunnar-academy-white.svg" className={`
                                ${ (acordion == 2) ? `acordionOpen opacity-100` : `opacity-50` }
                                cursor-pointer hover:opacity-100 transition-all `} />

                            <svg onClick={ () => { changeAcordion(3) } }
                                className={`
                                ${ (acordion == 3) ? `acordionOpen opacity-100` : `opacity-50` }
                                cursor-pointer hover:opacity-100 transition-all `}
                                id="logo-lunnar-dev-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 945 299">
                                <text id="lunnar" transform="translate(0 182)" fill="#fff" fontSize="170" fontFamily="Jost" fontWeight="300" letterSpacing="0.07em"><tspan x="0" y="0">LUNNAR</tspan></text>
                                <text id="_dev_" data-name="&lt;/dev&gt;" transform="translate(566 258)" fill="#fff" fontSize="110" fontFamily="Jost" fontWeight="500" letterSpacing="-0.07em"><tspan x="0" y="0">&lt;/DEV&gt;</tspan></text>
                            </svg>

                        </div>

                    </div>

                    <div className="md:w-[5rem] flex flex-col items-center justify-center gap-4">
                        
                        <div onClick={ () => { changeAcordion(acordion - 1) } }
                            className="flex items-center justify-center cursor-pointer 
                            w-10 h-10 p-2 transition-all ">
                            <BsArrowUp className="w-8 h-8"/>
                        </div>

                        <div onClick={ () => { changeAcordion(acordion + 1) } }
                            className="flex items-center justify-center cursor-pointer 
                            w-10 h-10 p-2 transition-all ">
                            <BsArrowDown className="w-8 h-8"/>
                        </div>

                    </div>

                    <div className="w-full md:w-4/5 relative mt-8">

                        <div className={`
                            ${ (acordion == 1) ? `opacity-100 visible block` : `opacity-0 invisible hidden` }
                            transition-all `}>
                            
                            <div className="flex flex-col gap-2 border p-4 md:p-8 border-[rgba(255,255,255,.3)] h-auto">

                                <img className="w-[8rem] mb-4" src="https://ninho.digital/wp-content/themes/ninho_site/assets/img/logo_branca.svg" alt="" />

                                <h1 className="text-3xl md:text-4xl mb-4 font-light">"são super atenciosos e cuidam dos mínimos detalhes, com um entrega excelente...."</h1>

                                <p className="font-light">
                                    "Fizemos um projeto muito especial e bem desafiador em parceria com a Lunnar Digital, que foi um desenvolvimento de uma Loja TrayCorp para vendas de resinas para impressoras 3D. O atendimento da Lunnar é excelente, são super atenciosos e cuidam dos mínimos detalhes, com um entrega excelente. O projeto foi um sucesso e espero que essa parceria renda muitos outros cases.". 
                                </p>

                                <p className="text-sm mt-4 font-light">
                                    Dandy / <small>COO Ninho Digital</small>
                                </p>

                            </div>
                            
                        </div>

                        <div className={`
                            ${ (acordion == 2) ? `opacity-100 visible block` : `opacity-0 invisible hidden` }
                            transition-all  `}>
                            
                            <div className="border p-4 md:p-8 border-[rgba(255,255,255,.3)] h-auto">

                                <img className="w-[8rem] mb-4" src="https://hubpaladio.com.br/wp-content/uploads/2022/01/logo-home-2048x613.png" alt="" />

                                <h1 className="text-3xl md:text-4xl mb-4 font-light">"é mais do que uma empresa de software..."</h1>

                                <p className="font-light">
                                    "O projeto de desenvolvido do Academy da nossa empresa teve todo o apoio e suporte necessário para uma excelente execução, a equipe sempre disposta em trazer ideias e funcionalidades que tornaram o aprendizado dos nossos alunos muito mais eficiente no dia-dia. É muito mais do que apenas uma empresa de Software a Lunnar realmente se importa em resolver os problemas de seus parceiros". 
                                </p>

                                <p className="text-sm mt-4 font-light">
                                    Gabriel / <small>Diretor de Marketing do Hub Paládio</small>
                                </p>

                            </div>

                        </div>

                        <div className={`
                            ${ (acordion == 3) ? `opacity-100 visible block` : `opacity-0 invisible hidden` }
                            transition-all w-full`}>

                                <div className={`
                                    ${ (depo == 1) ? `opacity-100 visible block` : `opacity-0 invisible hidden` }
                                    border p-4 md:p-8 border-[rgba(255,255,255,.3)] flex flex-col`}>

                                    <img className="w-[8rem] mb-4" src="https://agencianascer.com.br/wp-content/uploads/2022/03/logo-nascer.png" alt="" />

                                    <h1 className="text-3xl md:text-4xl mb-4 font-light">"tínhamos apenas uma ideia e eles tornaram realidade superando as expectativas..."</h1>

                                    <p className="font-light">
                                        "A Lunnar, foi uma peça fundamental para tirar o site do papel, tínhamos apenas uma ideia e eles tornaram realidade superando as expectativas, sem falar que todo o trabalho foi categoricamente cumprido dentro do prazo! O Felipe é um dos melhores gestores de projetos que tivemos o prazer de trabalhar.". 
                                    </p>

                                    <p className="text-sm mt-4 font-light">
                                        Gabriel / <small>Fundador Agência Nascer</small>
                                    </p>

                                </div>

                                <div className={`
                                    ${ (depo == 2) ? `opacity-100 visible block` : `opacity-0 invisible hidden` }
                                    border p-4 md:p-8 border-[rgba(255,255,255,.3)] flex flex-col `}>

                                    <img className="w-[8rem] mb-4" src="https://ninho.digital/wp-content/themes/ninho_site/assets/img/logo_branca.svg" alt="" />

                                    <h1 className="text-3xl md:text-4xl mb-4 font-light">"São super atenciosos, entregas dentro do prazo e com muita qualidade..."</h1>

                                    <p className="font-light">
                                        "Já trabalho em parceria com o Felipe da Lunnar há muitos anos com desenvolvimentos de sites e recomendo! São super atenciosos, entregas dentro do prazo e com muita qualidade. Experts em Elementor e Wordpress!". 
                                    </p>

                                    <p className="text-sm mt-4 font-light">
                                        Dandy / <small>COO Ninho Digital</small>
                                    </p>

                                </div>

                                <div className="flex items-center gap-6 right-0 z-10 absolute top-[-2rem]">
                                    <BsArrowLeft className="w-6 h-6 cursor-pointer"
                                        onClick={ () => { changeDepo(depo + 1)} } />
                                        {depo}/2
                                    <BsArrowRight className="w-6 h-6 cursor-pointer"
                                        onClick={ () => { changeDepo(depo + 1)} }/>
                                </div>

                        </div>
                        
                    </div>

                </div>
                
            </div> 
        
        </>
    )
}