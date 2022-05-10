import React from "react";
import { useEffect, useState } from "react";
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
import './App.css';
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

    const [movies, setMovies] = useState([]);
    //cargar los datos de la API solo una vez cuando cargue la página
    useEffect(()=>{
        searchMovies('Batman');
    }, []);
    //se quiere buscar title dentro de searchMovies
    const searchMovies = async (title) =>{
        //hará el llamado a la API
        //en fetch se usa un template string que hará la comparación entre todos los datos de la API y title
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();  
        //data devuelve varios objetos pero solo se necesita Search
        //console.log(data.Search) 
        //definir todas las movies mediante el data.Search que retorna todas las movies
        setMovies(data.Search)
    }
    

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

            {/**si el array de movies está vacío significa que no encontró ninguna movie de la búsqueda */}
            {/* A ternary operator. It is a conditional operator that takes three operands. The first
            operand is a comparison argument, the second one is the result upon a true comparison,
    and the third one is the result upon a false comparison. */}
            {
               movies?.length > 0 
               ? (
                    <div className="container">
                        {/* Passing the movie1 object as a prop to the MovieCard component. */}
                        {movies.map((movie)=>(
                            <MovieCard movie={movie} />
                        ))}
                    </div>
               ):(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
               )
            }

            
        </div>
    );
}

export default App;