import { Outlet } from 'react-router-dom'
import {Cabecalho, Conteudo, Footer} from '../../components'
import { useAppContext } from '../../hooks'



const LayoutPadrao = () =>{
   const {criador} = useAppContext()
    return(
        <>
        <Cabecalho nomeUsuario={criador} />
          <Conteudo>
            <Outlet />
          </Conteudo>
          <Footer criador={criador} />
        </>
    )
}

export {LayoutPadrao}