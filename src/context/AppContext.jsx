import { createContext, useEffect, useState } from "react";
import {api} from "../services"


export const AppContext = createContext({}) 

export const AppContextProvider = (props) =>{
    const{ children } = props
    const [criador] = useState('Alison')
    const [tarefas, setTarefas ] = useState([])

    const [adicionandoTarefa, setAdicionandoTarefa] = useState(false);
    const [carregandoTarefas, setCarregandoTarefas] = useState(false);
    const [excluindoTarefaId, setExcluindoTarefaId] = useState(null);
    const [editandoTarefaId, setEditandoTarefaId] = useState(null);

      useEffect(()=>{
      const carregarTarefas = async () =>{
        setCarregandoTarefas(true);
        try{ const {data} = await api.get('./tarefas')

        setTarefas ( () => data)
            
        } catch(erro){
            console.log("Erro ao carregar as tarefas da API:", erro)
        } finally{
            setCarregandoTarefas(false)
        }
    }

    carregarTarefas()
    },[])
    
    const adicionarTarefa = async (idTarefa,nomeTarefa) => {
        setAdicionandoTarefa(idTarefa)
         try { 
            const {data} = await api.post("./tarefas", {nome: nomeTarefa})

            setTarefas(estadoAtual => [
                ...estadoAtual,
                data])
            } catch (erro) {
                console.error("Erro ao adicionar tarefa na API:", erro);
            } finally {
                 setAdicionandoTarefa(false); // Desativa o loading de adição
            }    
            // {
            //     id: estadoAtual.length > 0 ? Math.max(...estadoAtual.map(t => t.id)) + 1 : 1,
            //     nome: nomeTarefa
            // }
            setAdicionandoTarefa(null)
    };
    const removerTarefa = async (idTarefa) => {
        setExcluindoTarefaId(idTarefa)
      try {
         await api.delete(`./tarefas/${idTarefa}`);
         setTarefas(estadoatual => estadoatual.filter(tarefa => tarefa.id !== idTarefa));
      } catch (erro) {
        console.error("erro ao remover tarefa:", erro);
        } finally {
        setExcluindoTarefaId(null); // Limpa o loading
        }
      };
  
    const editarTarefa = async (idTarefa, nomeTarefa) =>{
        setEditandoTarefaId(true)
        try{
            const {data: tarefaAtualizada} = await api.put(`./tarefas/${idTarefa}`, { nome: nomeTarefa})
            setTarefas(estadoAtual => estadoAtual.map(tarefa => 
                tarefa.id  === idTarefa ? {...tarefa, nome: tarefaAtualizada.nome} : tarefa
            ) ) }
        catch(erro) {
            console.error("erro ao editar tarefa:", erro);
        } finally{
             setEditandoTarefaId(null);
        }
    }

    return(
        <AppContext.Provider value={{
            criador,
            tarefas,
            carregandoTarefas,
            adicionandoTarefa,
            excluindoTarefaId,
            editandoTarefaId,
            adicionarTarefa,
            removerTarefa,
            editarTarefa,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext