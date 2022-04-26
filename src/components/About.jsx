export default function About(){
    return(
        
        <div id="cluster-lunnar" className="snap-start relative text-[#00707C]
                flex flex-col justify-center items-start bg-white h-screen w-screen index-0 
            " >

                <h1 className="titleSection about  uppercase text-bold 
                text-transparent md:mb-[2rem] text-[4rem] md:text-[8.75rem] ml-[-10px] md:ml-[-15px] leading-none">
                    SOBRE A LUNNAR
                </h1>

                <div className="p-4 md:px-12 flex flex-col gap-8 md:gap-16">

                    <h4 className="text-4xl md:text-5xl font-extralight md:w-2/3">
                        “A responsabilidade nos movimenta para o presente edificador que vem ao encontro do que merecemos de verdade”*
                    </h4>

                    <ul className="flex flex-col md:flex-row gap-6 w-full max-w-[910px]">
                        <img className="rounded-full border-2 border-[#00707C] hidden md:block w-[13rem] h-[13rem]" 
                            src="/foto-perfil-felipe.png" alt="" />
                            <li className="flex flex-col gap-6 font-extralight text-2xl">
                                <p>
                                    Acreditamos que para prosperarmos, nosso cliente precisa prosperar. Existimos para isso! Em cada detalhe, serviço, ponto de contato e linha de código nossa cultura prega que devemos entregar valor independente do acordo comercial. 
                                </p>
                                <p>
                                    Deixe nos saber como podemos lhe ajudar! 
                                </p>
                                <small>
                                    Felipe Otelakoski / Cofundador Grupo Lunnar
                                </small>
                            </li>
                    </ul>

                    <small className="font-light">* Texto parafraseado do livro Às 9 leis Inegociáveis da Vida de Marcel Scalcko</small>

                </div>

                <img src="/img-about.png" className="hidden md:block absolute right-0 bottom-0" />

                


        </div> 

    )
}