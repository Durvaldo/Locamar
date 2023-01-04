import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { fa7, faArrowsSpin, faBrazilianRealSign, faDumpster } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CacambaMainPage = ({className}) => {

    return (
        <main className={`${className} flex flex-col items-center`}>
            <section className="container flex flex-col lg:flex-row lg:justify-around">
                <h1>Aluguel de cacamba</h1>
            </section>
            <section className="bg-gray-300 w-full flex justify-center">
                <div className="container flex flex-col lg:flex-row justify-between items-center gap-5">
                    <div className="flex flex-col gap-5 max-w-3xl">
                        <h2>Precisando fazer descarte de entulho em Montes Claros? Conte com a Locamar Locações!</h2>
                        <p>A Locamar Locações é especializada em Aluguel de Caçambas de Entulho, para coleta de resíduos de construções e demolições.</p>
                        <p>Somos uma empresa séria, comprometida com nossos clientes e com o meio ambiente. Todos os materiais recebem destinação correta, em locais autorizados e licenciados. Fornecemos a documentação comprobatória de destinação.</p>
                        <p>Somos uma empresa séria, comprometida com nossos clientes e com o meio ambiente. Todos os materiais recebem destinação correta, em locais autorizados e licenciados. Fornecemos a documentação comprobatória de destinação.</p>
                        <p>Trabalhamos com caçambas de 5m³, atendendo todas as regiões de Montes Claros.</p>
                    </div>
                    <div>
                        <img className="max-h-80 rounded-full" src="/images/cacamba/cacambas-novas.jpeg" alt="caçambas cheias" />
                    </div>
                </div>
            </section>
            <section className="hidden container">
                <h1>Como Funciona</h1>
                <div>
                    <FontAwesomeIcon icon={faDumpster}/>
                    <h2>Nossas Caçambas</h2>
                    <p>Nossas caçambas possuem volume de 6 metros cúbicos, tendo capacidade para 7 toneladas de material.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCalendar}/>
                    <FontAwesomeIcon icon={fa7}/>
                    <h2>A Estadia</h2>
                    <p>O tempo de duração da locação é de 7 dias corridos. Períodos maiores podem ser negociados.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faBrazilianRealSign}/>
                    <h2>Preço</h2>
                    <p>O preço dependerá da localização da caçamba. Horários especiais também podem ser combinados.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faArrowsSpin}/>
                    <h2>Prorrogação, troca ou retirada</h2>
                    <p>Ao final do prazo combinado, o cliente tem a opção de solicitar prorrogação do prazo, contratar a troca da caçamba ou confirmar a retirada da mesma.</p>
                </div>
            </section>
            <section className="hidden container">
                <h1>Regras e Normas</h1>
                <div>
                    <h2>Capacidade</h2>
                    <p>É proibido exceder a capacidade da caçamba — ultrapassar a borda, seja através de materiais grandes ou pela construção de “paredes” com o próprio material descartado. A função da lona de cobertura é exclusivamente conter a poeira e pequenas partículas durante o transporte e não suporta a contenção do entulho.</p>
                </div>
                <div>
                    <h2>Estacionamento</h2>
                    <p>A caçamba não poderá ser colocada em local de estacionamento proibido (apenas onde é permitido estacionar veículos). Não sendo permitida a colocação em calçadas, praças, faixa de pedestres, tampa de bueiros… Em zona azul, a autorização deverá ser providenciada pelo usuário — mais informações na MC Trans.</p>
                </div>
                <div>
                    <h2>Materiais</h2>
                    <p>O material colocado na caçamba é de responsabilidade do cliente</p>
                    <p>Não serão permitidos materiais diferentes do combinado, veja abaixo os materiais que transportamos.</p>
                </div>
            </section>
            <section className="hidden container">
                <h1>Resíduos Que Recolhemos</h1>
                <div>
                    <img src="/images/cacamba/entulho.png" alt="" />
                    <h2>Entulho</h2>
                    <p>Concreto, Argamassa, alvenaria, cerâmicas, tijolos, blocos , paredes, pisos e terra.</p>
                </div>
                <div>
                    <img src="/images/cacamba/gesso.png" alt="" />
                    <h2>Gesso</h2>
                    <p>Gesso em pó de construção civil.</p>
                </div>
                <div>
                    <img src="/images/cacamba/drywall.png" alt="" />
                    <h2>Gesso Acartonado</h2>
                    <p>Placas de gesso acartonado ( DRYWALL).</p>
                </div>
                <div>
                    <img src="/images/cacamba/madeira.png" alt="" />
                    <h2>Madeira</h2>
                    <p>Madeiras de construção civil como vigas, pontaletes, tábuas, madeirites, pisos laminados, serragem ou qualquer tipo de resíduo que sua constituição seja de madeira.</p>
                </div>
                <div>
                    <img src="/images/cacamba/volumosos.png" alt="" />
                    <h2>Volumosos</h2>
                    <p>Papéis , plásticos, Metais. Ex: latas vazias, sacos de cimento, embalagens plásticas, caixas de papelão, etc..</p>
                </div>
                <div>
                    <img src="/images/cacamba/jardinagem.png" alt="" />
                    <h2>Jardinagem</h2>
                    <p>Podas de árvore, folhas, galhos, grama.</p>
                </div>
                <h1>Resíduos Que Não Recolhemos</h1>
                <div>
                    <img src="/images/cacamba/lixo-domestico.png" alt="" />
                    <h2>Lixo Doméstico</h2>
                </div>
                <div>
                    <img src="/images/cacamba/lixo-hospitalar.png" alt="" />
                    <h2>Lixo Hospitalar</h2>
                </div>
                <div>
                    <img src="/images/cacamba/lixo-industrial.png" alt="" />
                    <h2>Lixo Industrial</h2>
                </div>
                <div>
                    <img src="/images/cacamba/produtos-quimicos.png" alt="" />
                    <h2>Produtos Químicos</h2>
                </div>
                <p>Formulario?</p>
            </section>
        </main>
    );
}

export default CacambaMainPage