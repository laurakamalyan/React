import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import Movie from "./components/Movie";

function App() {
    const API_KEY = '7620a7d50441d1251d05be7d17f26294';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const [movies, setMovies] = useState([]);
    const [pages, setPages] = useState();
    let pagesArray = [];
    const [currentPage, setCurrentPage] = useState(1);

    async function getMovies(p) {
        await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${p}`)
            .then(response => {
                setMovies(response.data.results);
                let pagesCount = response.data.total_pages / 20;
                setPages(pagesCount);
            });
    }

    useEffect(() => {
        getMovies(currentPage);
    }, [currentPage]);

    let startPage = 1;
    let endPage = 5;
    if (currentPage > 2) {
        if (currentPage === pages) {
            startPage = currentPage - 5;
            endPage = pages;
        } else {
            startPage = currentPage - 2;
            endPage = currentPage + 2;
        }
    }

    for (let i = startPage; i < endPage + 1; i++) {
        pagesArray.push(i);
    }

    return (
        <>
            <div className="movies">
                {
                    movies.map(movie => {
                        return (
                            <Movie key={movie.id} movie={movie}/>
                        )
                    })
                }
            </div>

            <div className="pages">
                {
                    pagesArray.map((page, index) => {
                        return (
                            <button key={index} onClick={() => setCurrentPage(page)}>{page}</button>
                        )
                    })
                }
            </div>

        </>
    )
}

export default App;