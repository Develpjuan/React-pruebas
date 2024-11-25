import styles from "../styles/mensaje.module.css"

export default function Mensaje({ mensaje }) {
    console.log(styles)
    return <h1 className={ styles.mensaje }>{ mensaje }</h1>
}