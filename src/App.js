import './App.css';
import React from 'react';
import Nav7 from './Components/Nav7';
import Addevent from './Components/Addevent';
import Saveevent from './Components/Saveevent';
import Home7 from './Components/Home7';
import imgdata from './imgdata';
import Footer from './Components/Footer';
import { useState } from 'react';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [event1,setEvent] = useState("");

  function addEventt(eventname,location,date,time){
        //  console.log(eventname,location,date,time)
         let sno
         if(event1.length === 0){
          sno =0;
         }
         else{
          sno = event1[event1.length-1].sno +1
         }
         const myEvents ={
          sno:sno,
          eventname :eventname,
          location : location,
          date:date,
          time: time,
          getimg: imgdata.data.data7a[sno].url,
          
         }
         console.log(myEvents)
         setEvent([...event1,myEvents])

  }
  return (

      <BrowserRouter>
           <Nav7/>    
           <Routes>    
           <Route  path="/homepage1" element={
           <React.Fragment>
                   <Addevent addEventt = {addEventt}/>
                  <Saveevent event1 = {event1}/>
           </React.Fragment>
            }/>
   
         <Route path="*" element={<Home7 event1 = {event1}/>} > </Route>          
          </Routes>
          <Footer/>
      </BrowserRouter>
   

   
  );
}

export default App;
