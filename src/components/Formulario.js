import React, {useState} from "react";
import '../Styles/Formulario.css';
import {v4 as uuidv4} from 'uuid';

function Formulario(props) {
    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
         

    }

    const manejarEnvio = e => {
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4,
            texto: input,
            completada: false 
        }

        props.onSubmit(tareaNueva);
    }

    return(
        <form 
            className="Formulario"
            onSubmit={manejarEnvio}>
            <input
                className="tarea-input"
                type="text"
                placeholder="Escribe un titulo"
                name="texto"
                onChange={manejarCambio}
            />
            <button className="boton-agregar">
                Agregar Tarea
            </button>

        </form>
    )

}

export default Formulario;