import { Link } from 'react-router-dom'
import style from './cabecalho.module.css'


const Cabecalho = () => {
    return (
    <div className={style.Cabecalho}>
      <Link to='/'>
      <h1>
        <span>ToDo</span>
        Lista
      </h1>
      </Link>
      <Link to='/sobre-nos'>Sobre Nós</Link>
    </div>
  )
}

export {Cabecalho}