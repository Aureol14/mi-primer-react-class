//const React = require('react')
import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

//Componentes = clase
/*class App(){
    constructor(){
        this.state:{
            name: 'ejemplo'
        }
    }
    render(){
        <div>
            Hola mundo
        </div>
    }
}
*/

const App = () => {
    //const [name, setName] = useState('Renato')
    const [count, setCount] = useState(0)
   const sumar = () => {
       setCount(count+1)
   }
   const restar = () => {
       setCount(count-1)
   }
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo}
                className="App-logo"></img>
                <div>{count}</div>
                <button onClick={sumar}>
                    SUMAR
                </button>
                <button onClick={restar}>
                    MENOS
                </button>
            </div>
        </div>
    )
}


export default App;