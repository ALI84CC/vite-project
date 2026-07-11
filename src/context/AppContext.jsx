import { createContext, useState } from "react";

export const AppContext = createContext({}) 

export const AppContextProvider = (props) =>{
    const{ children } = props

    const [criador] = useState('Alison')

    const [tarefas, setTarefas ] = useState( [
        {id: 1 , nome:'Item 1'},
        {id: 2 , nome:'Item 2'},
        {id: 3 , nome:'Item 3'}
    ]
    ) 

    const adicionarTarefa = (nomeTarefa) => {
        setTarefas(estadoAtual => [
            ...estadoAtual,
            {
                id: estadoAtual.length > 0 ? Math.max(...estadoAtual.map(t => t.id)) + 1 : 1,
                nome: nomeTarefa
            }
        ]);
};
    const removerTarefa = (idTarefa) => {
        setTarefas(estadoAtual => estadoAtual.filter(tarefa => tarefa.id !== idTarefa));
};
    const editarTarefa = (idTarefa, novoNome) =>{
        setTarefas(estadoAtual => estadoAtual.map(tarefa => 
            tarefa.id  === idTarefa ? {...tarefa, nome: novoNome} : tarefa
        ) )

    }


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