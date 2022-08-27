import {React, useState} from 'react'
import { ReactDOM } from 'react'


const Search = () => {

    const [loc, setLoc] = useState("")
    const [req, setReq] = useState("")
    const apikey = "5ae2e3f221c38a28845f05b60b1d4a89c1550e9b61ed8f906938626f"
    const [coors, setCoors] = useState({'lat':"", 'lon':""})
    var name = ""
    var spotsQuery = "http://api.opentripmap.com/0.1/en/places/radius?apikey="+apikey
    //const [coordQuery, setCoord]  = useState("")
    var coordQuery = ""
    function handleChange(e){
        e.preventDefault()
        setLoc(e.target.value)
   
    } 

    function handleSubmit(e){
        e.preventDefault()
        //setReq(loc)
        name = loc
        
       // setCoord("http://api.opentripmap.com/0.1/en/places/geoname?apikey="+apikey+"&name="+name )
       coordQuery = "http://api.opentripmap.com/0.1/en/places/geoname?apikey="+apikey+"&name="+name 
        //setCoors({'lat': 4, 'lon': -7} )
        fetch(coordQuery)
            .then(res => res.json())
            .then( result =>  setCoors({'lat': result["lat"], 'lon': result["lon"]}  ) )
            .catch(error => { setCoors({'lat': 'error', 'lon': 'error'})
                            console.log(error) })


    }

    return (
        <div>
            <h1>Input the city and state in the following manner: city, state</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={loc} onChange={handleChange} placeholder='city, state'/>
                <button type="Submit">Submit</button>
            </form >

            {coors['lat'] && 
                <div>
                    <h1>Finding hotspots for {loc}...</h1>
                    <h1>Lattitude: {coors['lat']}, Longitude: {coors['lon']}</h1>
                </div>
            }
            
        </div>
    )





}

export default Search