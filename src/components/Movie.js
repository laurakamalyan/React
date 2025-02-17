import React from "react";

function Movie({movie}) {
    const imagePath = `${process.env.REACT_APP_BASE_PATH}/${movie.poster_path}`;
    const backdropPath = `${process.env.REACT_APP_BASE_PATH}/${movie.backdrop_path}`;
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