import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons"

const Footer = ({className}) => {
    return(
        <footer className={className}>
            <div className="text-center bg-locamar-black">
                <div className="bg-gray-500 flex justify-center"><img src="/images/locamar-logo.png" alt="Logo Locamar" className="max-h-20 md:max-h-40"/></div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-around flex-wrap text-locamar-white">
                    <div className="flex flex-row justify-around rounded-lg my-3 items-center w-80 place-self-center text-left bg-gray-600 hover:bg-gray-500 py-5">
                        <FontAwesomeIcon className="text-4xl" icon={faMapLocationDot}/>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-xl font-bold">Endereço</h2>
                            <p>Rua Silas Canelas n°92 <br/> Cidade Nova, Montes Claros/MG <br/> CEP: 39401-009</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 my-3 w-fit sm:w-80 place-self-center">
                        <h2 className="text-xl font-bold">Contato</h2>
                        <p><FontAwesomeIcon className="text-lime-500" icon={faWhatsapp}/> 0800 244 4444</p>
                        <p>(38) 3222-4444</p>
                        <p>atendimento@locamarlocacoes.com.br</p>
                    </div>
                    <div className="flex flex-col gap-1 my-3 w-fit sm:w-80 place-self-center">
                        <h2 className="text-xl font-bold">Horário de Atendimento</h2>
                        <p>Segunda a Sexta</p>
                        <p>Das 7 às 17 horas</p>
                        <h2 className="text-xl font-bold">Siga-nos</h2>
                        <div className="flex justify-center gap-2">
                            <a className="text-3xl" href="https://www.facebook.com/containermontesclaros" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a className="text-3xl" href="https://www.instagram.com/locamarlocacoes/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-locamar-white text-center mt-3 mb-0">Desenvolvido por Durvaldo Gonçalves Marques</p>
                </div>
            </div>
        </footer>    
    )
}

export default Footer