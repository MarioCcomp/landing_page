import { ArrowRight } from "lucide-react"


const Steps = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 to-slate-100 py-20 px-6">

        <h2 className="text-4xl md:text-5xl font-black mb-4">3 passos. 15 minutos. <span className="text-indigo-600">Lucro imediato.</span></h2>

        <div className="flex gap-6 mt-8">

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 flex flex-col items-start rounded-2xl border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all w-1/3 relative">
            <div className="hidden md:block absolute top-16 -right-8 w-16 h-1 bg-indigo-200">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                      <ArrowRight className="text-indigo-600" size={24} />
                    </div>
                  </div>
                <p className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black mb-6 shadow-lg">1</p>
                <h3 className="text-2xl font-bold mb-3">Conecte seu WhatsApp</h3>
                <p className="text-slate-600 mb-4">QR Code ou API oficial. Seguro e aprovado pelo WhatsApp.</p>
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">5 min</p>
            </div>

             <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 flex flex-col items-start rounded-2xl border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all w-1/3 h-2/3 relative">
             <div className="hidden md:block absolute top-16 -right-8 w-16 h-1 bg-indigo-200">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                      <ArrowRight className="text-indigo-600" size={24} />
                    </div>
                  </div>
                <p className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black mb-6 shadow-lg">2</p>
                <h3 className="text-2xl font-bold mb-3">Envie seu cardápio</h3>
                <p className="text-slate-600 mb-4">PDF, link ou digite. A IA aprende sozinha.</p>
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">5 min</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 flex flex-col items-start rounded-2xl border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all w-1/3 h-1/3">
                <p className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black mb-6 shadow-lg">3</p>
                <h3 className="text-2xl font-bold mb-3">Ative e lucre</h3>
                <p className="text-slate-600 mb-4">Pronto. Seu bot já está vendendo pra você.</p>
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600">5 min</p>
            </div>

        </div>
    </div>
  )
}

export default Steps