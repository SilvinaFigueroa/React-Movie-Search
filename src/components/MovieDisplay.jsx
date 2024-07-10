
const MovieDisplay = ({ movie }) => {

    // functions created to handle empty content. 
    // Check alternative conditional rendering options on app.jsx return components 
    const loading = () => {
        return <h5>No Movie to Display</h5>
    }

    const loaded = () => {
        return (
            <>
                <h1>{movie.Title}</h1>
                <h2>{movie.Genre}</h2>
                <img src={movie.Poster} alt={movie.Title} />
                <h2>{movie.Year}</h2>
            </>
        )
    }
    return movie? loaded() : loading(   )
}


export default MovieDisplay;