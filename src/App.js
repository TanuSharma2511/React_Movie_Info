import React,{useEffect , useState} from "react";
import "./App.css";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Item from "./Components/itemDetail";
import Movies from "./Components/Movies";

const App = () =>{

    return(
       <Router>
        <div className="Appjs">
            <Switch>
            <Route path ="/" exact component={Movies}/>
            <Route path ="/:id" component={Item}/>
            </Switch>
        </div>
        </Router>
    );
}

export default App;
