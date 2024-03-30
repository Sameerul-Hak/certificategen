import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Routes,Route, BrowserRouter} from 'react-router-dom';
import { useState } from 'react';
import { NameicContext } from './Context/Context';
import Home from './Home';
import CertificateforOthers from './Certificate/CertificateforOthers';
import CertificateGenerator from './Certificate/CertificateGenerator';

function App() {
  const[users,setuser]=useState({name:"",ic:""});
  return (
    <NameicContext.Provider value={{users,setuser}}>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/others" element={<CertificateforOthers/>}/>
            <Route path="/stutea" element={<CertificateGenerator/>}/>
          </Routes>
        </Router>
   
    </NameicContext.Provider>
  );
}

export default App;
