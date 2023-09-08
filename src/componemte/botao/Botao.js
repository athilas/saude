import './botao.css';
// import { useState } from 'react';

function Botao(){

    // const [saida, setSaida]=useState();
    // function atuar(dado){
    //     if(!dado) setSaida(dado);
    //     else{
    //         setSaida(1);
    //     }
    //     // saida = setSaida ;
    // }
        
    return(
        <>
            <input className='botao'
            type='button'
            value={nome}
            onClick={atuar(dado)}/>
        
        </>
    );
}

export default Botao;