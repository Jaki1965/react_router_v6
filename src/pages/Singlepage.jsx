import { useParams, Link, useNavigate} from'react-router-dom';
import {useState, useEffect} from 'react';


const Singlepage = () => {
 
  const {id} = useParams();
  const [post, setPost] = useState(null)
  const navigate = useNavigate(); // navigate - функция useNavigate() -> возвращает функцию которая работает с  двумя параметрами 1. Куда перейти

  const goBack = () => {
      navigate(-1)                   // -1 -> страница назад
  }

  const goHome =()=> navigate('/', {replace: true})  //  {replace: true} - переход не заисывается в историю браузера


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))

  }, [id]);
  
  return (
    <>
    <h1>Я Singlepage</h1>
      <button onClick={goBack}>Go back</button>
      <button onClick={goHome}>Go home</button> {/*плохая практика  для случаев перехода лучше пользоваться Link*/}
      
      <div style={{fontSize: '35px', color: 'green', fontWeight: '400'}}>
        {post && (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link to={`/posts/${id}/edit`}>
              РЕДАКТИРУЕМ ПОСТ {id}
            </Link>
          </>
        )
        }
      </div>
    </>
   

  )
}

export {Singlepage}