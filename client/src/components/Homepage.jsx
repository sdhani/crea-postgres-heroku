import React, { Component } from "react";

class Homepage extends Component{
    state = {users: []}
  
    componentDidMount() {
        fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }

    render(){
        return(
            <div>
                <h2>Homepage rendered</h2>
                <ul>
                {this.state.users.map( city => {
                    return <li key={city.name}>{city.username}</li>
                })}
                </ul>
            </div>
           
        )
    }
}

export default Homepage;