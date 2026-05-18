import React, {useReducer} from 'react'

const initial = {
    first: 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment' :
            return {first: state.first + 1}
        case 'decrement' :
            return {first: state.first - 1}   
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
            <div>{count.first}</div>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default CounterOne