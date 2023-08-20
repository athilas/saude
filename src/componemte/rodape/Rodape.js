import "./rodape.css";

function Rodape({nome}){
    return(
        <footer className="rodape">
                <p>{nome}</p>
                <p>rodape1</p>
                <p>rodape2</p>
                <p>rodape3</p>
        </footer>
    );
}

export default Rodape;