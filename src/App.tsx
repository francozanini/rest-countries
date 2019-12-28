import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import './App.css';
import { CountryProps } from "./components/country/country";
import Country from './components/country/country';
import Search from './components/search/search';

const defaultUrl = 'https://restcountries.eu/rest/v2/all?fields=name;population;flag;capital;region';

async function findAll(setCountries: Function, url: string) {
  const response = await fetch(url);
  const countries = await response.json();
  setCountries(countries);
}

const useCountries = (url: string) => {
  const [countries, setCountries] = useState<CountryProps[]>([]);

  useEffect(() => {
    findAll(setCountries, url);
  }, [url]);

  return {countries, setCountries};
}

const App: React.FC = () => {
  const {countries, setCountries}  = useCountries(defaultUrl);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Search setCountries={setCountries}/>
      <main>
      {
        countries.map(country => <Country
          name={country.name}
          region={country.region}
          flag={country.flag}
          capital={country.capital}
          population={country.population} />)
      }
      </main>
    </div>
  );
}

export default App;
