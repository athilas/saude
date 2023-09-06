import './pesquisa.css';
import {FaSearch} from "react-icons/fa";
import { useState } from 'react';





function Pesquisa({setNome, local}) {
    
    const [dado, setDado] = useState();
    function Nome(){
        
        setNome(dado.toLowerCase());
        setDado('');
    }

    
    return (
        <div className='pesquisa'>

            <input type ="text" 
            placeholder={local} 
            className='entrada'
            value={dado}
            onChange={(e)=>setDado(e.target.value)}
            />

            <button className='botao'onClick={Nome}>
                <FaSearch size={30} color='rgb(0,0,0)'/>
            </button>
        </div>
    );
  }
  
  export default Pesquisa;