import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

class CalendarApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startDate: new Date(),
      face: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveFaceFromInput = this.saveFaceFromInput.bind(this);
    this.saveMessageFromInput = this.saveMessageFromInput.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
    console.log('startDate', this.state.startDate);
  }

  saveFaceFromInput(event){
    if (event.target.checked === true){
      this.setState({
        face: event.target.value
      })
      console.log('face', this.state.face);
    }
  }

  saveMessageFromInput (event){
    this.setState({
      message: event.target.value
    });
    console.log('message', this.state.message);
  }

  render(){
    return (
      <div className="app_container">
        <header>
        <h1>¿Cuál es tu mood?</h1>
        </header>
        <body>
          <label htmlFor= "date">Fecha</label>
          <DatePicker
          dateFormat="dd/MM/yyyy"
        selected={this.state.startDate}
        onChange={this.handleChange}

      />
      <label htmlFor="happy_day">:)</label>
      <input type="checkbox" value="happy_face" id="happy_day" onClick={this.saveFaceFromInput}></input>
      <label htmlFor="sad_day">:(</label>
      <input type="checkbox" value="sad_face" id="sad_day" onClick={this.saveFaceFromInput}></input>
      <label htmlFor="message">Mensaje para el recuerdo</label>
      <input type="text" placeholder="Escribe aquí tu recuerdo del día" id="message" onChange={this.saveMessageFromInput} value={this.state.message}></input>
      <button type="submit">Guardar</button>
      <button>Cancelar</button>
      </body>
      </div>
      
    )
  }
}

export default CalendarApp;
