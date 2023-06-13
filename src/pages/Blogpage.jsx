import {useState, useEffect} from 'react';
import { Link } from "react-router-dom"



const Blogpage = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))

  }, []);
  
  console.log(posts);

  return (
    <>
      <div>
        <h1>
          Я страница - "БЛОГ" (Blogpage)
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

