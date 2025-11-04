import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";



const Header = () => {

const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed w-full bg-white/90 backdrop-blur-lg shadow-sm z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
              <MessageCircle size={24} />
            </div>
            <div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Atendente.AI
              </h1>
              <p className="text-xs text-slate-500 -mt-0.5">Automação WhatsApp</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#beneficios" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors">Benefícios</a>
            <a href="#como-funciona" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors">Como funciona</a>
            <a href="#planos" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors">Preços</a>
            <a href="#depoimentos" className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors">Casos</a>
            <a href="#" className="ml-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
              Testar Grátis
            </a>
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden px-6 py-4 bg-white border-t border-slate-200">
            <div className="flex flex-col gap-4">
              <a href="#beneficios" className="text-sm font-medium text-slate-700">Benefícios</a>
              <a href="#como-funciona" className="text-sm font-medium text-slate-700">Como funciona</a>
              <a href="#planos" className="text-sm font-medium text-slate-700">Preços</a>
              <a href="#depoimentos" className="text-sm font-medium text-slate-700">Casos</a>
              <a href="#" className="text-center px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold">
                Testar Grátis
              </a>
            </div>
          </nav>
        )}
    </div>
  )
}

export default Header