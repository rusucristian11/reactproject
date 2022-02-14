import React from 'react';
import ReactDOM from 'react-dom';
import './Components/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ToDoApp from "./Components/toDoComponent/ToDoApp";
import CalculatorApp from "./Components/CalculatorApp/CalculatorApp";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={ <App/> }>
                    <Route path='toDo' element={ <ToDoApp/> }/>
                    <Route path='calculatorApp' element={ <CalculatorApp/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();