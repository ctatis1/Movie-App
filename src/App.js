import React from "react";
import { useEffect } from "react";

//API key: cb4d33e7

const API_URL = 'http://www.omdbapi.com?apikey=cb4d33e7';

const App = () => {
    //se quiere buscar title dentro de searchMovies
    const searchMovies = async (title) =>{
        //hará el llamado a la API
        //en fetch se usa un template string que hará la comparación entre todos los datos de la API y title
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();  
        //data devuelve varios objetos pero solo se necesita Search
        console.log(data.Search) 
    }
    //cargar los datos de la API solo una vez cuando cargue la página
    useEffect(()=>{
        searchMovies('Batman');
    }, []);

    return(
        <h1>App</h1>
    );
}

export default App;