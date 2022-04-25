export default function About(){
    return(
        
        <div id="cluster-lunnar" className="snap-start relative text-[#00707C]
                flex flex-col justify-center items-start bg-white h-screen w-screen index-0 
            " >

                <h1 className="titleSection about text-[8.75rem] uppercase text-bold 
                text-transparent top-[6rem] ml-[-15px]">
                    SOBRE A LUNNAR
                </h1>

                <div className="px-12 flex flex-col gap-16">

                    <h4 className="text-5xl font-extralight w-2/3">
                        “A responsabilidade nos movimenta para o presente edificador que vem ao encontro do que merecemos de verdade”*
                    </h4>

                    <ul className="flex gap-6 w-full max-w-[910px]">
                        <img className="rounded-full border-2 border-[#00707C] w-[13rem] h-[13rem]" 
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

                <img src="/img-about.png" className="absolute right-0 bottom-0" />

                


        </div> 

    )
}