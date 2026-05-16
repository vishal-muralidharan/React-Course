import React from 'react'

const Greet = ({name, heroName}) => {
    console.log();
    return (
        <div>
            <h1>Hello, {name} aka {heroName}</h1>
            {children}
        </div>
        
    )
}

export default Greet