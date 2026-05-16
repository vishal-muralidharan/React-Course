import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        let message
        if (this.state.isLoggedIn) {
            message = <div>Welcome, Vishal</div>
        }
        else {
            message = <div>Welcome, Guest</div>
        }

        return <div>{message}</div>

        // METHOD 1
        /* if (this,this.state.isLoggedIn) {
            return (
                <div>Welcome, Vishal</div>
            )
        }
        else {
            return (
                <div>Welcome, Guest</div>
                            
            )
        } */
        
    }
} 

export default UserGreeting