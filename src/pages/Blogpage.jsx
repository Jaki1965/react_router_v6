import {useState, useEffect} from 'react';
import { Link, useLocation } from "react-router-dom"



const Blogpage = () => {

  const [posts, setPosts] = useState([])

  console.log(useLocation())


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))

  }, []);
  
 

  return (
    <>
      <div>
        <h1>
          Я страница - "БЛОГ" (Blogpage)
        </h1>
        <h1>
          <Link to='/posts/new'>Add new post</Link>
        </h1>
        {
          posts.map(post => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <li style={{fontSize: '25px'}}>
                {post.title}
              </li>
            </Link>
          ))
        }
      </div>
    </>
  )
}


export {Blogpage};

