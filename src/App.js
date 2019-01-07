import React, { Component } from 'react';
import Header from './components/Header';
import WeatherForm from './components/WeatherForm';
import Weather from './components/Weather';
import Error from './components/Error';

class App extends Component {

  //Setea estados iniciales
  state = { 
    request: {},
    response: {},
    error:false
  }

  //Cada vez que hay un cambio en la app, busca clima en la api
  componentDidUpdate(prevProps,prevState) {
    if(prevState.request !== this.state.request) {
      this.getResponse();
    }
  }

  //Accede a la api y trae la respuesta
  getResponse = request => {
    const {city, country} = this.state.request;

    if(!city || !country) return null;

    const appId = "780bf7510ad4b06d78e34649e5398e88";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

    //Query con fetch
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          response: data
        })
      })
      .catch(error => {
        console.log(error)
      })

    //leer la url y agregar API Key


    //Consultar con fetch
  }

  //Recibe reuqest del formulario y setea estado, maneja errores
  getWether = request => {

    if(!request.city || !request.country) {
      this.setState({
        error: true,
      })
    } else {
      this.setState({
        request,
        error: false
      })

    }
    
  }
  render() {
    const error = this.state.error;
    let message;
    if(error) {
      message = <Error message = "Ambos campos son requeridos" />
    } else {
      message = <Weather response = {this.state.response}/>
    }

    return (
      <div className="app">

        <header className="App-header">
          <Header 
            title="Clima React"
          />
        </header>

        <WeatherForm 
          getWether = {this.getWether}
        />


        {message}
        
      </div>
    );
  }
}

export default App;
