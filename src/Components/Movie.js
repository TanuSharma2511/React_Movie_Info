import React, {useState , useEffect} from "react";
import style from "../movies.module.css";
import {Link} from "react-router-dom";

const Movie= ({title, year, image ,imdbID}) =>{
    useEffect(() =>{

    },[])
   
    return(
        <div className={style.movie}>
              <img className={style.image} src={image} alt="" />
            <h1>{title}</h1>
            <p> Released On: {year} </p>
            <Link to={`/${imdbID}`}><button className="button">Movie Details</button></Link>
        </div>
    
    );
}

export default Movie;