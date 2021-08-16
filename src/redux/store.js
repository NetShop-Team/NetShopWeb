import{createStore} from 'redux';
import {combineReducers} from 'redux';
import {productReducer, selectedProductReducer} from './reducers/productReducer';


const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
})

const store = createStore(
    reducers, 
    {}, 
    window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__()
    );


export default store;