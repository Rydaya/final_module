import React from "react";

const Search = ({value, onChangeValue}) => {
    return(
        <input className="container__search" value={value} onChange={(e) => onChangeValue(e.target.value)}/>
    )
}

export default Search;