import React, { useState } from 'react';
import './index.css';
import './App.css'
import reportWebVitals from './reportWebVitals';
import Calendar from 'react-calendar';
import { render } from 'react-dom';
import 'react-calendar/dist/Calendar.css'
import Difficulty from './components/difficulty';
import emailjs from "emailjs-com"

function ReactCalendar(){
  const [date, setDate] = useState(new Date()); 
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_gg3vqvw','template_lzvimyq',e.target,'user_iKY8Dg4OAUluQk9OpLahA').
    then(res=> {
      console.log(res)
    });
  }
  const onChange = date =>{
    setDate(date)
    console.log(Date(date))
  }
  return (
    <React.Fragment>
    <form onSubmit={sendEmail} className= "row flex-row"> 
      <Calendar className="col-sm-5 p-4 mt-4 mx-auto"
        onChange={onChange}
        value={date}
        name = "{{date}}"
      />
      <div className="col-sm-5 mx-auto">
      <div className = "p-4 mt-4">
      <div className="p-1 mx-auto text-center">
        <label>Name:</label>
        <input type="text" name="name" className="m-3" />
      </div>
      <div className = "p-1 mx-auto text-center">
        <label>Email:</label>
        <input type="text" name="email" className="m-3" />
      </div>
      <div className="col-sm-12 text-center">
      <input type="submit" className="btn btn-primary" value="Set Alarm" />
      </div>
      </div>
      </div>
    </form>
    </React.Fragment>
  )
}
render(<Difficulty/>, document.getElementById('difficulty'))
render(<ReactCalendar /> , document.getElementById('calendar'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
