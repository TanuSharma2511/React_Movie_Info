import React,{useEffect , useState} from "react";
import style from "../movie.module.css";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import {Link} from "react-router-dom";

const Item = ({ match }) =>{

    const [movie,setMovie]=useState({});

  // console.log(match);
    useEffect( ()=>{
        getmovies();
    } ,[]);
    
    const getmovies = async () =>{
        const response = await fetch(`http://www.omdbapi.com?apikey={YOUR_API_KEY}${match.params.id}`);
        const data = await response.json();
        console.log(data);
        setMovie(data);
    }
    
    return(
        <div className={style.App1}>
             <h1>{movie.Title}</h1>
            <div className={style.App2}>
          
           <img className={style.image} src={movie.Poster} alt="" />
           <ul >
                <li><strong>Genre:</strong> {movie.Genre}</li>
                <li><strong>Released:</strong> {movie.Released}</li>
                <li><strong>Rated:</strong> {movie.Rated}</li>
                <li><strong>IMDB Rating:</strong> {movie.imdbRating}</li>
                <li><strong>Director:</strong> {movie.Director}</li>
                <li><strong>Writer:</strong> {movie.Writer}</li>
                <li><strong>Actors:</strong> {movie.Actors}</li>
              </ul>
              </div>
           <br />
           <br />
              <h2>Plot</h2>
              {movie.Plot}
              <br />
              
              <br />
              <Link to={`/`}> <div>Go Back To Search</div></Link> 
             
        </div>
    );
}

export default Item;
