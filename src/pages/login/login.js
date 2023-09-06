import Campo from '../../componemte/campo/Campo';
import './login.css';

function Login(){
    return(
        <form className="login">
            <Campo texto="Usuario"/>
            <Campo texto="Senha"/>
        </form>
    );
}

export default Login;