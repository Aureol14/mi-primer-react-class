import React, { useState } from 'react'

const Contador = (props) => {
    const [contador, setContador] = useState(0)
    const { Name, lastName } = props
    const sumar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
    }

    return (
        <div>
            {lastName},{Name}
            <div>{contador}</div>
            <button onClick={sumar}>SUMAR</button>
            <button onClick={restar}>RESTAR</button>
        </div>
    )
}

export default Contador