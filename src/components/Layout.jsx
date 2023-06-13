import { Link, Outlet } from "react-router-dom"
import { Mypage } from "./Mypage"
import { CustomLink } from "./CustomLink"

import styles from './Layout.module.css'

const Layout = () => {
  
  return (
    <>
     <header>
        <CustomLink to = '/'>Home</CustomLink>
        <CustomLink to ='/posts'>Blog</CustomLink>
        <CustomLink  to ='/about'>About</CustomLink>
        <CustomLink  to ='/outlet'>Outlet</CustomLink>
      </header>
      <Outlet />
    </>

  )
}

export {Layout}