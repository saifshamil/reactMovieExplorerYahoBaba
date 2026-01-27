import { useState, useEffect, useRef } from "react";

import React from 'react'
import MovieList from "../components/MovieList";

const Home = () => {

    const [movies, setMovies ] = useState([])
    const [loading, setLoading ] = useState(false)
    const inputRef = useRef()
    const fetchMovies = async (query) =>{
        setLoading(true)
       const res = await fetch(`http://www.omdbapi.com/?apikey=c1d5393c&s=${query}`)   
       const data = await res.json();
       console.log(data);
       setMovies(data.Search || [])
       setLoading(false)
    }

    useEffect(()=>{
        fetchMovies("Avengers")
    },[])

    const handleSearch = (e) =>{
          e.preventDefault();
          const query = inputRef.current.value.trim();
          if(query) fetchMovies(query)
    }

  return (
  <div className="home">
        <form onSubmit={handleSearch}>
          <input ref={inputRef} className="searchInput" placeholder="Search for a movie..."></input>
          <button type="submit">Search 🔎</button>
        </form>
        
        {loading? <p>Loading...</p> : <MovieList movies={movies}/>}

       
      </div>
  )
}

export default Home
