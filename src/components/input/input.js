import './input.css';

function Input(props){
    return(
        <div>
            <input className='campo' placeholder='Digite aqui'></input>
            <button type='submit'>🔍</button>
        </div>
    );
}
export default Input;