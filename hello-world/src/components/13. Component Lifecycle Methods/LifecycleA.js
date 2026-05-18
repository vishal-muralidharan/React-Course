import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

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

    shouldComponentUpdate() {
        console.log('LifeCycleA - shouldComponentUpdate method')
    }

    getSnapshotBeforeUpdate() {
        console.log('LifeCycleA - getSnapshotBeforeUpdate method')
    }

    componentDidUpdate() {
        console.log('LifeCycleA - componentDidUpdate method')
    }

    changeState = () => {
        this.setState({
            name: 'Victopia'
        })
    }

    render () {
        console.log('LifecycleA - render() method')
        return (
            <div>
                <h1>LifecycleA Styling</h1>
                <button onChange={this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        )
    }
    
}

export default LifecycleA