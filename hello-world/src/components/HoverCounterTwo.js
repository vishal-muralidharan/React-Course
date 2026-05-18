import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0
        }
    }
     
    incrementCount = () => {
        this.setState(prevstate => {
            return {count: prevstate.count + 1}
        })
    }

    render() {
        const {count} = this.state
        return (
            <h2 onMouseOver={this.incrementCount}>
                Hovered {count} times.
            </h2>
        )
    }
}

export default ClickCounterTwo