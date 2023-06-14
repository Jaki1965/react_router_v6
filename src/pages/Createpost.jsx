import { useAuth } from "../hook/useAuth"
import { useNavigate } from "react-router-dom";

const Createpost = () => {
  const {signout} = useAuth();
  const navigate = useNavigate();


  const m = {
    fontSize: '35px',
    color: 'blue',
    fontWeight: '800',
    textAlign: 'center',
    marginTop: '70px'
  }
  
  return (
    <div >
      <h1 style={m}>
          Create a post
      </h1>
      <button onClick={() => signout(() => navigate('/', {replace: true}))}>Log Out</button>
    </div>
  )
}

export {Createpost}