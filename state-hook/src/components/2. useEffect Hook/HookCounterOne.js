import React, {useEffect, useState} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState(0)

    useEffect(() => {
        console.log("Update Title")
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <input 
                    type='text' 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                />
            <button onClick={() => setCount(count + 1)}>Count Value: {count}</button>          
        </div>
    )
}

export default HookCounterOne