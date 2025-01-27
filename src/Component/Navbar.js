import React from "react";
import '../App.css';

import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
  
    render(){
        return(
            <div className="nav">
                <Link to="/"><img src="https://st.depositphotos.com/3332767/4586/i/950/depositphotos_45867409-stock-photo-box-of-popcorn.jpg" /></Link>
                <Link to="/movies">Movies</Link>
                <Link to="/people">People</Link>
                <Link to="/locations">Locations</Link>
            </div>
            
        )
    }
}
export default Navbar;