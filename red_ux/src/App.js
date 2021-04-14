import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";

function App() {

    const counter = useSelector(({counter}) => counter)
    console.log(counter)

const dispatch = useDispatch()
    const inc = () => {
        dispatch({type: 'increment'})
    }
    const dec = () => {
        dispatch({type: 'decrement'})
    }
    const reset = () => {
        dispatch({type: 'reset'})
    }
    return (
        <div className="App">
            <h1>{counter}</h1>
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}
export default App;
