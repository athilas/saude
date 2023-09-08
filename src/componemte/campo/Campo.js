import { useState } from 'react';
import './Campo.css';

function Campo({texto, info, valorS}){
    const [valor,setValor]=useState();
    valorS = setValor;
    return(
        <label className='etiqueta'>{texto}
            <input 
                type ="text"
                className='campo'
                placeholder={texto}
                value = {info}
                onChange={(e)=>setValor(e.target.value)}

            />
        </label>   
    );
}

export default Campo;