import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import Header from "./containers/Header"
import LoginLogout from "./containers/LoginPage"


function App(){
    return(
        <div className="App">
            <Router>
               <Header />
                <Switch>
                  <Route path="/" exact component={ProductListing}/>
                  <Route path="/login" exact component={LoginLogout}/>
                  <Route path="/product/:productId" exact component={ProductDetails}/>
                  <Route>404 Not Fouuuuund</Route>
                </Switch>
            </Router>
            
        </div>
    )
}

export default App;
