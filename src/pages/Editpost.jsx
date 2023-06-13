
import { useParams } from "react-router-dom"

const Editpost = () => {
  const {id} = useParams();

  const m = {
    fontSize: '35px',
    color: 'blue',
    fontWeight: '800',
    textAlign: 'center',
    marginTop: '70px'
  }
  
  return (
    <div style={m}>
      Edit a post {id}
    </div>
  )
}

export {Editpost}