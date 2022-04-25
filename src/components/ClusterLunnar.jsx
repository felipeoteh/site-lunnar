export default function ClusterLunnar(){
    return(
        
        <div id="cluster-lunnar" className="snap-start relative text-white
                flex items-center bg-[url('/bg-services.png')] h-screen w-screen index-0 px-12
            " >

                <ul className="w-full h-[12rem] flex justify-around items-center gap-8">
                    <li className="self-end">Lunnar e Lunnares</li>
                    <li className="self-start">Clientes</li>
                    <li className="self-end">Parceiros</li>
                </ul>

                <div className="absolute bg-[url('/lua-lunnar.png')] left-[calc(50%-30rem)]
                    w-[60rem] bottom-0 h-[360px] bg-contain bg-no-repeat bg-[2rem_center]">
                </div>

        </div> 

    )
}