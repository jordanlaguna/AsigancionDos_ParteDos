import React, {useState} from "react";
import Formulario from "./Formulario";
import '../Styles/ListaTitulos.css'
import Tarea from "./Tarea";

function ListaTitulos(){
    const [tareas, setTareas] = useState([]);

    const agregarTitulo = tarea => {
        if(tarea.texto.trim()){ /*Analiza si la caena de texto esta vacia*/ 
            tarea.texto = tarea.texto.trim(); /*quita estapacios innecesarios*/ 
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }
    const eliminar = id =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }
    return(
        <>
            <Formulario onSubmit={agregarTitulo} />
            <div className="lista-contenedor">
                {
                    tareas.map((tarea) => 
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminar ={eliminar}

                        />
                    )
                }

            </div>
        </>
    )
}

export default ListaTitulos;