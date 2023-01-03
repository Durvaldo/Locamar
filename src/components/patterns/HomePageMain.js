import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faBullseye, faCheck, faEye, faScaleBalanced, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const HomePageMain = ({className}) => {
    const handlePhone = (event) => {
        let input = event.target
        input.value = phoneMask(input.value)
    }
      
    const phoneMask = (value) => {
        if (!value) return ""
        value = value.replace(/\D/g,'')
        value = value.replace(/(\d{2})(\d)/,"($1) $2")
        value = value.replace(/(\d)(\d{4})$/,"$1-$2")
        return value
    } 

    const [formStatus, setFormStatus] = useState('');
    const [buttonStatus, setButtonStatus] = useState('');
    const [formRespostaStatus, setFormRespostaStatus] = useState('hidden');
    const [buttonLoading, setButtonLoading] = useState('hidden');

    const submitFormOrcamento = evento => {
        evento.preventDefault();
        const fetchUrl ="https://formsubmit.co/financeiro@locamarlocacoes.com.br"

        setButtonStatus('hidden')
        setButtonLoading('')

        const nome = evento.target.nome.value
        const telefone = evento.target.telefone.value
        const email = evento.target.email.value
        const orcamento = evento.target.orcamento.value

        fetch(fetchUrl, {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                Nome: nome,
                Telefone: telefone,
                Email: email,
                Orcamento: orcamento,
                _captcha: 'false'
            })
        })
            .then(response => {
                response.json()
                setFormStatus('hidden')
                setFormRespostaStatus('')
            })
            .catch(error => console.log(error))
    }


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
            <section id="missao" className="container grid md:grid-cols-4 lg:grid-cols-3 gap-5">
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
            <section id="nosso-servico" className="bg-locamar-black w-full flex justify-center shadow-lg shadow-gray-400">
                <div className="container">
                    <h1 className="text-locamar-white text-center pb-5">Nossos Serviços</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="container-card">
                            <img className="max-h-16" src="/images/cacamba-icon.png" alt="cacamba"/>
                            <div>
                                <h3 className="text-lg font-bold">Locação de caçambas estacionárias</h3>
                                <p> O descarte correto de materiais é de fundamental importância. Pensando nisso, dispomos de grandes quantidades de caçambas estacionárias para locação. </p>
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
            <section id="onde-estamos" className="container">
                <h1 className="text-center pb-10">Onde Estamos</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="bg-locamar-primary m-0 px-[50%] pt-3 pb-[90%] rounded-xl relative">
                        <iframe className="absolute top-[2%] left-[2%] w-[96%] h-[96%]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15283.062997051366!2d-43.865758!3d-16.738536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdb3a432fa15d9977!2zTG9jYW1hciBMb2Nhw6fDtWVz!5e0!3m2!1spt-BR!2sbr!4v1672244854474!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className={`${formStatus}`}>
                        <h2 className="mb-3" >Faça um orçamento:</h2>
                        <form onSubmit={submitFormOrcamento} method="POST">
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="col-span-2">
                                    <label htmlFor="nome-cliente">Nome:</label>
                                    <input type="text" className="main-input" placeholder="Digite seu nome" name="nome" required></input>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="telefone-cliente">Telefone:</label>
                                    <input type="tel" maxLength="15" className="main-input" placeholder="(00) 9 0000-0000" name="telefone" onKeyUp={handlePhone} required></input>
                                </div>
                                <div className="col-span-2 lg:col-span-4">
                                    <label htmlFor="email-cliente">Email:</label>
                                    <input type="email" className="main-input" placeholder="atendimento@locamarlocacoes.com.br" name="email" required></input>
                                </div>
                                <div className="col-span-2 lg:col-span-4">
                                    <label htmlFor="orcamento-cliente">Orçamento:</label>
                                    <textarea type="email" className="main-input" name="orcamento" required></textarea>
                                </div>
                                <input type="hidden" name="_next" value="http://localhost:3000/"></input>
                                <input type="hidden" name="_captcha" value="false"></input>
                                <button type="submit" className={`${buttonStatus} form-button col-start-2 lg:col-start-4`}>Enviar</button>
                                <button type="submit" disabled className={`${buttonLoading} form-button bg-gray-600 col-start-2 lg:col-start-4`}><FontAwesomeIcon className="motion-safe:animate-spin" icon={faSpinner}/></button>
                            </div>
                        </form>
                    </div>
                    <div className={`${formRespostaStatus} bg-gray-300 px-3 py-4 sm:p-0 rounded-xl sm:relative`}>
                        <div className="sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 min-w-[75%]">
                            <h2 className="mb-3" >Recebemos o seu orçamento <FontAwesomeIcon icon={faCheck} /></h2>
                            <p>Nossa equipe entrará em contato com você em breve!</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HomePageMain