import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from './containers/mainPage/ProductListing';
import ProductDetails from './containers/mainPage/ProductDetails';
import Header from "./containers/defaultComponents/Header"
import LoginLogout from "./containers/loginPage/LoginPage"


function App(){
    return(
        <div className="App">
            <Router>
               <Header />
                <Switch>
                  <Route path="/" component={ProductListing}/>
                  <Route path="/login" component={LoginLogout}/>
                  <Route path="/product/:productId" component={ProductDetails}/>
                  <Route>404 Not Fouuuuund</Route>
                </Switch>
            </Router>
            
        </div>
    )
}

export default App;
