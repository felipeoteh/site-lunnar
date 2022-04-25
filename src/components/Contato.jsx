export default function Contact(){
    return(
        <div id="contact" className="snap-start relative text-white bg-cover
                flex items-center bg-[url('/bg-services.png')] h-screen w-screen index-0 px-12
            " >

            <div className="w-full max-w-screen-xl m-auto flex flex-col items-center gap-4"> 
                <h1 className="text-2xl mb-4">Vamos tomar um café?</h1>
                <form className="flex gap-4 justify-items-stretch w-full max-w-screen-lg" action="">

                    <div className="flex flex-col gap-2 w-1/3">
                        <input className="rounded bg-transparent border p-2"
                            type="text" placeholder="Nome:" /> 
                        <input className="rounded bg-transparent border p-2"
                            type="text" placeholder="Whatsapp:" />
                    </div>

                    <textarea className="w-1/3 rounded bg-transparent border p-2"
                        placeholder="Digite sua Mensagem:" ></textarea>

                    <div className="w-1/3 flex bg-primary border-primary
                        items-center justify-center cursor-pointer rounded border p-2">
                        Enviar Mensagem
                    </div>

                </form>

            </div>
                

        </div> 
    )
}