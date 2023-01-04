import { useState } from "react"
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MainForm = () => {

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
        })
        .catch(error => console.log(error))
    }

    return (
        <>                    
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
            <div className={`${formStatus ? '' : 'hidden'} bg-gray-300 px-3 py-4 sm:p-0 rounded-xl sm:relative`}>
                <div className="sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 min-w-[75%]">
                    <h2 className="mb-3" >Recebemos o seu orçamento <FontAwesomeIcon icon={faCheck} /></h2>
                    <p>Nossa equipe entrará em contato com você em breve!</p>
                </div>
            </div>
        </>
    )
}

export default MainForm
