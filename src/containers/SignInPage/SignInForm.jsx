import axios from 'axios';
import React, { useState } from 'react';
import s from './SignIn.module.css';
import { NavLink } from 'react-router-dom';

function SignInForm({SignIn, error}){
    const [details, setDetails] = useState({name: "", email: "", password: ""});
    const submitHandler = e => {
        e.preventDefault();

        SignIn(details);
    }
    
    const auth = () => {
       
    }

    return(
        <form onSubmit ={submitHandler}>
            <div className ={s.body}>
                <h2>Регистрация</h2>
                <p className={s.wary}>Кто вы?</p>
                
                <div className={s.container}>
                
  <ul>
  <li>
    <input type="radio" id="f-option" name="selector" />
    <label for="f-option">Покупатель</label>
    
    <div className={s.check}></div>
  </li>
  
  <li>
    <input type="radio" id="s-option" name="selector"  />
    <label for="s-option">Продавец</label>
    
    <div className={s.check}><div className={s.inside}></div></div>
  </li>
  
</ul>
</div>
  
                {/*ERROR!*/ }
                <div className={s.form}>
                <div>
                    
                    <label htmlFor="name" >Логин</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div>
                   
                    <label htmlFor="password" >Пароль</label> 
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                
                <input type="submit" onClick={auth} value="Зарегистрироваться" />
                <div className={s.link}><NavLink to='/login' >Уже зарегистрированы? Войдите здесь</NavLink></div>
                </div>
            </div>
        </form>
    )
}

export default SignInForm;