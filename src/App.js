import './App.css';
import {useState} from 'react';

const Person = (props) =>{
  return(
    <>    
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>

  );
}

const App =() => {
  const name = 'Camilo';
  const isnameShowing = true;
  return (
    <div className="App">
      <h1>Hello {isnameShowing ? name:'someone'}</h1>
      {name ? (
        <> {/**react fragment
         * sirve pa poner varios divs (por decir una función en un mismo espacio)
         */}
          test
        </>
      ):(
        <>
          <h1>test</h1>  
          <h2>Theres no name</h2>      
        </>
      )}
      <Person />
      <Person 
        name={'Maria'} 
        lastName={'Torres'} 
        age={56}
      />
    </div>
  );
}

export default App;
