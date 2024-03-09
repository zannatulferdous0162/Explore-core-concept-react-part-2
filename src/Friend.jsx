import { useEffect, useState } from 'react'
import './Friend.css'
import FriendOne from './FriendOne';
export default function Friend (){
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))

    },[])

    return(
        <div className='box'>
            <h3>Friends : {friends.length}</h3>
            {
                friends.map(Friend => <FriendOne friend={Friend}></FriendOne>)
            }
        </div>
    )
}



/**
 * 1. state to hold data
 * 2. useEffect to dependency array
 * 3. use fetch to load data
 * 4. set loaded  data  to the state
 * 5. display data 
 */