import React, {useEffect, useState} from 'react'


function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    

    useEffect(() => {
        function doSomething() {
            console.log(someProp)
        }
        doSomething()

        const Interval = setInterval(tick, 1000)

        return () => {
            clearInterval(Interval)
        }
    }, [someProp])
    
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter