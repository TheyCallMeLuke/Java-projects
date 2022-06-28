import { useState, useEffect } from "react";
import './app.css';
import MovieCard from './MovieCard'
import SearchIcon from './search.svg';

const API_URL = "http://www.omdbapi.com/?apikey=4ef28830"

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        console.log("searching movie " + title);
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
    }

    const handleKeyPress = function (e) {
        if (e.key === 'Enter') {
            searchMovies(searchTerm);
        }
    }

    useEffect(() => {
        searchMovies('Spiderman')
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <form className="search-form" onSubmit={(e) => { e.preventDefault(); searchMovies(searchTerm) }}>
                    <input
                        id="search-input"
                        placeholder="Search for movies"
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value) }}
                    />
                    <input id="search-button" type="image" src={SearchIcon} value="Submit" onClick={() => { searchMovies(searchTerm) }} />
                </form>
            </div>
            {movies.length > 0
                ? (
                    <div className="container">
                        {movies.map(movie =>
                            <MovieCard movie={movie} />
                        )}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
        </div>
    )
}

export default App;