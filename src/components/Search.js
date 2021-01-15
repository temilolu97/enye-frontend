import { useState } from "react";

const Search = ({query,changeQuery}) => {
    const handleChange =e=>{
        changeQuery(e.target.value)
    }
    
    return ( 
        <div class="searchbar mb-4">
          <input class="search_input" type="text" value={query} placeholder="Search for Patient" onChange={handleChange}/>
          <a href="#" class="search_icon"><i class="fa fa-search"></i></a>
        </div>
     );
}
 
export default Search;