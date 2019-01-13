import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WeatherForm extends Component {

    //Refs
    cityRef = React.createRef();
    countryRef = React.createRef();

    getWether = e => {
        e.preventDefault();

        //Crea objeto
        const request = {
            city: this.cityRef.current.value,
            country: this.countryRef.current.value
        }

        //Envio al padre para manejar estados
        this.props.getWether(request);

        //Limpia form
        //e.currentTarget.reset();
    }

    render() { 
        return ( 
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.getWether}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input ref={this.cityRef} type="text" id="ciudad" />
                                <label htmlFor="ciudad">Ciudad:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.countryRef}>
                                    <option value="" defaultValue>Seleccione pais</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ES">España</option>
                                    <option value="US">Estados Unidos</option>
                                    <option value="MX">Mexico</option>
                                    <option value="PE">Peru</option>
                                    <option value="VE">Venezuela</option>
                                </select>
                                <label htmlFor="pais">pais:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-2 buscador">
                                <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="Buscar..." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}

WeatherForm.propTypes = {
    getWether: PropTypes.func.isRequired
}
 
export default WeatherForm;