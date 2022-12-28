import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faBullseye, faEye, faScaleBalanced } from "@fortawesome/free-solid-svg-icons"

const HomePageMain = ({className}) => {
    return (
        <main className={`${className} flex flex-col items-center`} id="sobre-nos">
            <section className="container flex flex-row justify-center flex-wrap lg:flex-nowrap lg:mx-3 gap-5">
                <div className="flex flex-col justify-around lg:pr-6 lg:-mr-3">
                    <h1>Sobre Nós</h1>
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
            <section id="missao" className="container flex flex-col lg:flex-row align-between justify-around items-center lg:items-start flex-wrap sm:flex-nowrap lg:mx-3 gap-5">
                <div className="text-center flex flex-col items-center flex-1">
                    <FontAwesomeIcon className="fa-3x" icon={faBullseye}/>
                    <div>
                        <h2 className="text-2xl font-bold my-2">Missão</h2>
                        <p>Oferecer o serviço de locação de equipamentos para obras, buscando excelência e a satisfação de nossos clientes</p>
                    </div>
                </div>
                <div className="text-center flex flex-col items-center flex-1">
                    <FontAwesomeIcon className="fa-3x" icon={faEye}/>
                    <div>
                        <h2 className="text-2xl font-bold my-2">Visão</h2>
                        <p>Ser referência em inovação e diferenciação em soluções ambientais e locações de equipamentos, disseminando a cultura e as boas práticas de sustentabilidade.</p>
                    </div>
                </div>
                <div className="text-center flex flex-col items-center shrink-0">
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
            <section id="nosso-servico" className="bg-locamar-black w-full flex justify-center">
                <div className="container">
                    <h1 className="text-locamar-white text-center pb-5">Nossos Serviços</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="container-card">
                            <img className="max-h-16" src="/images/cacamba-icon.png" alt="cacamba"/>
                            <div>
                                <h3 className="text-lg font-bold">Locação de caçambas estacionárias</h3>
                                <p> O descarte correto de materiais é de fundamental importância. Pensando nisso, dispomos de grande quantidade de caçambas estacionárias para locação. </p>
                            </div>
                        </div>
                        <div className="container-card">
                            <img className="max-h-16" src="/images/banheiro-ecologico-icon.png" alt="Banheiros"/>
                            <div>
                                <h3 className="text-lg font-bold">Banheiros ecológicos</h3>
                                <p>Aluguel de Banheiros Ecológicos, muito mais economia, higiene e praticidade na sua obra</p>
                            </div>
                        </div>
                        <div className="container-card">
                            <img className="max-h-16" src="/images/container-icon.png" alt="Container"/>
                            <div>
                                <h3 className="text-lg font-bold">Locação de Containers Almoxarifado</h3>
                                <p> Nossos containers almoxarifado dão a tranquilidade e a facilidade para guardar equipamentos e pertences durante a construção. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HomePageMain