import React from 'react'
import "../test.css"
import users from "../users.json"
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
export const SeeDetail = () => {
    const { username } = useParams();

    useEffect(() => {
        users.map((el) => {
            console.log(username, el.username);
            if (el.username === username) {
                console.log(el);
            }
        })
    }, [])
  return (
    <div className="card">
        SeeDetail: {username}
      <div className="User">
        <p className="Description">
          <h3>⭐ ⭐ ⭐ ⭐ ⭐ </h3>
          <h2 className="desc">
            Give everyone you work with inside and outside your emoji, keep
            conversations focused in channels, and simplify all your
            communications in one place
          </h2>
          <p>
            <img src={users.avatar} alt={""}/> 
            <Link to={users.first_name}>
            <h2>{users.username}</h2>
            </Link>
            
          </p>
        </p>
      </div>
    </div>
  )
}