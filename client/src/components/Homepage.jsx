import React, { Component } from "react";

/**
 * Note: The route "/users" fetches the API json response from the PostgreSQL DB 
 */
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
                {this.state.users.map(user => {
                    return <li key={user.id}>{user.username}</li>
                })}
                </ul>
            </div>
           
        )
    }
}

export default Homepage;