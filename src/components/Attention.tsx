
const Attention = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 via-green-100 to-green-50 py-8 px-5 flex flex-col justify-center items-center border-y-2 border-green-300 mb-10 pb-15">
        <h2 className="text-5xl font-bold my-5">Você está <span className="text-red-700">perdendo dinheiro</span> agora mesmo</h2>

        <div className="flex mt-9 gap-4">
            <div className="flex flex-col justify-center items-center text-center border-2 border-red-200 rounded-xl  bg-white w-100 gap-3 shadow-lg">
                <div className="text-5xl">😴</div>
                <h3 className="font-bold text-xl">23h - 7h</h3>
                <p className="max-w-80">Clientes querem reservar mas você está dormindo. <span className="text-red-700 font-bold">Eles vão no concorrente.</span></p>
            </div>

            <div className="flex flex-col justify-center items-center text-center border-2 border-red-200 rounded-xl  bg-white w-100 gap-3 shadow-lg">
                <div className="text-5xl">📱</div>
                <h3 className="font-bold text-xl">Mensagens perdidas</h3>
                <p className="max-w-80">67% das pessoas desistem se não recebem resposta em <span className="text-red-700 font-bold">5 minutos.</span></p>
            </div>

            <div className="flex flex-col justify-center items-center text-center border-2 border-red-200 rounded-xl  bg-white w-100 gap-3 p-6 shadow-lg">
                <div className="text-5xl">💸</div>
                <h3 className="font-bold text-xl">R$ 18 mil/ano</h3>
                <p className="max-w-80">Valor médio que restaurantes <span className="text-red-700 font-bold">perdem</span> por não responder rápido.</p>
            </div>
        </div>
    </div>
  )
}

export default Attention