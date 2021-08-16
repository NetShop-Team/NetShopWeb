import axios from 'axios';
import React, { useState } from 'react';
import s from './LoginPage.module.css';


function LoginForm({Login, error}){
    const [details, setDetails] = useState({name: "", email: "", password: ""});
    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    
    const auth = () => {
       // const getData = axios.get(`http://b69e18568654.ngrok.io/users/auth/${details.name}/${details.password}`)
       const getData = axios.get(`http://b69e18568654.ngrok.io/users`)
        if(getData == "no users"){
            console.log("неправильный пароль или логин")
        } else {
           console.log(getData)
        }
        console.log(getData)
    }

    return(
        <form onSubmit ={submitHandler}>
            <div className ={s.body}>
                <h2>Вход</h2>
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
                    
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" onClick={auth} value="LOGIN" />
            </div>
        </form>
    )
}

export default LoginForm;