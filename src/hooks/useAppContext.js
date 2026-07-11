import { useContext } from "react"

import { AppContext } from "../context"

const useAppContext = ( ) =>{
    const contexto = useContext(AppContext)

    return contexto
}

export {useAppContext}