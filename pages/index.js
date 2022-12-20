function HomePage() {
    return (
        <section className="bg-locamar-primary shadow-sm shadow-gray-500">  
            <div className="py-3 flex justify-around items-center">
                <img
                    src="/images/locamar-logo.png"
                    alt="Logo Locamar"
                    className="max-h-40"
                />
                <ul className="hidden md:flex flex-col sm:flex-row gap-2">
                    <li className="bg-locamar-white text-center rounded-full text-bold py-1 px-3 sm:min-w-lg shadow-sm shadow-gray-500 cursor-pointer hover:scale-105">Inicio</li>
                    <li className="bg-locamar-white text-center rounded-full text-bold py-1 px-3 sm:min-w-lg shadow-sm shadow-gray-500 cursor-pointer hover:scale-105">Sobre nós</li>
                    <li className="bg-locamar-white text-center rounded-full text-bold py-1 px-3 sm:min-w-lg shadow-sm shadow-gray-500 cursor-pointer hover:scale-105">Nossos Serviços</li>
                    <li className="bg-locamar-white text-center rounded-full text-bold py-1 px-3 sm:min-w-lg shadow-sm shadow-gray-500 cursor-pointer hover:scale-105">Onde Estamos</li>
                </ul>
                <div class="p-4 space-y-2 bg-gray-600 rounded shadow md:hidden cursor-pointer">
                    <span class="block w-8 h-0.5 bg-locamar-white"></span>
                    <span class="block w-8 h-0.5 bg-locamar-white"></span>
                    <span class="block w-8 h-0.5 bg-locamar-white"></span>
                </div>
            </div>
        </section>
    )
}
  
export default HomePage