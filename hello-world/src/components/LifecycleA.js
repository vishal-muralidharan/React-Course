import React, { Component } from 'react'

class LifecycleA extends Component{
    constructor(props) {
        super(props)

        this.state = {
            name: 'Vishwas'
        }

        console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps (props, state) {
        console.log('LifeCycleA - getDerivedStateFromProps method')
        return null
    }

    componentDidMount () {
        console.log('LifeCycleA - componentDidMount method')
    }

    render () {
        console.log('LifecycleA - render() method')
        return (
            <div>
                <h1>LifecycleA Styling</h1>
            </div>
        )
    }
    
}

export default LifecycleA