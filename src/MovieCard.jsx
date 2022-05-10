import React from "react";

//usar object destructuring para evitar colocar props. todo el timepo
const MovieCard = ({movie1}) => {
    return (
        <div className="movie">
            <div>
                <p>{movie1.Year}</p>
            </div>
            <div>
                <img
                    src={movie1.Poster !== 'N/A' ? movie1.Poster: 'http://via.placerholder.com/400'} alt={movie1.Title}
                />
            </div>
            <div>
                <span>{movie1.Type}</span>
                <h3>{movie1.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;