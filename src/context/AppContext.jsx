import { createContext, useEffect, useState } from "react";
import {api} from "../services/api"


export const AppContext = createContext({}) 

export const AppContextProvider = (props) =>{
    const{ children } = props

    const [criador] = useState('Alison')

    const [tarefas, setTarefas ] = useState([])
    
    const carregarTarefas = async () =>{
        try{ const {data} = await api.get('./tarefas')

        setTarefas ( () => data)
            
        } catch(erro){
            console.log("Erro ao carregar as tarefas da API:", erro)
        }
    }
    const adicionarTarefa = async (nomeTarefa) => {
         try { 
            const {data} = await api.post("./tarefas", {nome: nomeTarefa})
            setTarefas(estadoAtual => [
                ...estadoAtual,
                data])
            } catch (erro) {
                console.error("Erro ao adicionar tarefa na API:", erro);
            }     
            // {
            //     id: estadoAtual.length > 0 ? Math.max(...estadoAtual.map(t => t.id)) + 1 : 1,
            //     nome: nomeTarefa
            // }
        ;
};
    const removerTarefa = async (idTarefa) => {
        await api.delete(`./tarefas/${idTarefa}`)

        setTarefas(estadoAtual => estadoAtual.filter(tarefa => tarefa.id !== idTarefa));
};
    const editarTarefa = async (idTarefa, nomeTarefa) =>{
        const {data: tarefaAtualizada} = await api.put(`./tarefas/${idTarefa}`, {
            nome: nomeTarefa
        })
        setTarefas(estadoAtual => estadoAtual.map(tarefa => 
            tarefa.id  === idTarefa ? {...tarefa, nome: tarefaAtualizada.nome} : tarefa
        ) )

    }

    useEffect(()=>{
      carregarTarefas()
    },[])

    return(
        <AppContext.Provider value={{
            criador,
            tarefas,
            adicionarTarefa,
            removerTarefa,
            editarTarefa,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext