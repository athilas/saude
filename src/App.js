import { useState } from "react";
import Titulo from "./componemte/titulo/Titulo";
import Pesquisa from "./componemte/pesquisa/Pesquisa";
import Resultado from "./componemte/resultado/Resultado";
import Rodape from "./componemte/rodape/Rodape";
import './App.css';


function App(){

    const [nome, setNome]=useState( );
    return(
        <div className="container">
            <Titulo/>
            <Pesquisa setNome = {setNome}/>
            <Resultado nome ={nome}/>
            <Rodape nome ={nome}/>
        </div>

    );
}

export default App;