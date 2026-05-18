import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState([])
    const [id, setID] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(res => {
            console.log(res)
        })
    }, [id])

    return (
        <div>
            <input 
                type="text" 
                value={id}
                onChange={e => setID(event.target.value)}
            />
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching