import React, { useContext } from "react";
import { NavLink , useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import '../index.css'

export const Navbar = () => {
    let history = useNavigate()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history('/', {replace: true})
    }

    return (
  <nav>
    <div className="nav-wrapper blue darken-1 nav-p">
      <span className="brand-logo">Сокращение ссылок</span>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/create">Создать</NavLink></li>
        <li><NavLink to="/links">Ссылки</NavLink></li>
        <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
    </ul>
    </div>
  </nav>
        
    )
}