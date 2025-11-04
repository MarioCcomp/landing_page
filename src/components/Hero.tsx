
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex gap-12 pt-40 px-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-purple-50 justify-center pb-12">
        <div className="flex flex-col justify-center items-center max-w-150">
            <h2 className="text-7xl min-w-150 font-extrabold leading-tight mb-8">Nunca mais perca um cliente às <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">2h da manhã</span></h2>
            <p className="max-w-160 text-xl lg:text-2xl text-slate-600 leading-relaxed">Seu WhatsApp responde automaticamente, agenda reservas e aumenta suas vendas em até <span className="font-bold text-indigo-600">38%</span> — mesmo quando você está dormindo</p>
            <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 px-9 py-6 rounded-2xl text-lg text-white font-bold shadow-2xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3 mt-8 mb-8">Começar teste gratuito <FaArrowRightLong className="group-hover:translate-x-1 transition-transform" /></button>

            <div className="flex items-center justify-center gap-8 mt-6 mb-8">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 font-bold text-xl">✓</span>
                    </div>
                    <span className="text-sm text-slate-700 font-medium">30 dias de garantia</span>
                </div>
                
                <div className="h-8 w-px bg-slate-300"></div>
                
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-indigo-600 font-bold text-lg">📈</span>
                    </div>
                    <span className="text-sm text-slate-700 font-medium">Até 38% mais vendas</span>
                </div>
                
                <div className="h-8 w-px bg-slate-300"></div>
                
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-lg">⚡</span>
                    </div>
                    <span className="text-sm text-slate-700 font-medium">Ativa em 5 minutos</span>
                </div>
            </div>
            
        </div>
        <div className="min-w-160 relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-indigo-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative min-w-160 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 max-h-160">
                <div className="flex bg-gradient-to-r from-indigo-600 to-purple-600 p-5 text-white rounded-lg justify-between items-center">
                    
                    <div className="flex gap-2">
                        <div className="flex justify-center w-10 max-h-10 items-center rounded-lg bg-purple-500">🍕</div>
                        <div className="flex flex-col gap-1">
                            <h4 className="font-bold">Bella Pizza</h4>
                            <div className="flex gap-1 justify-center items-center">
                                <div className="rounded-full w-2 h-2 bg-yellow-500 animate-pulse"></div>
                                <p className="text-xs text-white/80">Respondendo agora</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="px-3 py-1 bg-green-400 text-green-900 rounded-full text-xs font-bold">IA ATIVA</p>
                    </div>
                </div>
                <div className="p-6 space-y-4 h-[450px] overflow-auto bg-gradient-to-b from-slate-50 to-white ">
                    <div className="flex justify-start">
                        <div className="bg-white border border-slate-200 px-5 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-xs">
                            <p>👋 Oi! Sou a assistente da Bella Pizza. Como posso ajudar?</p>
                        </div>
                    </div>
                    

                    <div className="flex justify-end">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border border-slate-200 rounded-2xl px-5 py-3 rounded-tr-sm shadow-md max-w-xs">
                            <p>Vocês têm pizza sem glúten?</p>
                        </div>
                    </div>


                    <div className="flex justify-start">
                        <div className="bg-white border border-slate-200 px-5 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-xs">
                            <p>Não trabalhamos com massas sem glúten no momento. Mas temos opções vegetarianas deliciosas! 🌱</p>
                            <p>Posso te mostrar o cardápio completo?</p>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border border-slate-200 rounded-2xl px-5 py-3 rounded-tr-sm shadow-md max-w-xs">
                            <p>Quero reservar mesa pra sábado às 20h</p>
                        </div>
                    </div>


                    <div className="flex justify-start">
                        <div className="bg-white border border-slate-200 px-5 py-3 rounded-2xl rounded-tl-sm shadow-sm max-w-xs">
                            <p className="text-green-600 font-semibold text-sm">✅ Reserva confirmada!</p>
                            <p className="text-sm mt-2">Sábado, 20h • 4 pessoas</p>
                            <p className="text-xs text-slate-500 mt-2">Confirmação enviada por email</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 border-t border-slate-200 bg-white flex items-center gap-3">
                    <input 
                        className="flex-1 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 outline-none transition-all" 
                        placeholder="Digite uma mensagem..." 
                        disabled
                    />
                    <button className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">Enviar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero