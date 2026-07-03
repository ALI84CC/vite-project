import style from './Footer.module.css'

const Footer = (props) => {
    const { nomeUsuario} = props
  return (
    <div className={style.Footer}>
     React básico - 2026 - {nomeUsuario}
    </div>
  )
}   
export {Footer}