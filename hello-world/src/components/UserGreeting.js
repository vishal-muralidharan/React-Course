import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        if (this,this.state.isLoggedIn) {
            return (
                <div>Welcome, Vishal</div>
            )
        }
        else {
            return (
                <div>Welcome, Guest</div>
                            
            )
        }
        
    }
} 

export default UserGreeting