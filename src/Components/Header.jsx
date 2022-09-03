import  Contact  from "../Pages/Contact";
import  Home  from "../Pages/Home";
import  Student  from "../Pages/Student";

import { NavLink } from 'react-router-dom';
import '../App.css';

export function Header(){
   return(
    <nav>
    <NavLink  to={'/'} element={<Home/>}  className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")}     >Home</NavLink>
    <NavLink to={'/Pages/Student'} element={<Student/>}  className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")}>Students</NavLink>
    <NavLink to={'/Pages/Contact'} element={<Contact/>}  className={({ isActive }) => 
                      (isActive ? "active-class" : "not-active-class")} >Contact us</NavLink>
  </nav>
   )
}