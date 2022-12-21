import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

function HomePage() {
    const abrirDropDown = () => {
        const lista = document.getElementById('drop-down-menu')
        console.log(lista)
    }

    return (
        <section className="bg-locamar-primary shadow-sm shadow-gray-500">  
            <div className="py-3 flex justify-around items-center">
                <img src="/images/locamar-logo.png" alt="Logo Locamar" className="max-h-20 md:max-h-40"/>
                <nav>
                    <ul>
                        <li onClick={abrirDropDown}><FontAwesomeIcon className="md:hidden cursor-pointer scale-x-150" icon={faBars} />
                            <ul className="hidden md:flex flex-col sm:flex-row gap-2" id='drop-down-menu'>
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
  
export default HomePage