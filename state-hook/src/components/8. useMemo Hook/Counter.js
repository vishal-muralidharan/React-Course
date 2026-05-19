import React, { useState, useMemo } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const inc1 = () => {
        setCount(count + 1)
    }

    const inc2 = () => {
        setCount2(count2 + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 200000000) i++
        return count % 2 === 0
    }, [count])

    return (
        <div>
            <button onClick={inc1}>Count 1: {count}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <button onClick={inc2}>Count 2: {count2}</button>
        </div>
    )
}

export default Counter