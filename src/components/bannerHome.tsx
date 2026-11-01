import Image from "next/image"
import bannerHome from "@/assets/img/bannerHome.png"


export default function BannerHome(){
    return(

        <div className="w-full h-auto">
          <div className="relative">
            <Image src={bannerHome} alt="Banner Principal" className=" h-[350px] md:h-[500px] object-fit md:object-cover"/>

              <div className="containerMain absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                <p className="text-lg text-sky-400">TREINO - ALIMENTAÇÃO - BEM-ESTAR</p>
                <h1 className="text-white text-6xl">Conhecimento para<br/>treinar melhor <br/>e <span className="text-sky-600">viver bem.</span></h1>
                <p className="pt-2 text-white text-xl">Explore exercicios, entenda sua alimentação<br/>e descubra suas necessidades diárias.</p>

            
              </div>
          </div>
        </div>

    )
}