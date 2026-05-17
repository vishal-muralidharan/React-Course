import React, { Component } from 'react'
import MemoComp from './MemoComp'

class ParentComponent extends Component {
    constructor (props) {
        super(props)

        this.state = {
            name: 'Vishal'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Vishal'
            })
        }, 2000)
    }

    render () {
        console.log('Parent Component Render')
        return (
            <div>
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponent