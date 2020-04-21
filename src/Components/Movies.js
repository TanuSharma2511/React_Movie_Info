import React, {useState , useEffect} from "react";
import style from "../movies.module.css";
import {Link} from "react-router-dom";
import "../App.css";
import Movie from "./Movie";



const Movies= () =>{
    
    const [movies,setMovies]=useState([]);
    const [search,setSearch] =useState("");
    const [query , setQuery] = useState("home");
    
    useEffect( ()=>{
     getMovies();
    } ,[query]);

    const getMovies = async () =>{
         const response = await fetch(`http://www.omdbapi.com?i=tt3896198&apikey={YOUR_API_KEY}&s=&s=${query}`);
         const data = await response.json();
        // console.log(data.Search);
       setMovies(data.Search);
     }

     const updateSearch = e =>{
        setSearch(e.target.value);
    }

    const getSearch = e =>{
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

    return(
        <div className="App">
        <form onSubmit={getSearch} className="search-form" >
            <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
            <button className="search-button" type="submit">Search</button>
        </form>
        <div className="movies">
        {movies.map(movie =>(
            <Movie 
            key={movie.Title} 
            title={movie.Title}  
            year={movie.Year}  
            image={movie.Poster}
            imdbID={movie.imdbID}
         />
        ))}
        </div>
    </div>
    
    );
}

export default Movies;