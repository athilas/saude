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
<<<<<<< HEAD
        <>
          
            

        </>
=======
              {nome.length > 0 && (
                      <main className='saida'>
                          <h2>Nome: {nome}</h2>
                          <span>
                              <h3>Sintomas</h3>
                              <ul>
                                  <li>Tosse</li>
                                  <li>Febre</li>
                                  <li>Dor no corpo</li>
                              </ul>
                              <h3>O que fazer</h3>
                              <p>Deve procuar o hospital mais proximo da sua residencia</p>
                          </span>
                      </main>
       )}
>>>>>>> 69ed99835784c2e5bec0a5ec09f8955a7d3baa25
    );
}

export default Resultado;
