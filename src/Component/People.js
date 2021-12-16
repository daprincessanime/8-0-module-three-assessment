import React from "react";

import { Component } from "react";

class People extends Component{
    constructor(){
        super()
        this.state = {
            people: []
        }
    }
fetchPeople = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({
                people: data,
            })
        })
}
    render(){
        let showPeopleArr = this.state.people.map((people)=>{
            return (
                <div className="people-card">
                    <ul>
                       <li>Name: {people.name}</li>
                       <li>Age: {people.age}</li>
                       <li>Gender: {people.gender} </li>
                    </ul>
                </div>
            )
        })
        return (
            <div className='people'>
                <h1>Search for a Person</h1>

            </div>
        )
    }
}

export default People;