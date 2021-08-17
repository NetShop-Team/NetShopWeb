import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from './containers/mainPage/ProductListing';
import ProductDetails from './containers/mainPage/ProductDetails';
import Header from "./containers/defaultComponents/Header"
import LoginLogout from "./containers/loginPage/LoginPage"
import SignIn from "./containers/SignInPage/SignIn"

function App(){
    return(
        <div className="App">
            <Router>
               <Header />
                <Switch>
                  <Route path="/" exact component={ProductListing}/>
                  <Route path="/login" exact component={LoginLogout}/>
                  <Route path="/signin" exact component={SignIn}/>
                  <Route path="/product/:productId" exact component={ProductDetails}/>
                  <Route>404 Not Fouuuuund</Route>
                </Switch>
            </Router>
            
        </div>
    )
}

export default App;
