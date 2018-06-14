import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{
  renderWeather(cityData){
    const name = cityData.city.Name;
    return (
      <tr key={name}>
        <td>{name}</td>
        <td><SparkLines data=""/></td>
        <td></td>
        <td></td>
      </tr>
    );
  }
  render(){
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