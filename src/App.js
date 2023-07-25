import React,{useEffect, useState} from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import {getApiData} from './api'

import Header from "./component/Header/Header";
import List from "./component/List/List";
import Map from "./component/Map/Map";
import PlaceDetails from "./component/PlaceDetails/PlaceDetails";


const App= () => {
    const [places, setPlaces] = useState({ lat :0, lng: 0});
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(({ coords:{latitude, longitude} }) =>{
            setCoordinates({lat: latitude, lng: longitude});
        })
    })

    useEffect(() =>{
        console.log(coordinates, bounds)
        getApiData(bounds.sw, bounds.ne);
       
    }, [coordinates, bounds]);



    return (
       <>
       <CssBaseline />
       <Header />

        <Grid container spacing={3} style={{ width: '100%'}}>
            {/* item for large device xs=12 for medium md =4 */}
            <Grid item xs={12} md={4}>
                {/* contins list component */}
                <List places={places}/>

            </Grid>

            <Grid item xs={12} md={8}>
                {/* contins- map component */}
                <Map 
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
                places={places}
                
                />
            </Grid>

            <Grid item xs={12} md={4}>
              
            </Grid>
        </Grid>
       
       </>
    );
}

export default App;