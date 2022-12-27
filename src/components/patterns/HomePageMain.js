import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const HomePageMain = ({className}) => {
    return (
        <main className={className}>
            <section className="flex flex-row justify-center flex-wrap lg:flex-nowrap lg:max-w-auto mx-5 lg:mx-3 my-5 gap-5">
                <div className="lg:max-w-2xl flex flex-col justify-around mr-6">
                    <h1 className="font-bold text-5xl">Sobre Nós</h1>
                    <p className="text-justify">
                        A <strong>Locamar Locações</strong> iniciou suas atividades na cidade de Montes Claros, no ano de 2017, atuando na Locação de Containers Almoxarifados e Banheiros Ecológicos. Até então, sendo recursos pouco difundidos na nossa região e que hoje se mostram indispensáveis nas obras. Somos fraqueados no Norte de Minas da <strong>Container Segurança</strong>, empresa que revolucionou o seguimento, criando a solução de armazenamento móvel, simples, barata, segura e ágil e que hoje atende mais de 1.000 cidades através de sua rede. <br/>
                        Atualmente também nos especializamos no aluguel de caçambas estacionárias para coleta de entulhos (Disk entulho) na cidade de Montes Claros. Apesar de sermos novos nesse seguimento, trazemos o know-how acumulado por quase uma década da Ricks Caçambas.
                    </p>
                    <div class="botao"><a href="https://api.whatsapp.com/send/?phone=5508002444444&text&app_absent=0" target="_blank"> <i class="fa-brands fa-whatsapp"></i> ENTRAR EM CONTATO</a></div>
                </div>
                <div class="max-w-xl mt-4 lg:mt-0"><img className="rounded-lg" src="/images/cacamba.png" alt="cacamba"/></div>
            </section>
        </main>
    )
}

export default HomePageMain