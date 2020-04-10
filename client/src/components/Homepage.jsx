import React, { Component } from "react";

class Homepage extends Component{
    state = {cities: []}
  
    async componentDidMount() {
        const response = await fetch('/api')
        const cities   = await response.json()
        console.log(response, "HIII")
        this.setState({cities: cities})
    }

    render(){
        return(
            <div>
                 <ul>
                {this.state.cities.map( city => {
                    return <li key={city.name}> <b>{city.username}</b></li>
                })}
                </ul>
            </div>
           
        )
    }
}

export default Homepage;