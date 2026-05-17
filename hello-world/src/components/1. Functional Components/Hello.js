import React from 'react'

const Hello = () => {
    // return (
    //    <h1>Hello, Vishal</h1>
    // )

    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummy'}, 
        React.createElement('h1', null, 'Hello, Vishal'))
}

export default Hello