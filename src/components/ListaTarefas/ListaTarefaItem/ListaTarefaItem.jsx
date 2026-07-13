import { Botao, TIPO_BOTAO } from "../../Botao"
import  {useAppContext}  from '../../../hooks'

import style from './listaTarefaItem.module.css'
import { useState } from "react"

const ListaTarefaItem =(props) =>{

const { id, nome} = props

const {removerTarefa, editarTarefa } = useAppContext()   
const [estaEditando, setEstaEditando] = useState(false)
const [textoDigitado, setTextoDigitado] = useState(nome)

const onBlurTarefa = (event) =>{

    const nomeTarefa = event.currentTarget.value

    editarTarefa(id,nomeTarefa)

    setEstaEditando(false)
}

    return(
         <li className={style.ListaTarefaItem}>
             {estaEditando ? (
                // Se estiver editando, mostra um input para o usuário digitar
                <input 
                    type="text" 
                    value={textoDigitado} 
                    onChange={(e) => setTextoDigitado(e.target.value)}
                    onBlur= {onBlurTarefa} // Salva se clicar fora do input [4]
                    onKeyDown={(e) => e.key === 'Enter'} // Salva ao apertar Enter
                    autoFocus
                />
            ) : (
                // Se não estiver editando, mostra o nome clicável
                <span 
                    onClick={() => setEstaEditando(true)} 
                    style={{ cursor: 'pointer' }}
                    title="Clique para editar"
                >
                    {nome}
                </span>
            )}
    
            <Botao 
                texto='-' 
                tipo={TIPO_BOTAO.SECONDARIO} 
                onClick = {() => removerTarefa(id)}
            />
         </li>
    )
}

export {ListaTarefaItem}