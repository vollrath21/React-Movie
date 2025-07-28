import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import '../css/Home.css'
import {searchMovies, getPopularMovies} from "../services/api.js"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect( () => { // Runs once if left blank
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            } finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [] ) // pass a function and a dependency array. if the array changed since last render, use effect

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchQuery(searchQuery)

        alert(searchQuery)
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input"
                    value={searchQuery} 
                    onChange={(e)=>setSearchQuery(e.target.value)}
                />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(
                    (movie) => 
                    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
                    (<MovieCard movie={movie} key={movie.id}/>))}
            </div>
        </div>
    )
}

export default Home