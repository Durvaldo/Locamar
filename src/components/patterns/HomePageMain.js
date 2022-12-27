import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faBullseye, faEye, faScaleBalanced } from "@fortawesome/free-solid-svg-icons"

const HomePageMain = ({className}) => {
    return (
        <main className={`${className} flex flex-col items-center`} id="sobre-nos">
            <section className="flex flex-row justify-center flex-wrap lg:flex-nowrap mx-5 lg:mx-3 mt-5 mb-7 gap-5 max-w-screen-xl">
                <div className="flex flex-col justify-around lg:pr-6 lg:-mr-3">
                    <h1 className="font-bold text-5xl">Sobre Nós</h1>
                    <p className="text-justify my-6">
                        A <strong>Locamar Locações</strong> iniciou suas atividades na cidade de Montes Claros, no ano de 2017, atuando na Locação de Containers Almoxarifados e Banheiros Ecológicos. Até então, sendo recursos pouco difundidos na nossa região e que hoje se mostram indispensáveis nas obras. <br/>
                        Atualmente também nos especializamos no aluguel de caçambas estacionárias para coleta de entulhos (Disk entulho) na cidade de Montes Claros. Apesar de sermos novos nesse seguimento, trazemos o know-how acumulado por quase uma década da Ricks Caçambas.
                    </p>
                    <div className="self-center mt-6 lg:mt-0">
                        <a className="locamar-tag bg-locamar-primary rounded-full py-3 px-4 hover:text-xl text-lg text-locamar-white shadow-sm shadow-locamar-black" href="https://api.whatsapp.com/send/?phone=5508002444444&text&app_absent=0" target="_blank"> <FontAwesomeIcon icon={faWhatsapp}/> ENTRAR EM CONTATO</a>
                    </div>
                </div>
                <div className="self-center mt-4 lg:mt-0"><img className="rounded-lg shadow-sm shadow-locamar-black" src="/images/cacamba.png" alt="cacamba"/></div>
            </section>
            <section id="missao" className="flex flex-col lg:flex-row align-between justify-around items-center lg:items-start flex-wrap sm:flex-nowrap max-w-screen-xl mx-5 lg:mx-3 my-6 gap-6">
                <div class="text-center flex flex-col items-center flex-1">
                    <FontAwesomeIcon className="fa-3x" icon={faBullseye}/>
                    <div>
                        <h2 className="text-2xl font-bold my-2">Missão</h2>
                        <p>Oferecer o serviço de locação de equipamentos para obras, buscando excelência e a satisfação de nossos clientes</p>
                    </div>
                </div>
                <div class="text-center flex flex-col items-center flex-1">
                    <FontAwesomeIcon className="fa-3x" icon={faEye}/>
                    <div>
                        <h2 className="text-2xl font-bold my-2">Visão</h2>
                        <p>Ser referência em inovação e diferenciação em soluções ambientais e locações de equipamentos, disseminando a cultura e as boas práticas de sustentabilidade.</p>
                    </div>
                </div>
                <div class="text-center flex flex-col items-center shrink-0">
                    <FontAwesomeIcon className="fa-3x" icon={faScaleBalanced}/>
                    <div>
                        <h2 className="text-2xl font-bold my-2">Valores</h2>
                        <ul className="list-inside list-disc">
                            <li>Atuar de forma sustentável, com responsabilidade social e ambiental;</li>
                            <li>Integridade e honestidade;</li>
                            <li>Agir com transparência e ética nas relações;</li>
                            <li>Atitude crítica, dedicação para com a qualidade e melhoramento pessoal;</li>
                            <li>Empenho para com os clientes e parceiros;</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HomePageMain