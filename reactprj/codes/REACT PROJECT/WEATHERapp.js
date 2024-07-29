import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import pic from './images.png';
import pic1 from './hum icon.png';
import pic2 from './timezone icon.jpg';
import pic3 from './location icon.jpg';
import pic4 from './latiticon.jpg';

export default function App() {
  const [state, setState] = useState([]);
  const [state1, setState1] = useState([]);
  const [state2, setState2] = useState([]);
  const [state3, setState3] = useState([]);
  const [state4, setState4] = useState([]);
  const [state5, setState5] = useState([]);
  const [search, setSearch] = useState('');

  const handler = (e) => setSearch(e.target.value);

  const Submit = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=4f35cd18cfc08c920dc8b7719f0a95ca`)
      .then((res) => {
        setState(res.data.main);
        setState1(res.data.clouds);
        setState2(res.data.coord);
        setState3(res.data);
        setState4(res.data.weather);
        setState5(res.data.sys);
      });
  };

  const Iconname = state4.map((x) => x.icon);
  const Icon = `http://openweathermap.org/img/w/${Iconname}.png`;

  return (
    <div className='container-fluid'>
      <h1>Weather & Forecasting</h1>
      <input
        type='text'
        className='input'
        placeholder='Enter Your City Name'
        onChange={handler}
      />
      <button className='but' onClick={Submit}>Get Data</button>

      <div className='row'>
        <div className='col-md-12 text-center'>
          <h2>Current Weather</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='txt1'>
            <span>Temperature</span>
            <img src={pic} width='30px' height='30px' alt='Temperature icon' />
            <span>{Math.round(isNaN(state.temp) ? "" : state.temp - 273.15)}<sup>o</sup>C</span>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='txt2'>
            <span>Humidity</span>
            <img src={pic1} width='30px' height='30px' alt='Humidity icon' />
            <span>{state.humidity} %</span>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='txt2'>
            <span>{state4.map((x) => x.description)}</span>
            <img src={Icon} alt='Weather icon' />
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-12 text-center'>
          <h2>Air Conditions</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div className='txt4'>
            <span>Clouds</span>
            <span>{state1.all}</span>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='txt4'>
            <span>Longitude</span>
            <img src={pic4} width='30px' height='30px' alt='Longitude icon' />
            <span>{state2.lon}</span>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='txt4'>
            <span>Latitude</span>
            <img src={pic4} width='30px' height='30px' alt='Latitude icon' />
            <span>{state2.lat}</span>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-12 text-center'>
          <h2>Four Cast</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <div className='txt6'>
            <span>Timezone</span>
            <img src={pic2} width='30px' height='30px' alt='Timezone icon' />
            <span>{state3.timezone}</span>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='txt6'>
            <span>Location</span>
            <img src={pic3} width='30px' height='30px' alt='Location icon' />
            <span>{state3.name}, {state5.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
