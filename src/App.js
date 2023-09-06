import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Painel from "./pages/painel/painel";



function App(){
  
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>    
                <Route path="/login" element ={<Login/>}/> 
                <Route path="/painel" element = {<Painel/>}/>     
            </Routes>
        </Router>
    );
}

export default App;