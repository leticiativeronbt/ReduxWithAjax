import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.name;
    const temperatures = cityData.list.map((weather) => weather.main.temp);
  
    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temperatures} color="orange"/></td>
      </tr>
    );
  }
  render(){
    console.log(this.props.weather);
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Umidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  };
}

function mapStateToProps(state){
  return { weather: state.weather };
}

/*
function mapStateToProps({ weather }){
  return { weather };
}
*/

export default connect(mapStateToProps)(WeatherList);