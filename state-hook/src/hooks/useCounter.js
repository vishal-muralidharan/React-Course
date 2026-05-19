import {useState} from 'react'

function useCounter(initialCount = 0) {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const reset = () => {
        setCount(initialCount)
    }

    return [count, increment, decrement, reset]
}

export default useCounter
