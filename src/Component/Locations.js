import { Component } from "react";
import React from 'react';


class Locations extends Component {
    constructor(){
        super()
        this.state = {
            locations: [],
            display: false,
        }
    }
handleFetctLocations = () =>{
    fetch("https://ghibliapi.herokuapp.com/locations")
    .then((res)=> res.json())
    .then((data) => {
        
        this.setState({
            locations: data,
            
        }) 
    });
};
handleShowLocation=(e)=>{
    this.setState({
        display: e.target.onClick
    })
}
componentDidMount(){
    this.handleFetctLocations();
}



    render(){
       let showLocationArr = this.state.locations.map((locations)=>{
            return (
                <div className="locations-card">
                    <ul>
                       <li>Name: {locations.name}</li>
                       <li>Climate: {locations.climate}</li>
                       <li>Terrain: {locations.terrain} </li>
                    </ul>
                </div>
            )
        })
        return(
            <div className="locations">
              <h1>List of Locations</h1>
              <button className="show-loca"
                        onClick={this.handleShowLocation}
                        >
                     Show Locations
                    
                  {/* {this.state.display &&
                    <div>Things to shown</div>
                  }

                  {this.state.display &&
                    <div>thing to hidden</div>
                  } */}

              </button>
            </div>
        )

    }
}

export default Locations;