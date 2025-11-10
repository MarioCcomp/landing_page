
const Benefits = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20">
        <h2 className="text-5xl font-extrabold">Recupere esse dinheiro em <span className="text-blue-600">30 dias</span></h2>
        <p className="text-slate-500 text-xl mt-3 mb-6">Clientes reais, resultados reais, lucro real</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 flex flex-col items-start rounded-2xl border-2 border-slate-200 hover:border-indigo-600 hover:shadow-2xl transition-all">
                <h3 className="text-2xl mb-5">📈</h3>
                <p className="text-2xl font-bold">+38% em reservas</p>
                <p className="text-slate-600 mt-3 mb-6">Atendimento 24/7 converte visitas em vendas</p>
                <p className="bg-white border-1 border-slate-200 rounded-full py-2 px-4 text-indigo-600 font-bold">+R$ 4.2k/mês</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 flex flex-col items-start rounded-2xl border-2 border-slate-200 hover:border-indigo-600 hover:shadow-2xl transition-all">
                <h3 className="text-2xl mb-5">📈</h3>
                <p className="text-2xl font-bold">Resposta em 1.8s</p>
                <p className="text-slate-600 mt-3 mb-6">Seus clientes não esperam. Você não perde venda.</p>
                <p className="bg-white border-1 border-slate-200 rounded-full py-2 px-4 text-indigo-600 font-bold">5x mais rápido</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 flex flex-col items-start rounded-2xl border-2 border-slate-200 hover:border-indigo-600 hover:shadow-2xl transition-all">
                <h3 className="text-2xl mb-5">📈</h3>
                <p className="text-2xl font-bold">-70% carga de trabalho</p>
                <p className="text-slate-600 mt-3 mb-6">Sua equipe foca no atendimento presencial</p>
                <p className="bg-white border-1 border-slate-200 rounded-full py-2 px-4 text-indigo-600 font-bold">4h/dia economizadas</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 flex flex-col items-start rounded-2xl border-2 border-slate-200 hover:border-indigo-600 hover:shadow-2xl transition-all">
                <h3 className="text-2xl mb-5">📈</h3>
                <p className="text-2xl font-bold">Zero erro humano</p>
                <p className="text-slate-600 mt-3 mb-6">Sempre disponível, sempre preciso</p>
                <p className="bg-white border-1 border-slate-200 rounded-full py-2 px-4 text-indigo-600 font-bold">99.8% precisão</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 flex flex-col items-start rounded-2xl border-2 border-slate-200 hover:border-indigo-600 hover:shadow-2xl transition-all">
                <h3 className="text-2xl mb-5">📈</h3>
                <p className="text-2xl font-bold">Conversas ilimitadas</p>
                <p className="text-slate-600 mt-3 mb-6">Escala sem contratar mais gente</p>
                <p className="bg-white border-1 border-slate-200 rounded-full py-2 px-4 text-indigo-600 font-bold">R$ 0,12/conversa</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 flex flex-col items-start rounded-2xl border-2 border-slate-200 hover:border-indigo-600 hover:shadow-2xl transition-all">
                <h3 className="text-2xl mb-5">📈</h3>
                <p className="text-2xl font-bold">Setup em 15min</p>
                <p className="text-slate-600 mt-3 mb-6">Conecta e já começa a vender mais</p>
                <p className="bg-white border-1 border-slate-200 rounded-full py-2 px-4 text-indigo-600 font-bold">Hoje mesmo</p>
            </div>

        </div>
    </div>
  )
}

export default Benefits