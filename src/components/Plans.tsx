
const Plans = () => {
  return (
    <div className="flex flex-col justify-center items-center px-20 py-8 mt-8">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Invista <span className="text-indigo-600">R$ 249</span>. Ganhe <span className="text-green-600">R$ 4.200</span></h2>
        <p className="text-slate-600 text-xl">ROI médio de 1.600% nos primeiros 90 dias</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-slate-200 hover:shadow-2xl transition-all">
                <p className="text-sm font-bold text-slate-500 mb-2">PARA TESTAR</p>
                <h3 className="text-3xl font-black mb-6">Starter</h3>

                <div className="mb-6">
                    <span className="text-5xl font-black">R$ 149</span>
                    <span className="text-base text-slate-500">/mês</span>
                </div>

                <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">1 número WhatsApp</li>
                    <li className="flex items-start gap-3">300 conversas/mês</li>
                    <li className="flex items-start gap-3">IA básica</li>
                    <li className="flex items-start gap-3">Suporte email</li>
                </ul>

                <button className="block text-center px-6 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">Começar teste grátis</button>
            </div>
        </div>
    </div>
  )
}

export default Plans