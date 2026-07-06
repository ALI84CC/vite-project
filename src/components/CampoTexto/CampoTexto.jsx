import style from './CampoTexto.module.css'
const CampoTexto = (props) => {
    return (
        <input 
            type="text" 
            {...props} 
            className={style.campoTexto} 
        />
    )
}

export {CampoTexto}