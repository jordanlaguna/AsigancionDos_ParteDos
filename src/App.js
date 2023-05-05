import logo from './imagenes/publicidad.png'
import './App.css';
import ListaTitulos from './components/ListaTitulos';

function App() {
   
  return (
    <div className='App-tareas'>
      <div className='lista-tareas'>
        <h1>Lista de tareas</h1>
        <ListaTitulos/>
        <h2>
         Universidad Nacional de Costa Rica 
      </h2>
      </div>
    </div>

    
  );
}

export default App;