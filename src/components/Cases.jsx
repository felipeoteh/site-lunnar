import Link from "next/link"
import { FiChevronRight } from "react-icons/fi"
import { GoRocket } from "react-icons/go"

import Slider from "react-slick"


export default function Cases(){

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
                justify-between text-white 
            " >

                <h1 className="text-7xl
                    text-white absolute top-[8rem] left-[8rem]">
                    Cases
                </h1>

            <div className="w-2/3 ml-[11rem]">
                <Slider {...settings} >

                    <div className="" >

                        <span className="flex gap-2 mb-8">
                            <p>C A S E</p>    <img src="/logo-lunnar-academy-white.svg" alt="" className="w-[16rem]" />
                        </span>

                        <img className="w-[13rem] mb-4" src="https://hubpaladio.com.br/wp-content/uploads/2022/01/logo-home-2048x613.png" alt="" />

                        <h1 className="text-4xl mb-4 italic">"é mais do que uma empresa de software..."</h1>

                        <p>
                            "O projeto de desenvolvido do Academy da nossa empresa teve todo o apoio e suporte necessário para uma excelente execução, a equipe sempre disposta em trazer ideias e funcionalidades que tornaram o aprendizado dos nossos alunos muito mais eficiente no dia-dia. É muito mais do que apenas uma empresa de Software a Lunnar realmente se importa em resolver os problemas de seus parceiros". 
                        </p>

                        <p className="text-sm mt-4">
                            Gabriel / <small>Diretor de Marketing do Hub Paládio</small>
                        </p>

                        <div className="text-2xl hover:opacity-90 cursor-pointer
                             p-4 bg-primary rounded transition-all mt-6 w-1/2 flex items-center gap-2 justify-center" >
                            Quero ser Case <GoRocket className="w-8 h-8"/>
                        </div>
                        
                    </div>

                    <div className="" >

                        <span className="flex gap-2 mb-8">
                            <p>C A S E</p>    <img src="/logo-lunnar-dev-white.svg" alt="" className="w-[16rem]" />
                        </span>

                        <img className="w-[13rem] mb-4" src="https://agencianascer.com.br/wp-content/uploads/2022/03/logo-nascer.png" alt="" />

                        <h1 className="text-4xl mb-4 italic">"tínhamos apenas uma ideia e eles tornaram realidade superando as expectativas..."</h1>

                        <p>
                            "A Lunnar, foi uma peça fundamental para tirar o site do papel, tínhamos apenas uma ideia e eles tornaram realidade superando as expectativas, sem falar que todo o trabalho foi categoricamente cumprido dentro do prazo! O Felipe é um dos melhores gestores de projetos que tivemos o prazer de trabalhar.". 
                        </p>

                        <p className="text-sm mt-4">
                            Gabriel / <small>Fundador Agência Nascer</small>
                        </p>

                        <div className="text-2xl hover:opacity-90 cursor-pointer
                             p-4 bg-primary rounded transition-all mt-6 w-1/2 flex items-center gap-2 justify-center" >
                            Quero ser Case <GoRocket className="w-8 h-8"/>
                        </div>
                        
                    </div>

                </Slider>

            </div>
                

            </div> 
        
        </>
    )
}