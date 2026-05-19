import React, {useReducer} from 'react';
import './App.css';
import A from './components/5. useReducer with useContext/A';
import B from './components/5. useReducer with useContext/B';
import C from './components/5. useReducer with useContext/C';

export const CountContext = React.createContext()

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


function App() {
    const [count, dispatch] = useReducer(reducer, initial)

    return (
        <CountContext.Provider 
            value={{countState: count, countDispatch: dispatch}}
        >
            <div className="App">
                Count: {count}
                <A />
                <B />
                <C />
            </div>
        </CountContext.Provider>
    );
}

export default App;