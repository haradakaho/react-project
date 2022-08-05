import React, {useState, useEffect} from 'react'

const Fetch = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/_health', {method: 'GET'})
        .then(res => console.log(res.json()))
        .then(data => {
            setPosts(data)
        })
    },[])

    return (
        <div>
            <ul>
                {
                    posts.map(post => 
                    <li key={post.id}>{post.title}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Fetch;