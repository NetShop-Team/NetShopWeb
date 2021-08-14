import{createStore} from 'redux';
import reducers from "./reducers";


const store = createStore(
    reducers, 
    {}, 
    window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__()
    );


export default store;