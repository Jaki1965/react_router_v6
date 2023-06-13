import { useParams, Link} from'react-router-dom';
import {useState, useEffect} from 'react';


const Singlepage = () => {
 
  const {id} = useParams();
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))

  }, [id]);
  
  return (
    <>
    <h1>Я Singlepage</h1>
      <div style={{fontSize: '35px', color: 'green', fontWeight: '400'}}>
        {post && (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link to={`/posts/${id}/edit`}>
              РЕДАКТИРУЕМ ПОСТ
            </Link>
          </>
        )
        }
      </div>
    </>
   

  )
}

export {Singlepage}