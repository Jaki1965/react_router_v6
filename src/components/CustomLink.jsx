import { Link, useMatch } from "react-router-dom";

const CustomLink = ({children, to, ...props}) => {

  const mutch = useMatch(to);
  console.log(mutch);

  return (
    <Link to={to} 
    style={{ color: mutch ? 'var(--color-active-plus)' : ''}}
    {...props}>
      {children}
    </Link>
  )
}

export {CustomLink};