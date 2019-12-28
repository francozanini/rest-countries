import React from 'react';
import './country.css'

export interface CountryProps {
  flag: string,
  name: string,
  population: number,
  region: string,
  capital: string,
}

export default function Country({ flag, name, population, region, capital }: CountryProps) {
  return (
    <section className="country-card">
      <img className="flag" src={flag} alt={name} />
      <div className="info">
        <h3 className="info-item">{name}</h3>
        <p className="info-item"><span className="strong-text">Population:</span> {population.toLocaleString()}</p>
        <p className="info-item"><span className="strong-text">Region:</span> {region}</p>
        <p className="info-item"><span className="strong-text">Capital:</span> {capital}</p>
      </div>
    </section>
  );
}