//const React = require('react')
import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import ContadorComponent from '../src/components/Contador'

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
    const name = 'Renato'
    const apellido = 'Olaechea'
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo}
                    className="App-logo"></img>
                <ContadorComponent Name={name}
                    lastName={apellido} />
            </div>
        </div>
    )
}


export default App;