import './App.css'
import {Cabecalho, Conteudo, Footer} from './components'

function App() {

  return (
    <>  
      <Cabecalho nomeUsuario="Alison" />
      <Conteudo>
        <p>Este é o conteúdo da página.</p>
      </Conteudo>
      <Footer nomeUsuario="Alison" />
    </>
 )   
 }
export default App
