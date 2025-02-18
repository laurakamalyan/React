import './App.css';
import { useEffect, useState} from "react";
import Movie from "./components/Movie";
import {getMovies} from "./slice/moviesSlice";
import {useDispatch, useSelector} from "react-redux";

// store-ov sarqi zaprost vor tenc componenti mijic zapros chanes,
// routeneri hamar el mi hat arandzin file sarqi orinak api.js u ira mej granci routenerd

function App() {
    let pagesArray = [];
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();

    const {movies, loading, error, totalPage} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(getMovies(currentPage));
    }, [currentPage]);

    let startPage = 1;
    let endPage = 5;
    if (currentPage > 2) {
        if (currentPage === totalPage) {
            startPage = currentPage - 5;
            endPage = totalPage;
        } else {
            startPage = currentPage - 2;
            endPage = currentPage + 2;
        }
    }

    for (let i = startPage; i < endPage + 1; i++) {
        pagesArray.push(i);
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

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