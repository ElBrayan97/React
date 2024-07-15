import {useState} from 'react';

export default function Welcome(props) {
    const [counter, setCounter] = useState(0);
    const {message, name} = props;

    return (
        <div>
            <p>{message}</p>
            <p>Hola desde welcome, {name}</p>
            <h2>Contador de React con Hooks: {counter}</h2>
            <button type="submit" onClick={() => setCounter(counter + 1)}>
                Sumar Contador 
            </button>
        </div>
    )
}