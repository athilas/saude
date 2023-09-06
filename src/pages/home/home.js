import { useState } from "react";
import Titulo from "../../componemte/titulo/Titulo";
import Pesquisa from "../../componemte/pesquisa/Pesquisa";
import Resultado from "../../componemte/resultado/Resultado";
import Rodape from "../../componemte/rodape/Rodape";


function Home(){

    const [nome, setNome]=useState( );

    const data =[ {
            "nome": "",
            "sintomas": [],
            "tratamento":"" 
        },
        {
            "nome": "gripe",
            "sintomas": ["febre", "dores pelo corpo", "tosse"],
            "tratamento": "procure um posto de saude"
        },
        {
            "nome": "catapora",
            "sintomas": ["febre", "dores pelo corpo", "manchas vermelhas pelo corpo", "coceira"],
            "tratamento": "procure um hospital"
        }];
    
    const saida = busca(nome);
    function busca(dado){
        for(let i in data){
            if (dado === data[i].nome) return data[i];
        }
        return data[0];
    }
        
    return(
        <div className="container">
            <Titulo/>
            <Pesquisa setNome = {setNome} local="Digite o nome da doença"/>
            <Resultado resultado={saida} />
            <Rodape nome ={nome}/>
        </div>

    );
}

export default Home;