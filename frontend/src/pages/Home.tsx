import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const MOVIES = [
        {id: 1, title: "John Wick", release_date:"2017"},
        {id: 2, title: "John Wick 2", release_date:"2018"},
        {id: 3, title: "John Wick 3", release_date:"2019"}
    ]

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
                {MOVIES.map(
                    (movie) => 
                    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
                    (<MovieCard movie={movie} key={movie.id}/>))}
            </div>
        </div>
    )
}

export default Home