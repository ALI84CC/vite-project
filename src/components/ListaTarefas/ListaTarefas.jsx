import { ListaTarefaItem } from "./ListaTarefaItem"

import style from "./ListaTarefas.module.css"

const ListaTarefas = (props) => {

   const { tarefas} = props

    return(
        <ul className={style.ListaTarefas}>
           {tarefas.map(item => <ListaTarefaItem key={item.id} nome={item.nome}/> )} 
           
        </ul>
    )
}

export {ListaTarefas} 