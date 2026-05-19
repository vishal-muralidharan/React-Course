import React, {use, useReducer} from 'react'

const initialState = 0

const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            Count: {count}
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}
