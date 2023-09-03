import './resultado.css';

function Resultado({resultado}){
        const Res = "";
        const lista = resultado.sintomas.map((x)=><li>{x}</li>);
        if(resultado.nome){
            return(
                <main className='saida'>
                  
                    <h2>Nome: {resultado.nome.toUpperCase()}</h2>
                    <span>
                        <h3>Sintomas</h3>
                        <ul>
                            {lista}
                        </ul>
                        <h3>O que fazer</h3>
                        <p>{resultado.tratamento}</p>
                    </span>
        
                </main>
            );

        }
       return(
        <>
          
            

        </>
    );
}

export default Resultado;