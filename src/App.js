import './App.css';
import {useCallback, useEffect, useState} from "react";
import Movie from "./components/Movie";
import {$axios} from "./plugins/axios"

function App() {
    const [movies, setMovies] = useState([]);
    const [pages, setPages] = useState();
    let pagesArray = [];
    const [currentPage, setCurrentPage] = useState(1);

    async function getMovies() {
        await $axios.get(`/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${currentPage}`)
            .then(response => {
                setMovies(response.data.results);

                let pagesCount = response.data.total_pages;
                setPages(pagesCount);
            });
    }

    useEffect(() => {
        getMovies();
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