export default function BannerService(){
    return(
        <div className="w-full h-auto bg-sky-100">
        
                <section className="containerMain flex flex-wrap flex-row py-5">

                <div className="basis-full md:basis-1/2">
                
                <div className="flex flex-col py-5">
                    <p className="text-md">CALCULADORA</p>
                    <h3 className="text-2xl md:text-4xl font-bold py-1">Entenda seu gasto calórico</h3>
                    <h4 className="text-lg md:text-xl fond-bold py-2">Uma estimativa para conhecer melhor sua rotina</h4>
                    <p>Descrubra uma estimativa do seu gasto calórico diário com base em seus dados e nível de atividade física. Essa informação pode ajudar no planejamento dos seus treinos e da sua alimentação.</p>
                </div>
                
                </div>
                <div className="basis-full md:basis-1/2">
                
                <form className=" m-5 bg-white p-5 shadow rounded">

                    <div className="flex flex-wrap flex-row">
                    <section className="basis-full md:basis-1/2 flex flex-col">
                        <label>Idade</label>
                        <input type="number" placeholder="Ex.: 25 " className="border-1 border-gray-400 rounded p-2 m-2"></input>
                    </section>

                    <section className="basis-full md:basis-1/2 flex flex-col">
                        <label>Peso (Kg)</label>
                        <input type="double" placeholder="Ex.: 76.4 " className="border-1 border-gray-400 rounded p-2 m-2"></input>
                    </section>

                    </div>

                    <div className="flex flex-wrap flex-row py-2">
                    <section className="basis-full md:basis-1/2 flex flex-col">
                        <label>Altura(cm)</label>
                        <input type="number" placeholder="Ex.: 170 " className="border-1 border-gray-400 rounded p-2 m-2"></input>
                    </section>

                    <section className="basis-full md:basis-1/2  flex flex-col">
                        <label>Nivel de Atividade</label>
                        <select  className="border-1 border-gray-400 rounded p-2.5 m-2">
                        <option>Nivel de Atividade</option>
                        </select>
                    </section>
                    <button className="p-3 border-1 bg-blue-500 text-white rounded-lg w-full cursor-pointer mt-3">Calcular Estimativa</button>

                    <p className="text-center text-gray-500 text-sm pt-3">Os resultados são estimativos e não subistituem uma orientação profissional.</p>
                    </div>

                </form>
                
                </div>

                </section>
        </div>
    )
}