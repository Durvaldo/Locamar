import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faBullseye, faEye, faScaleBalanced} from "@fortawesome/free-solid-svg-icons"
import MainForm from "../patterns/MainForm"
import Link from "next/link"

const HomePageMain = ({className}) => {
    return (
        <main className={`${className} flex flex-col items-center`} id="sobre-nos">
            <section className="container flex flex-row justify-center flex-wrap lg:flex-nowrap lg:mx-3 gap-5">
                <div className="flex flex-col justify-around lg:pr-6 lg:-mr-3">
                    <h1>Sobre Nós</h1>
                    <p className="text-justify mt-6 mb-2 indent-8">
                        A <strong>Locamar Locações</strong> iniciou suas atividades na cidade de Montes Claros em 2017, oferecendo locação de Containers Almoxarifados e Banheiros Ecológicos em toda região Norte Mineira. Com o objetivo de oferecer soluções eficientes e práticas para as necessidades das obras, a empresa tem se destacado na região.
                    </p>
                    <p className="text-justify my-2 indent-8">
                        Em 2019, a Locamar expandiu seus serviços para incluir containers de escritório. Essa iniciativa foi pensada para atender as necessidades de empresas que precisam de espaços temporários para suas equipes.
                    </p>
                    <p className="text-justify my-2 indent-8">
                        Em 2023, a empresa adicionou banheiros químicos ao seu portfólio e expandiu sua atuação para a cidade de Taiobeiras. Com isso, a Locamar passou a oferecer mais opções de banheiros para sua clientela, garantindo ainda mais higiene e conforto para as obras.
                    </p>
                    <p className="text-justify mt-2 mb-6 indent-8">
                        Além disso, a empresa atua na locação de caçambas estacionárias para coleta de entulhos (Disk entulho) na cidade de Montes Claros e Taiobeiras, trazendo o know-how acumulado por quase uma década da Ricks Caçambas. A Locamar tem se destacado por oferecer soluções completas e eficientes para as necessidades das obras, garantindo a segurança e bem-estar dos trabalhadores.
                    </p>
                    <div className="self-center mt-6 lg:mt-0">
                        <a className="locamar-tag bg-locamar-primary rounded-full py-3 px-4 hover:text-xl text-lg text-locamar-white shadow-sm shadow-locamar-black" href="https://api.whatsapp.com/send/?phone=5508002444444&text&app_absent=0" target="_blank"> <FontAwesomeIcon icon={faWhatsapp}/> ENTRAR EM CONTATO</a>
                    </div>
                </div>
                <div className="self-center mt-4 lg:mt-0"><img className="rounded-lg shadow-sm shadow-locamar-black" src="/images/cacamba.png" alt="cacamba"/></div>
            </section>
            <section id="missao" className="container grid md:grid-cols-4 lg:grid-cols-3 gap-5 my-5 lg:my-16">
                <div className="missao-card md:col-span-2 lg:col-span-1">
                    <FontAwesomeIcon className="fa-3x" icon={faBullseye}/>
                    <div>
                        <h2 className="my-2">Missão</h2>
                        <p>Oferecer o serviço de locação de equipamentos para obras, buscando excelência e a satisfação de nossos clientes</p>
                    </div>
                </div>
                <div className="missao-card md:col-span-2 lg:col-span-1">
                    <FontAwesomeIcon className="fa-3x" icon={faEye}/>
                    <div>
                        <h2 className="text-2xl font-bold my-2">Visão</h2>
                        <p>Ser referência em inovação e diferenciação em soluções ambientais e locações de equipamentos, disseminando a cultura e as boas práticas de sustentabilidade.</p>
                    </div>
                </div>
                <div className="missao-card md:col-start-2 md:col-span-2 lg:col-start-auto lg:col-span-1">
                    <FontAwesomeIcon className="fa-3x" icon={faScaleBalanced}/>
                    <div>
                        <h2 className="text-2xl font-bold my-2">Valores</h2>
                        <ul className="list-inside list-disc text-left">
                            <li>Atuar com responsabilidade ambiental;</li>
                            <li>Integridade e honestidade;</li>
                            <li>Dedicação para com a qualidade;</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="nosso-servico" className="bg-locamar-black w-full flex justify-center">
                <div className="container">
                    <h1 className="text-locamar-white text-center pb-5">Nossos Serviços</h1>
                    <div className="flex flex-wrap justify-center gap-5">
                        <div className="container-card">
                            <img className="max-h-16 sm:max-h-32" src="/images/cacamba-icon.png" alt="cacamba"/>
                            <div className="flex flex-col justify-around mr-5 h-full cursor-default items-center">
                                <h2 className="font-bold text-left lg:w-full">Caçambas</h2>
                                <p className="text-justify text-xs sm:text-sm md:text-base">Locação de caçambas para descarte responsável de entulhos em eventos, construções e mais. Transporte e descarte seguros. </p>
                                <Link className="text-center mt-3 font-bold text-locamar-white bg-locamar-secundary shadow-sm shadow-gray-400 w-1/2 rounded-full px-2 py-1 hover:scale-105" href="/cacamba">Saiba mais</Link>
                            </div>
                        </div>
                        <div className="container-card">
                            <img className="max-h-16 sm:max-h-32" src="/images/banheiro-ecologico-icon.png" alt="Banheiros"/>
                            <div className="flex flex-col justify-around mr-5 h-full cursor-default items-center">
                                <h2 className="font-bold text-left lg:w-full">Banheiros</h2>
                                <p className="text-justify text-xs sm:text-sm md:text-base">Não perca tempo e dinheiro com banheiros inapropriados na sua obra, alugue conosco, garantindo economia, higiene e segurança para seus trabalhadores.</p>
                                <Link className="text-center mt-3 font-bold text-locamar-white bg-locamar-secundary shadow-sm shadow-gray-400 w-1/2 rounded-full px-2 py-1 hover:scale-105" href="/banheiro-ecologico">Saiba mais</Link>
                            </div>
                        </div>
                        <div className="container-card">
                            <img className="max-h-16 sm:max-h-32" src="/images/container-icon.png" alt="Container"/>
                            <div className="flex flex-col justify-around mr-5 h-full cursor-default items-center">
                                <h2 className="font-bold text-left lg:w-full">Containers</h2>
                                <p className="text-justify text-xs sm:text-sm md:text-base">Nossos containers almoxarifado dão a tranquilidade e a facilidade para guardar equipamentos e pertences durante a construção. </p>
                                <Link className="text-center mt-3 font-bold text-locamar-white bg-locamar-secundary shadow-sm shadow-gray-400 w-1/2 rounded-full px-2 py-1 hover:scale-105" href="/container">Saiba mais</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full -mb-[15%]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#121619" fillOpacity="1" d="M0,128L60,117.3C120,107,240,85,360,69.3C480,53,600,43,720,53.3C840,64,960,96,1080,101.3C1200,107,1320,85,1380,74.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>            
            </div>
            <section id="onde-estamos" className="container">
                <h1 className="text-center pb-10">Onde Estamos</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="bg-locamar-primary m-0 px-[50%] pt-3 pb-[90%] rounded-xl relative">
                        <iframe className="absolute top-[2%] left-[2%] w-[96%] h-[96%]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15283.062997051366!2d-43.865758!3d-16.738536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb3a432fa15d9977!2zTG9jYW1hciBMb2Nhw6fDtWVz!5e0!3m2!1spt-BR!2sbr!4v1672244854474!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <MainForm/>
                </div>
            </section>
        </main>
    )
}

export default HomePageMain