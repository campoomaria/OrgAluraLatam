import { useState } from 'react'
import "./Campo.css"

const Campo = (props) =>{
    const [valor,actualizarValor] = useState()
    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }
    const { type="text" } = props
    return <div className={`Campo Campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder = {props.placeholder}
        required 
        value = {props.valor}
        onChange={manejarCambio}
        type={type}
        />
    </div>
}

export default Campo

