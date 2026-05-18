import React from 'react'

const withCounter = (WrappedComponent, incNum) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
            
            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevstate => {
                return {count: prevstate.count + incNum}
            })
        }

        render() {
            return <WrappedComponent 
                count={this.state.count} 
                incrementCount={this.incrementCount}
                {...this.props}/>
        }
    }

    return WithCounter
}

export default withCounter