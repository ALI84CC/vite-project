import { Outlet } from 'react-router-dom'
import {Cabecalho, Conteudo, Footer} from '../../components'


const LayoutPadrao = () =>{
    return(
        <>
        <Cabecalho nomeUsuario="Alison" />
          <Conteudo>
            <Outlet />
          </Conteudo>
          <Footer nomeUsuario="Alison" />
        </>
    )
}

export {LayoutPadrao}