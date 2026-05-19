import React, {useReducer} from 'react'

const initial = {
    first: 0,
    second: 10
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment' :
            return {...state, first: state.first + action.value}
        case 'decrement' :
            return {...state, first: state.first - action.value}  
        case 'increment2' :
            return {...state, second: state.second + action.value}
        case 'decrement2' :
            return {...state, second: state.second - action.value} 
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
            <div>First Counter: {count.first}</div>
            <div>Second Counter: {count.second}</div>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>

            <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment C2</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement C2</button>

            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default CounterOne