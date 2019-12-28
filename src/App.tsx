import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import './App.css';
import { CountryProps } from "./components/country/country";
import Country from './components/country/country';

const defaultUrl = 'https://restcountries.eu/rest/v2/all?fields=name;population;flag;capital;region';

async function findAll(setData: Function, url: string) {
  const response = await fetch(url);
  const data = await response.json();
  setData(data);
}

const useCountries = (url: string) => {
  const [data, setData] = useState<CountryProps[]>([]);

  useEffect(() => {
    findAll(setData, url);
  });

  return data;
}

const App: React.FC = () => {
  const countries = useCountries(defaultUrl);

  return (
    <div className="App">
      <Navbar></Navbar>
      {
        countries.map(country => <Country
          name={country.name}
          region={country.region}
          flag={country.flag}
          capital={country.capital}
          population={country.population} />)
      }
    </div>
  );
}

export default App;
