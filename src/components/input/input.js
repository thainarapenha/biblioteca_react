import { useState } from 'react';
import './input.css';

function Input(props){
    const [buscar, setBuscar] = useState('');

    const buscarEntrada = (e) => {
    setBuscar(e.target.value);
    }

    const enviarEntrada = (e) => {
    e.preventDefault();
    }

    return(
        <form className='cxPesquisa' onSubmit={enviarEntrada}>
            <input className='campo' id='buscar' onChange={buscarEntrada} placeholder='Digite aqui'></input>
            <button type='submit'>🔍</button>
        </form>
    );
}
export default Input;