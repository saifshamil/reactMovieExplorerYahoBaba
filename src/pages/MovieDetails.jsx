import { useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'

const MovieDetails = () => {
    const { id } = useParams()
    const [movie, setMovies] = useState(null)

    useEffect(()=>{
        async function getMovie() {
             const res = await fetch(`http://www.omdbapi.com/?apikey=c1d5393c&i=${id}`)   
       const data = await res.json();
       setMovies(data)
        }
        getMovie(); 
    },[id])

    if(!movie) return <p>Loading...</p>
  return (
    	<div className="movie-detail">
		<h2>{movie.Title}</h2>
		<img alt={movie.Title} src={movie.Poster}/>
		<p><strong>Genre:</strong>{movie.Genre}</p>
		<p><strong>Released:</strong>{movie.Released}</p>
		<p><strong>Plot:</strong> {movie.Plot}</p>
	</div>
  )
}

export default MovieDetails