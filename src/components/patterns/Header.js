import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

const Header = ({className}) => {

    const [botaoStatus, setBotaoStatus] = useState('hidden lg:block');
    const abrirDropDown = () => {
        if(botaoStatus == 'hidden lg:block') {
            setBotaoStatus('lg:block')
        } else {
            setBotaoStatus('hidden lg:block')
        }
    }
    const fecharDropDown = () => {
        setBotaoStatus('hidden lg:block')
    }
    return (
        <header className={className}>  
            <div className="px-3 mb-5 lg:mb-0 flex justify-between lg:justify-around items-center bg-locamar-primary shadow-sm shadow-gray-500 max-h-[70px]">
                <div className="text-locamar-primary block lg:hidden"></div>
                <img src="/images/locamar-logo.png" alt="Logo Locamar" className="max-h-[100px] mt-[48px]"/>
                <nav className="relative pr-5 lg:px-0 lg:w-fit">
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