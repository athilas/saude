import Campo from '../../componemte/campo/Campo';
import Botao from '../../componemte/botao/Botao';
import './login.css';

function Login(){
    return(
        <form className="login">
            <Campo texto="Usuario"/>
            <Campo texto="Senha"/>
            <div className='botoes'>
                <Botao nome ="Login"/>
                <Botao nome ="Limpar"/>
            </div>
            
        </form>
    );
}

export default Login;