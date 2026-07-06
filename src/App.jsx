import './App.css'
import {Cabecalho, Conteudo, Footer} from './components'
import { Inicial } from './pages/inicial/inicial.jsx'

function App() {

  return (
    <>  
      <Cabecalho nomeUsuario="Alison" />
      <Conteudo>
        <Inicial />
      </Conteudo>
      <Footer nomeUsuario="Alison" />
    </>
 )   
 }
export default App
