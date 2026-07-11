import { useState } from "react"
import { Botao, CampoTexto } from "../../components"

import { useAppContext } from '../../hooks/useAppContext'
import style from './FormCriarTarefas.module.css'

const FormCriarTarefas = () => {

  const {adicionarTarefa} = useAppContext()

  const [nomeTarefa, setNomeTarefa] = useState ('valor Padrão')  
 
  const onChangeNomeTarefa = (event) =>{
    setNomeTarefa(event.currentTarget.value)
  }

  const submeterFormulario = (event) =>{
    event.preventDefault()

    if(!nomeTarefa){
        return
    }

    adicionarTarefa(nomeTarefa)
    setNomeTarefa('')
  }

    return (
        <form className={style.FormCriarTarefas} 
              onSubmit={submeterFormulario}>
           <CampoTexto 
            value={nomeTarefa}
            onChange={onChangeNomeTarefa} 
           />
           <Botao texto="+" />
         </form> 
    )
}

export {FormCriarTarefas}