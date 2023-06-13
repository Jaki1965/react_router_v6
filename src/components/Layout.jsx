import { Link, Outlet } from "react-router-dom"
import { Mypage } from "./Mypage"
import { CustomLink } from "./CustomLink"

import styles from './Layout.module.css'
// Закоментировал то что не нужно при работе в CustomLink, но было нужно при работе с CustomLink
// const m = styles.link;
// const setActive = ({isActive}) => isActive ? m : '';

const Layout = () => {
  
  return (
    <>
     <header>
        <CustomLink to = '/' /*className={setActive}*/ >Home</CustomLink>
        <CustomLink to ='/posts' /*className={setActive}*/>Blog</CustomLink>
        <CustomLink  to ='/about' /*className={setActive}*/>About</CustomLink>
        <CustomLink  to ='/outlet' /*className={setActive}*/>Outlet</CustomLink>
      </header>
      <Outlet />
    </>

  )
}

export {Layout}