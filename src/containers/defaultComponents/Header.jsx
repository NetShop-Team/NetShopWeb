import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";
import netshopLogo from "../../images/netshopLogo.png";

export default function Header(props) {
    return(
        <div className={s.body}>
            <div className={s.navbar}>
            <div className={s.logo}><img src={netshopLogo}></img></div>
                <h2>NETSHOP</h2>
                { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </div>
    )
}
