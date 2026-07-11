import { Botao, TIPO_BOTAO } from "../../Botao"
import  {useAppContext}  from '../../../hooks'


import style from './listaTarefaItem.module.css'

const ListaTarefaItem = (props) =>{
    const {id, nome} = props

    const {removerTarefa} = useAppContext()
    return(
         <li className={style.ListaTarefaItem}>
            {nome}
            <Botao 
                texto='-' 
                tipo={TIPO_BOTAO.SECONDARIO} 
                onClick = {() => removerTarefa(id)}
            />
         </li>
    )
}

export {ListaTarefaItem}