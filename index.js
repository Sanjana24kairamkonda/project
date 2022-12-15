import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './Signup';
import Login from './Login';
import Compiler from './components/Compiler';
import Mainpage from './Mainpage';
import Play ,{ PlayWithRouter} from './quiz/Play';
import Quiz from './Quiz';
import "./index.css"
import App1 from './App1';
import Play1 from './quiz/Play1';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coding from './Coding';
import Coding1 from './codingSection/Coding1'
import Coding4 from './codingSection/Coding4';
import Coding2 from './codingSection/Coding2'
import Coding3 from './codingSection/Coding3';
import Coding5 from './codingSection/Coding5';
import Coding6 from './codingSection/Coding6';
import Coding7 from './codingSection/Coding7';
import Coding8 from './codingSection/Coding8';
import Coding9 from './codingSection/Coding9';
import Coding10 from './codingSection/Coding10';
import Coding11 from './codingSection/Coding11';
import Coding12 from './codingSection/Coding12';
import Coding13 from './codingSection/Coding13';
import Coding14 from './codingSection/Coding14';
import Coding15 from './codingSection/Coding15';
import Daa from './quiz/Daa';
import Dbms from './quiz/Dbms';
import Dsa from './quiz/Dsa';
import Java from './quiz/Java';
import Python from './quiz/Python';
import Aptitude from './Aptitude';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<App/>}/>
      <Route path="/login" element={<Login />}/> 
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/mainpage" element={<Mainpage/>}/>
      <Route path="/Quiz" element={<Quiz/>}/>
      <Route path="/Play" element={<Play/>}/>
      <Route path="/PlayWithRouter" element={<PlayWithRouter/>}/>
      <Route path="/Play1" element={<Play1/>}/>
      <Route path="/Daa" element={<Daa/>}/>
      <Route path="/Dbms" element={<Dbms/>}/>
      <Route path="/Dsa" element={<Dsa/>}/>
      <Route path="/Java" element={<Java/>}/>
      <Route path="/Python" element={<Python/>}/>
      <Route path="/compile" element={<App1/>}/>
      <Route path="/Coding" element={<Coding/>}/>
      <Route path="/Coding1" element={<Coding1/>}/>
      <Route path="/Coding2" element={<Coding2/>}/>
      <Route path="/Coding3" element={<Coding3/>}/>
      <Route path="/Coding4" element={<Coding4/>}/>
      <Route path="/Coding5" element={<Coding5/>}/>
      <Route path="/Coding6" element={<Coding6/>}/>
      <Route path="/Coding7" element={<Coding7/>}/>
      <Route path="/Coding8" element={<Coding8/>}/>
      <Route path="/Coding9" element={<Coding9/>}/>
      <Route path="/Coding10" element={<Coding10/>}/>
      <Route path="/Coding11" element={<Coding11/>}/>
      <Route path="/Coding12" element={<Coding12/>}/>
      <Route path="/Coding13" element={<Coding13/>}/>
      <Route path="/Coding14" element={<Coding14/>}/>
      <Route path="/Coding15" element={<Coding15/>}/>
    </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();

