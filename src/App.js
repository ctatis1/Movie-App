import './App.css';
import {useState, useEffect} from 'react';

const App =() => {
  //concepto de array destructuring
  //'use' hace referencia a los Hooks
  const [counter, setCounter] = useState(0);

  //este hook hace efecto apenas se actualice la página
  //SOLO MODIFICAR LA VAR CON EL MÉTODO SET
  // [] es el dependency array con esta hace que el hook solo se ejecute una vez al inicio del render 
  useEffect(()=>{
    alert('Contador en '+ counter);
  }, [counter]);

  return (
    <div className="App">
      <button onClick={()=> setCounter(prevCount=> prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=> setCounter(prevCount=> prevCount +1)}>+</button>
    </div>
  );
}

export default App;
