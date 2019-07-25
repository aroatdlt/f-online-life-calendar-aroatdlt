import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

class CalendarApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  

  render(){
    return (
      <div class="app_container">
        <header>
        <h1>¿Cuál es tu mood?</h1>
        </header>
        <body>
          <label for= "date">Fecha</label>
          <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
      <label for="happy_day">:)</label>
      <input type="checkbox" value="happy_face" id="happy_day"></input>
      <label for="sad_day">:(</label>
      <input type="checkbox" value="sad_face" id="sad_day"></input>
      <label for="message">Mensaje para el recuerdo</label>
      <input type="text" placeholder="Escribe aquí tu recuerdo del día" id="message"></input>
      <button type="submit">Guardar</button>
      <button>Cancelar</button>
      </body>
      </div>
      
    )
  }
}

export default CalendarApp;
