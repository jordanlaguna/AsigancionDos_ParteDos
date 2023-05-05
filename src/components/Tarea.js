import React from "react";
import '../Styles/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea ({id, texto, completada, completarTitulo, eliminar}){
    return(
        <div className={ completada ? 'tarea-contenedor completada' : 'tarea-contenedor' }>
            <div 
                className="tarea" 
                onClick={() => completarTitulo(id)}>
                {texto}

            </div>

            <div 
                className="icoms" 
                onClick={() =>  eliminar(id)}>
                <AiOutlineCloseCircle className="icono"/>

            </div>

        </div>
    )
}

export default Tarea;