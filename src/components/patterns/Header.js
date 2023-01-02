import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

const Header = ({className}) => {

    const [botaoStatus, setBotaoStatus] = useState('hidden');
    const abrirDropDown = () => {
        if(botaoStatus == 'hidden') {
            setBotaoStatus('')
        } else {
            setBotaoStatus('hidden')
        }
    }
    const fecharDropDown = () => {
        setBotaoStatus('hidden')
    }
    return (
        <header className={className}>  
            <div className="p-3 flex justify-around items-center bg-locamar-primary shadow-sm shadow-gray-500">
                <img src="/images/locamar-logo.png" alt="Logo Locamar" className="max-h-20 lg:max-h-40"/>
                <nav className="relative px-20 lg:px-0 lg:w-fit">
                    <ul className="text-center">
                        <li onClick={abrirDropDown}><FontAwesomeIcon className="lg:hidden cursor-pointer scale-x-150" icon={faBars} />
                        </li>
                    </ul>
                    <ul className={`${botaoStatus} nav-dropdown`} onClick={fecharDropDown}>
                        <a href="#" className="nav-itens">Inicio</a>
                        <a href="#sobre-nos" className="nav-itens">Sobre nós</a>
                        <a href="#nosso-servico" className="nav-itens">Nossos Serviços</a>
                        <a href="#onde-estamos" className="nav-itens">Onde Estamos</a>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header