import React from "react";
import './search.css'

interface SearchPropTypes {
    setCountries: Function
}

const Search: React.FC<SearchPropTypes> = () => {
    return (
        <div className="search-container">
            <div className="search">
                <input type="text" placeholder="Search for a country..."/>
            </div>
        </div>
    )
}

export default Search;