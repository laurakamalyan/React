import React from "react";

function Movie({movie}) {
    const imagePath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const backdropPath = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
    return (
        <div>
            <a href={backdropPath} target="_blank">
                <img src={imagePath} alt={movie.title} />
            </a>
            <h4> {movie.original_title} </h4>
        </div>
    )
}

export default Movie;