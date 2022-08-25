import {React, useState} from 'react'
import { ReactDOM } from 'react'


const Search = () => {

    const [loc, setLoc] = useState("City")

    function handleChange(e){
        e.preventDefault()
        setLoc(e.target.value)
   
    } 


    return (
        <div>
            <h1>Input the city and state in the following manner: city, state</h1>
            <input type="text" value={loc} onChange={handleChange} placeholder='city, state'/>

            <h1>Finding hotspots for {loc}...</h1>

        </div>
    )





}

export default Search