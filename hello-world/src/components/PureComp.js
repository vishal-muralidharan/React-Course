import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render () {
        console.log('PURE COMP RENDER')
        return (
            <div>
                Pure Component
            </div>
        )
    }
}

export default PureComp