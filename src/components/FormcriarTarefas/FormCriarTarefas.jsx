import { Botao } from "../Botao/Botao"
import { CampoTexto } from "../CampoTexto"

import style from './FormCriarTarefas.module.css'
const FormCriarTarefas = () => {
    return (
        <form className={style.FormCriarTarefas}>
           <CampoTexto />
           <Botao texto="Criar Tarefa" />
         </form> 
    )
}

export {FormCriarTarefas}