import { useState } from "react"

import "./MiOrg.css"
const MiOrg = (props) =>{
    // Estado - usamos hooks
    //useState un tipo de hooks
    // usar useState() 
    // const [nombreVariable, funcionActualiza] = useState(valorinicial)

    // const [mostrar,actualizarMostrar] = useState(true)
    // const manejarClick = () => { 
    //     actualizarMostrar(!mostrar)
    // }


    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
        
    </section>
}

export default MiOrg
