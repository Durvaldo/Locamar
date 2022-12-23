import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

const Header = () => {

    const [botaoStatus, setBotaoStatus] = useState('hidden');
    const abrirDropDown = () => {
        if(botaoStatus == 'hidden') {
            setBotaoStatus('flex')
        } else {
            setBotaoStatus('hidden')
        }
    }

    return (
        <section className="bg-locamar-primary shadow-sm shadow-gray-500">  
            <div className="py-3 flex justify-around items-center">
                <img src="/images/locamar-logo.png" alt="Logo Locamar" className="max-h-20 md:max-h-40"/>
                <nav>
                    <ul className="text-center">
                        <li onClick={abrirDropDown}><FontAwesomeIcon className="md:hidden cursor-pointer mb-4 scale-x-150" icon={faBars} />
                            <ul className={`${botaoStatus} md:flex flex-col md:flex-row gap-2`} id='drop-down-menu'>
                                <li className="locamar-tag">Inicio</li>
                                <li className="locamar-tag">Sobre nós</li>
                                <li className="locamar-tag">Nossos Serviços</li>
                                <li className="locamar-tag">Onde Estamos</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Header