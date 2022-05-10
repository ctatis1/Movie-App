import React from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';

//API key: cb4d33e7

const API_URL = 'http://www.omdbapi.com?apikey=cb4d33e7';

//movie de prueba
const movie1 = {
    "Title": "The Batman",
    "Year": "2022",
    "imdbID": "tt1877830",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
};

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
        <div className="app">
            <h1>Movies</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    //solo aparece Superman y no deja modificarlo pa eso está el onChange
                    value='Superman'
                    onChange={()=>{}}
                />
                <img 
                    src={SearchIcon}
                    alt='Search'
                    //el icono funciona también como botón por eso se debe coloca un onClick
                    onClick={() => {}}
                />
            </div>

            <div className="container">
            </div>
        </div>
    );
}

export default App;