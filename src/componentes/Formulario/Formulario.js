import {useState} from 'react'
import "./Formulario.css"
import Campo from "../Campo/CampoTexto.js";
import ListaOpciones from "../ListaOpciones/ListaOpciones.js";
import Boton from "../Boton/boton.js";

const Formulario =(props) => {

 const [nombre, actualizarNombre] = useState();   
 const [puesto, actualizarPuesto] = useState();   
 const [foto, actualizarFoto] = useState();
 const [equipo,actualizarEquipo] = useState();
const [titulo, actualizarTitulo] = useState();
const [color, actualizarColor] =useState();

const {registrarColaborador,crearEquipo} = props
 const manejarEnvio = (event) =>{
    event.preventDefault();
    let datosAEnviar ={
        nombre: nombre,
        puesto: puesto,
        foto: foto,
        equipo: equipo,
    }
    registrarColaborador(datosAEnviar)
 }

 const manejarNuevoEquipo = (e)=>{
    e.preventDefault()
    crearEquipo({titulo,colorPrimario: color})
 }
return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre" valor={nombre} actualizarValor={actualizarNombre}/>
            <Campo titulo="Puesto" placeholder="Ingresar Puesto" valor={puesto} actualizarValor={actualizarPuesto}/>
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto" valor={foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones valor ={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos}/>
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el Equipo</h2>
            <Campo titulo="Titulo" placeholder="Ingresar titulo" valor={titulo} actualizarValor={actualizarTitulo}/>
            <Campo titulo="color" placeholder="Ingresar Color en hexadecimal" valor={color} actualizarValor={actualizarColor} type="color"/>
            <Boton texto="Registrar Equipo"/>
        </form>
    </section>
}

export default Formulario;