import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <h1 className={className}>
            Stylesheets
        </h1>
    )
}

export default Stylesheet