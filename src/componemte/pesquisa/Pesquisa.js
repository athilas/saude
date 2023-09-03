import './pesquisa.css';
import {FaSearch} from "react-icons/fa";
import { useState } from 'react';





function Pesquisa({setNome}) {
    
    const [dado, setDado] = useState();
    function Nome(){
        
        setNome(dado);
        setDado('');
    }

    
    return (
        <div className='pesquisa'>

            <input type ="text" 
            placeholder='Digite o nome da doença' 
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