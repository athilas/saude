import './botao.css';

function Botao({nome}){
    return(
        <>
            <input className='botao'
            type='button'
            value={nome}/>
        
        </>
    );
}

export default Botao;