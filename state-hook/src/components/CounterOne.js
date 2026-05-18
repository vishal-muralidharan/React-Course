import React, {useReducer} from 'react'

const initial = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment' :
            return state + 1
        case 'decrement' :
            return state - 1   
        case 'reset' :
            return initial
        default :
            return state
    }
}

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initial)

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne