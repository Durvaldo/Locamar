import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = ({className}) => {
    return(
        <footer className={className}>
            <div className="mt-5 text-center bg-locamar-black">
                <div className="bg-locamar-white flex justify-center"><img src="/images/locamar-logo.png" alt="Logo Locamar" className="max-h-20 md:max-h-40"/></div>
                <div className="flex items-center justify-around flex-wrap">
                    <div className="flex flex-col mx-1 my-3 rounded-sm gap-1">
                        <h2 className="text-locamar-white text-xl font-bold">Endereço</h2>
                        <p className="text-locamar-white">Rua Silas Canelas, 92, Bairro Cidade Nova – Montes Claros – MG</p>
                    </div>
                    <div className="flex flex-col mx-1 my-3 rounded-sm gap-1">
                        <h2 className="text-locamar-white text-xl font-bold">Contato</h2>
                        <p className="text-locamar-white">
                            0800 244 4444
                            (38) 3222-4444
                        </p>
                    </div>
                    <div className="flex flex-col mx-1 my-3 rounded-sm gap-1">
                        <h2 className="text-locamar-white text-xl font-bold">Horário de Atendimento</h2>
                        <p className="text-locamar-white">Das 7 às 17 horas</p>
                        <h2 className="text-locamar-white text-xl font-bold">Siga-nos</h2>
                        <div className="flex justify-center gap-2">
                            <a className="text-locamar-white text-3xl" href="https://www.facebook.com/containermontesclaros" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a className="text-locamar-white text-3xl" href="https://www.instagram.com/locamarlocacoes/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-locamar-white text-center mb-0">Desenvolvido por Durvaldo Gonçalves Marques</p>
                </div>
            </div>
        </footer>    
    )
}

export default Footer