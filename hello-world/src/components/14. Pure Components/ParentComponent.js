import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

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
        console.log('PARENT COMP RENDER')
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComponent