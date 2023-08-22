import './resultado.css';

function Resultado({nome}){
       return(
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
    );
}

export default Resultado;
