import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

const Header = ({className}) => {

    const [botaoStatus, setBotaoStatus] = useState('hidden');
    const abrirDropDown = () => {
        if(botaoStatus == 'hidden') {
            setBotaoStatus('flex')
        } else {
            setBotaoStatus('hidden')
        }
    }
    return (
        <header className={className}>  
            <div className="py-3 flex justify-around items-center bg-locamar-primary shadow-sm shadow-gray-500">
                <img src="/images/locamar-logo.png" alt="Logo Locamar" className="max-h-20 md:max-h-40"/>
                <nav>
                    <ul className="text-center">
                        <li onClick={abrirDropDown}><FontAwesomeIcon className="md:hidden cursor-pointer mb-4 scale-x-150" icon={faBars} />
                        </li>
                    </ul>
                    <ul className={`${botaoStatus} md:flex flex-col md:flex-row gap-2`} id='drop-down-menu'>
                        <a href="#" className="locamar-tag">Inicio</a>
                        <a href="#sobre-nos" className="locamar-tag">Sobre nós</a>
                        <a href="#nosso-servico" className="locamar-tag">Nossos Serviços</a>
                        <a href="#onde-estamos" className="locamar-tag">Onde Estamos</a>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header