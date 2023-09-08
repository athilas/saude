import Campo from '../../componemte/campo/Campo';
import Botao from '../../componemte/botao/Botao';
import './login.css';
import {useState} from 'react';

function Login(){
    const [valor, setValor] = useState();
    let dado1;

    return(
        <form className="login">
            <Campo texto="Usuario" info = {valor}/>
            <Campo texto="Senha"/>
            <div className='botoes'>
                <Botao nome ="Login"/>
                <Botao nome ="Limpar" dado=''/>
            </div>
            
        </form>
    );
}

export default Login;