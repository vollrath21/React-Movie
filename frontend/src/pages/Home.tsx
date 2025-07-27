import MovieCard from "../components/MovieCard"

function Home() {
    const MOVIES = [
        {id: 1, title: "John Wick", release_date:"2017"},
        {id: 2, title: "John Wick 2", release_date:"2018"},
        {id: 3, title: "John Wick 3", release_date:"2019"}
    ]

    const handleSearch = () => {

    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input" />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="movies-grid">
                {MOVIES.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
            </div>
        </div>
    )
}

export default Home