import Image from "next/image"

import bannerA from "@/assets/img/banner_agachamento.png"
import bannerB from "@/assets/img/banner_alimentacao.png"
import bannerC from "@/assets/img/banner_corrida.png"

export default function MainBanners(){

    return(

        <div className="w-full h-auto">

        <article className="containerMain flex flew-row flex-wrap">

            <div className="flex flex-col p-2">

              <p className="py-1 text-gray-400 ">CONTEÚDO QUE FAZ A DIFERENÇA</p>

              <h3 className="text-4xl font-bold py-1">Aprenda,pratique e evolua.</h3>

              <p className="text-gray-400 ">Artigos completos e objetivos para ajudar você a treinar,melhor,<br/>se alimentar e construir uma rotina mais saudável.</p>

            </div>

            <section className="flex flex-row flex-wrap">
              <div className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="m-2 shadow rounded">
                  <Image src={bannerA} className="object-cover" alt="Importancia dos Exercicicios Fisicos"/>

                  <div className="p-5">
                    <div className="flex items-center justify-between py-2">
                      <p className="bg-sky-200 p-1 rounded text-blue-600 font-bold">Exercicios</p>
                      <p className="text-gray-400 font-bold">6 min de leitura</p>
                    </div>
                    <h5 className="text-xl font-bold">Qual a importância da atividade fisica?</h5>
                    <p className="text-md">A atividade física melhora a saúde, fortalece o corpo, reduz o estresse e aumenta a autoestima. Mais do que estética, é saúde, disciplina e qualidade de vida!</p>
                    <button className="text-sm text-sky-500 font-bold border-1 border-sky-500 p-1 rounded cursor-pointer">Ler artigo</button>
                  </div>
                </div>
              </div>


              <div className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="m-2 shadow rounded">
                  <Image src={bannerB} className="object-cover" alt="Importancia dos Exercicicios Fisicos"/>

                  <div className="p-5">
                    <div className="flex items-center justify-between py-2">
                      <p className="bg-green-200 p-1 rounded text-green-600 font-bold">ALIMENTAÇÃO</p>
                      <p className="text-gray-400 font-bold">7 min de leitura</p>
                    </div>
                    <h5 className="text-xl font-bold">Como Montar um prato equilibrado</h5>
                    <p className="text-md">Veja como combinar os alimentos no dia a dia para ter mais energia, saciedade e melhores resultados nos treinos.</p>
                    <button className="text-sm text-sky-500 font-bold border-1 border-sky-500 p-1 rounded cursor-pointer">Ler artigo</button>
                  </div>
                </div>
              </div>


              <div className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="m-2 shadow rounded">
                  <Image src={bannerC} className="object-cover" alt="Importancia dos Exercicicios Fisicos"/>

                  <div className="p-5">
                    <div className="flex items-center justify-between py-2">
                      <p className="bg-sky-200 p-1 rounded text-blue-600 font-bold">TREINO</p>
                      <p className="text-gray-400 font-bold">5 min de leitura</p>
                    </div>
                    <h5 className="text-xl font-bold">Cardio e musculação: como combinar</h5>
                    <p className="text-md">Entenda como unias as duas modalidades para melhorar o condicionamento, a composição corporal e a saúde.</p>
                    <button className="text-sm text-sky-500 font-bold border-1 border-sky-500 p-1 rounded cursor-pointer">Ler artigo</button>
                  </div>
                </div>
              </div>

            </section>



        </article>
        </div>
    )
}