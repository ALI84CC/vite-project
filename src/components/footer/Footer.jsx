import style from './Footer.module.css'

const Footer = (props) => {
    const { nomeUsuario} = props

    const anoAtual = new Date().getFullYear()
  return (
    <div className={style.Footer}>
     React básico - {anoAtual} - {nomeUsuario}
    </div>
  )
}   
export {Footer}