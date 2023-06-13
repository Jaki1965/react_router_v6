import { NavLink, Outlet } from "react-router-dom"
import { Mypage } from "./Mypage"

import styles from './Layout.module.css'

const m = styles.link;
const setActive = ({isActive}) => isActive ? m : '';

const Layout = () => {
  
  return (
    <>
     <header>
        <NavLink to = '/' className={setActive} >Home</NavLink>
        <NavLink to ='/posts' className={setActive}>Blog</NavLink>
        <NavLink  to ='/about' className={setActive}>About</NavLink>
        <NavLink  to ='/outlet' className={setActive}>Outlet</NavLink>
      </header>
      <Outlet />
    </>

  )
}

export {Layout}