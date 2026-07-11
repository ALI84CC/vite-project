import { Outlet } from 'react-router-dom'
import {Cabecalho, Conteudo, Footer} from '../../components'
import { useAppContext } from '../../hooks/useAppContext'


const LayoutPadrao = () =>{
   const {criador} = useAppContext()
    return(
        <>
        <Cabecalho nomeUsuario="Alison" />
          <Conteudo>
            <Outlet />
          </Conteudo>
          <Footer criador={criador} />
        </>
    )
}

export {LayoutPadrao}