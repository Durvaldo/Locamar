import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function MaisRegras() {
    
    const [formVisivel, setFormVisivel] = React.useState(false)

    return (
        <div className="relative">
            <p className="text-blue-500 cursor-pointer mt-3 hover:text-blue-700 text-center" onClick={() => setFormVisivel(true)}>Veja mais regras <FontAwesomeIcon icon={faArrowRight} transform="down-1"/></p>
            {formVisivel 
                ? (<div className="fixed top-0 left-0 right-0 bg-[#1216197A] w-screen h-screen flex flex-col justify-center items-center backdrop-blur">
                        <div className="max-w-3xl bg-locamar-white relative py-4 px-8 rounded-xl">
                            <div className="absolute bg-red-500 font-bold py-[0.1rem] rounded-full px-2 cursor-pointer left-[90%]" onClick={() => setFormVisivel(false)}>X</div>
                            <h1 className="text-center mb-3">Regras e Normas</h1>
                            <ul className="flex flex-col gap-3">
                                <li>
                                    Havendo necessidade de troca, comunique com antecedência para que possamos organizar a substituição da caçamba em tempo hábil.
                                </li>
                                <li>
                                    O tempo máximo de permanência da caçamba no local são de 7 dias corridos, após esse período será cobrado multa diária de 20% do valor da coleta.
                                </li>
                                <li>
                                    O cliente é responsável pela integridade da caçamba, furto ou extravio, além de acidentes ou danos terceiros, causados devido sua utilização ou localização.
                                </li>
                                <li>
                                    É proibido atear fogo dentro da caçamba, caso ocorra será responsabilidade do cliente a reforma da pintura ou substituição da mesma.
                                </li>
                                <li>
                                    É proibido misturar lixo ao entulho, sem que tenha sido previamente combinado.
                                </li>
                                <li>
                                    É proibido mudar a posição original da caçamba.
                                </li>
                                <li>
                                    A falta de pagamento acarretará na devolução do entulho.
                                </li>
                                <li>
                                    NÃO ULTRAPASSAR O LIMITE DA CAÇAMBA. Devido risco de trabsbordamento e acidentes envolvendo terceiros, não serão transportados entulgos acima do limite estupulado da caçamba. Além de atender a legislação vigente, visa assegurara a segurança de todos.
                                </li>
                            </ul>
                            <h1 className="mt-5 text-center">Falta terminar de arrumar o modal</h1>
                        </div>
                    </div>
                ):null
            }
        </div>
    )
} 