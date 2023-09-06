
import './Campo.css';

function Campo({texto}){
    return(
        <label className='etiqueta'>{texto}
            <input 
                type ="text"
                className='campo'
                placeholder={texto}

            />
        </label>   
    );
}

export default Campo;