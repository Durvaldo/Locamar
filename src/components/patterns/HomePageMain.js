import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const HomePageMain = ({className}) => {
    return (
        <main className={className} id="sobre-nos">
            <section className="flex flex-row justify-center flex-wrap lg:flex-nowrap lg:max-w-auto mx-5 lg:mx-3 my-5 gap-5">
                <div className="lg:max-w-2xl flex flex-col justify-around lg:pr-6 lg:-mr-3">
                    <h1 className="font-bold text-5xl">Sobre Nós</h1>
                    <p className="text-justify my-6">
                        A <strong>Locamar Locações</strong> iniciou suas atividades na cidade de Montes Claros, no ano de 2017, atuando na Locação de Containers Almoxarifados e Banheiros Ecológicos. Até então, sendo recursos pouco difundidos na nossa região e que hoje se mostram indispensáveis nas obras. <br/>
                        Atualmente também nos especializamos no aluguel de caçambas estacionárias para coleta de entulhos (Disk entulho) na cidade de Montes Claros. Apesar de sermos novos nesse seguimento, trazemos o know-how acumulado por quase uma década da Ricks Caçambas.
                    </p>
                    <div className="self-center mt-6 lg:mt-0">
                        <a className="locamar-tag bg-locamar-primary rounded-full py-3 px-4 hover:text-xl text-lg text-locamar-white shadow-sm shadow-locamar-black" href="https://api.whatsapp.com/send/?phone=5508002444444&text&app_absent=0" target="_blank"> <FontAwesomeIcon icon={faWhatsapp}/> ENTRAR EM CONTATO</a>
                    </div>
                </div>
                <div className="max-w-xl self-center mt-4 lg:mt-0"><img className="rounded-lg shadow-sm shadow-locamar-black" src="/images/cacamba.png" alt="cacamba"/></div>
            </section>
        </main>
    )
}

export default HomePageMain