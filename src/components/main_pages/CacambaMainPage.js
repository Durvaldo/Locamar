import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { fa7, faArrowRight, faArrowsSpin, faBrazilianRealSign, faDumpster, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CacambaMainPage = ({className}) => {

    return (
        <main className={`${className} flex flex-col items-center`}>
            <section className="container flex flex-col lg:flex-row lg:justify-around underline ">
                <h1>Aluguel de cacamba</h1>
            </section>
            <section className="w-full flex justify-center">
                <div className="container flex flex-col lg:flex-row justify-between items-center gap-5">
                    <div className="flex flex-col gap-3 max-w-2xl xl:max-w-3xl">
                        <h2>Precisando fazer descarte de entulho em Montes Claros? Conte com a Locamar Locações!</h2>
                        <p className="text-justify">A Locamar Locações é especializada em Aluguel de Caçambas de Entulho, para coleta de resíduos de construções e demolições.</p>
                        <p className="text-justify">Somos uma empresa séria, comprometida com nossos clientes e com o meio ambiente. Todos os materiais recebem destinação correta, em locais autorizados e licenciados. Fornecemos a documentação comprobatória de destinação.</p>
                        <p className="text-justify">Somos uma empresa séria, comprometida com nossos clientes e com o meio ambiente. Todos os materiais recebem destinação correta, em locais autorizados e licenciados. Fornecemos a documentação comprobatória de destinação.</p>
                        <p className="text-justify">Trabalhamos com caçambas de 5m³, atendendo todas as regiões de Montes Claros.</p>
                    </div>
                    <div>
                        <img className="max-h-80 rounded-full" src="/images/cacamba/cacambas-novas.jpeg" alt="caçambas cheias" />
                    </div>
                </div>
            </section>
            <section className="w-full flex justify-center bg-gray-300 shadow-sm shadow-gray-400">
                <div className="container">
                    <div className="flex flex-col items-center gap-5">
                        <h1>Como Funciona</h1>
                        <div className="flex flex-col justify-items-stretch gap-y-7">
                            <div className="quadro-informacoes">
                                <span className="rounded-full px-2 py-3 scale-75 sm:scale-100 bg-locamar-primary text-5xl md:text-6xl">
                                    <FontAwesomeIcon className="fa-fw" icon={faDumpster}/>
                                </span>
                                <div>
                                    <h2>Nossas Caçambas</h2>
                                    <p>Nossas caçambas tem volume de 5 metros cúbicos, tendo capacidade para 7 toneladas de material.</p>
                                    <hr className="mt-2"/>
                                </div>
                            </div>
                            <div className="quadro-informacoes">
                                <span className="rounded-full px-2 pb-4 pt-3 scale-75 sm:scale-100 bg-locamar-primary text-5xl md:text-6xl">
                                    <FontAwesomeIcon className="fa-fw" icon={faCalendar}/>
                                    <FontAwesomeIcon className="fa-fw -ml-[60px] md:-ml-[75px]" transform="shrink-9 down-2" icon={fa7} inverse/>
                                </span>
                                <div>
                                    <h2>A Estadia</h2>
                                    <p>O tempo de duração da locação é de 7 dias corridos. Períodos maiores podem ser negociados.</p>
                                    <hr className="mt-2"/>
                                </div>
                            </div>
                            <div className="quadro-informacoes">
                                <span className="rounded-full px-2 py-3 scale-75 sm:scale-100 bg-locamar-primary text-5xl md:text-6xl">
                                    <FontAwesomeIcon className="fa-fw" icon={faBrazilianRealSign}/>
                                </span>
                                <div>
                                    <h2>Preço</h2>
                                    <p>O preço dependerá da localização da caçamba. Horários especiais também podem ser combinados.</p>
                                    <hr className="mt-2"/>
                                </div>
                            </div>
                            <div className="quadro-informacoes">
                                <span className="rounded-full px-2 py-3 scale-75 sm:scale-100 bg-locamar-primary text-5xl md:text-6xl">
                                    <FontAwesomeIcon className="fa-fw" icon={faArrowsSpin}/>
                                </span>
                                <div>
                                    <h2>Prorrogação, troca ou retirada</h2>
                                    <p>Ao final do prazo combinado, o cliente tem a opção de solicitar prorrogação do prazo, contratar a troca da caçamba ou confirmar a retirada da mesma.</p>
                                    <hr className="mt-2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="flex flex-col items-center">
                    <h1><FontAwesomeIcon className="scale-75" icon={faList} transform="down-1"/> Regras e Normas</h1>
                    <p className="text-blue-500 cursor-pointer mt-3 hover:text-blue-700">Veja mais regras <FontAwesomeIcon icon={faArrowRight} transform="down-1"/></p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-3">
                    <div>
                        <h2 className="text-center mb-2">Capacidade</h2>
                        <p className="text-justify">É proibido exceder a capacidade da caçamba — ultrapassar a borda, seja através de materiais grandes ou pela construção de “paredes” com o próprio material descartado. A função da lona de cobertura é exclusivamente conter a poeira e pequenas partículas durante o transporte e não suporta a contenção do entulho.</p>
                    </div>
                    <div>
                        <h2 className="text-center mb-2">Estacionamento</h2>
                        <p className="text-justify">A caçamba não poderá ser colocada em local de estacionamento proibido (apenas onde é permitido estacionar veículos). Não sendo permitida a colocação em calçadas, praças, faixa de pedestres, tampa de bueiros… Em zona azul, a autorização deverá ser providenciada pelo usuário — mais informações na MC Trans.</p>
                    </div>
                    <div>
                        <h2 className="text-center mb-2">Materiais</h2>
                        <p className="text-justify">O material colocado na caçamba é de responsabilidade do cliente Não serão permitidos materiais diferentes do combinado, veja abaixo os materiais que transportamos.</p>
                    </div>
                </div>
            </section>
            <section className="container">
                <article className="flex flex-col items-center">
                    <h1 className="text-center">Resíduos Que Recolhemos</h1>
                    <div className="my-6 grid grid-cols-3 gap-5 min-w-full text-center">
                        <div className="flex flex-col gap-2 items-center">
                            <img className="rounded-full md:rounded-xl" src="/images/cacamba/entulho.png" alt="" />
                            <h2>Entulho</h2>
                            <p className="hidden md:block">Concreto, Argamassa, alvenaria, cerâmicas, tijolos, blocos , paredes, pisos e terra.</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img className="rounded-full md:rounded-xl" src="/images/cacamba/gesso.png" alt="" />
                            <h2>Gesso</h2>
                            <p className="hidden md:block">Gesso em pó de construção civil.</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img className="rounded-full md:rounded-xl" src="/images/cacamba/drywall.png" alt="" />
                            <h2>Gesso Acartonado</h2>
                            <p className="hidden md:block">Placas de gesso acartonado ( DRYWALL).</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img className="rounded-full md:rounded-xl" src="/images/cacamba/madeira.png" alt="" />
                            <h2>Madeira</h2>
                            <p className="hidden md:block">Vigas, pontaletes, tábuas, madeirites, pisos laminados, serragem ou qualquer tipo de resíduo que sua constituição seja de madeira.</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img className="rounded-full md:rounded-xl" src="/images/cacamba/volumosos.png" alt="" />
                            <h2>Volumosos</h2>
                            <p className="hidden md:block">Papéis , plásticos, Metais. Ex: latas vazias, sacos de cimento, embalagens plásticas, caixas de papelão, etc..</p>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img className="rounded-full md:rounded-xl" src="/images/cacamba/jardinagem.png" alt="" />
                            <h2>Jardinagem</h2>
                            <p className="hidden md:block">Podas de árvore, folhas, galhos, grama.</p>
                        </div>
                    </div>
                    <h1 className="text-center">Resíduos Que Não Recolhemos</h1>
                    <div className="my-6 grid grid-cols-3 gap-5 min-w-full text-center">
                        <div className="flex flex-col gap-2 items-center">
                            <img className="rounded-full md:rounded-xl" src="/images/cacamba/lixo-domestico.png" alt="" />
                            <h2>Lixo Doméstico</h2>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img className="rounded-full md:rounded-xl" src="/images/cacamba/lixo-hospitalar.png" alt="" />
                            <h2>Lixo Hospitalar</h2>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img className="rounded-full md:rounded-xl" src="/images/cacamba/lixo-industrial.png" alt="" />
                            <h2>Lixo Industrial</h2>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <img className="rounded-full md:rounded-xl" src="/images/cacamba/produtos-quimicos.png" alt="" />
                            <h2>Produtos Químicos</h2>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default CacambaMainPage