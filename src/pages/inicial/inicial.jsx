import { FormCriarTarefas } from "../../components/FormcriarTarefas"
import {ListaTarefas} from "../../components/ListaTarefas/ListaTarefas"

import style from "./inicial.module.css"

const Inicial = () => { 
    return(
        <div className={style.Inicial}>
          <FormCriarTarefas />
          <ListaTarefas/>
        </div>      
    )
}

export {Inicial}