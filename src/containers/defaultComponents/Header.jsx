import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";
import netshopLogo from "../../images/netshopLogo.png";
import ava from "../../images/ava.jpeg";

export default function Header(props) {
    return(
        <div className={s.header}>
                <img className={s.logo} src={netshopLogo}></img>
                <NavLink className={s.nav} to='/'>КАТЕГОРИИ</NavLink>
                <NavLink className={s.nav} to='/'>
                    <span>В ТРЕНДЕ</span>
                </NavLink>
                <NavLink className={s.nav} to='/'>ИЗБРАННОЕ</NavLink>
                <div className={s.user}>
                    <img src={ava} alt="ava" />
                    { props.isAuth ? props.login
                : <NavLink to='/login' >Login</NavLink> }
                </div>
            </div>
    )
}
