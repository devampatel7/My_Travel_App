import {React, useState} from 'react'
import { ReactDOM } from 'react'


const Search = () => {

    const [loc, setLoc] = useState("")
    const [spot, setSpot] = useState("")
    const apikey = "5ae2e3f221c38a28845f05b60b1d4a89c1550e9b61ed8f906938626f"
    const [coors, setCoors] = useState({'lat':"", 'lon':""})
    var name = ""
    // var spotsQuery = "http://api.opentripmap.com/0.1/en/places/radius?apikey="+apikey
    var spotsQuery = ""
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
        
        



       spotsQuery = "http://api.opentripmap.com/0.1/en/places/radius?radius=10000&apikey="+apikey
       // setCoord("http://api.opentripmap.com/0.1/en/places/geoname?apikey="+apikey+"&name="+name )
       coordQuery = "http://api.opentripmap.com/0.1/en/places/geoname?apikey="+apikey+"&name="+name 
        //setCoors({'lat': 4, 'lon': -7} )

        // getData = async() => {
        //     try{
        //     const result = await fetch(coordQuery).then(res => res.json())
        //     const coor = {'lat': result["lat"], 'lon': result["lon"]}

        //     }
        //     catch(error){
        //         console.log("Error", error)
        //     }

        // }

        fetch(coordQuery).then(res=> res.json()).then(result => [result["lat"], result["lon"]])
        .then( points => {
            fetch(spotsQuery+"&lat="+points[0]+"&lon="+points[1])
                .then(raw => raw.json()).then(rawJ => rawJ["features"])
                .then(features => features[0]["properties"]).then(properties => setSpot(properties["name"]))

        } )

        // fetch(coordQuery)
        //     .then(res => res.json())
        //     .then( result =>  setCoors({'lat': result["lat"], 'lon': result["lon"]}  ) )
        //     .catch(error => { setCoors({'lat': 'error', 'lon': 'error'})
        //                     console.log(error) })


    }

    return (
        <div>
            <h1>Input the city and state in the following manner: city, state</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={loc} onChange={handleChange} placeholder='city, state'/>
                <button type="Submit">Submit</button>
            </form >

            { spot && <h1> The first tourist spot from the list within 10km is {spot}</h1>
            
            
            /* {coors['lat'] && 
                <div>
                    <h1>Finding hotspots for {loc}...</h1>
                    <h1>Lattitude: {coors['lat']}, Longitude: {coors['lon']}</h1>
                </div>
            } */}

            
            
        </div>
    )





}

export default Search