import Image from "next/image"
import SubBannerA from "@/assets/img/banner_sleep.png"
import SubBannerB from "@/assets/img/banner_water.png"
import SubBannerC from "@/assets/img/banner_gym.png"
import SubBannerD from "@/assets/img/banners_foods.png"

export default function SecondBanner(){
    return(

        <div className="w-full h-auto">
        
        <section className="containerMain flex flex-row flex-wrap py-5">

        <div className="basis-full">
          <div className="flex justify-between items-center">
            <h3 className="text-xl md:text-3xl font-bold">Mais conhecimento para sua rotina</h3>
            <button className="text-md font-bold text-sky-500">Ver todos os artigos</button>
          </div>
          <p className="text-gray-400">Dicas, guias e informações práticas para você evoluir dentro e fora dos treinos.</p>
        </div>  

        <div className="md:basis-1/2 lg:basis-1/4">
          <div className="m-2 shadow rounded">
            <Image src={SubBannerA} alt="Sono & Performance" className="object-cover rounded"/>

            <div className="p-2">
              <h5 className="text-lg md:text-xl font-bold">Sono e performance: por que o descanso é essencial?</h5>
              <p className="text-md text-gray-400">Entenda como o sono influencia seus resultados, a recuperação muscular e a saúde mental.</p>
            </div>
          </div>
        </div>

        <div className="md:basis-1/2 lg:basis-1/4">
          <div className="m-2 shadow rounded">
            <Image src={SubBannerB} alt="Sono & Performance" className="object-cover rounded"/>

            <div className="p-2">
              <h5 className="text-lg md:text-xl font-bold">Hidratação no treino e no dia a dia</h5>
              <p className="text-md text-gray-400">Veja quanto e como beber água para manter o desempenho, a desposição e a saúde ajudando também na atividade fisica.</p>
            </div>
          </div>
        </div>

        <div className="md:basis-1/2 lg:basis-1/4">
          <div className="m-2 shadow rounded">
            <Image src={SubBannerC} alt="Sono & Performance" className="object-cover rounded"/>

            <div className="p-2">
              <h5 className="text-lg md:text-xl font-bold">Mobilidade: mais liberdade para se movimentar</h5>
              <p className="text-md text-gray-400">Conheça os beneficios da mobilidade e exercicios simples para incluir na sua rotina.</p>
            </div>
          </div>
        </div>

        <div  className="md:basis-1/2 lg:basis-1/4">
          <div className="m-2 shadow rounded">
            <Image src={SubBannerD} alt="Sono & Performance" className="object-cover rounded"/>

            <div className="p-2">
              <h5 className="text-lg md:text-xl font-bold">Alimentação pré e pós-treino</h5>
              <p className="text-md text-gray-400">Saiba o que comer antes e depois do treino para ter mais energia,recuperação e melhores resultados.</p>
            </div>
          </div>
        </div>

        </section>

        </div>
    )
}