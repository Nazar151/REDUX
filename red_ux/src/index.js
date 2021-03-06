import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux"

/** const initialState = {counter: 0} **/

const reducer = (state = {counter: 0} /**initialState**/, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + 1 }
        case 'decrement':
            return { ...state, counter: state.counter - 1 }
        case 'reset':
            return { ...state,counter: 0}
        default:
            console.log("action", action.type, 'does not exist')
            return state
    }
}
const store = createStore(reducer)

// console.log(store);
//
// store.subscribe(()=>{
//     console.log('tut', store.getState())
// })
//
// store.dispatch({type: 'counter/incremented'})


ReactDOM.render(
 <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
 </React.StrictMode>,
  document.getElementById('root')
);
//** provider в redux вже описаний за нас і вимагається store **//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
