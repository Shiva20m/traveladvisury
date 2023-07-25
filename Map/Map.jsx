import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style.js';

const Map= ({setCoordinates, setBounds, coordinates, places})=> {
    const classes = useStyles([]);
    const isMobible = useMediaQuery('(min-width:600px)');
    
    return(
        <div className= {classes.mapContainer}>
          <GoogleMapReact
            bootsstrapURLkeys={{ key: 'AIzaSyBFunsUmq7N12nT29zMLRFg_srdOdtHSUo'}}
            defaultCenter={coordinates}
            center= {coordinates}
            defaultZoom={14}
            margin={[50, 50, 50 ,50]}
            onChange={(event) => {
              setBounds({ne: event.marginBounds.ne, sw: event.marginBounds.sw});

              setCoordinates({lat: event.center.lat, lng: event.center.lng});
            }}
            onChildClick={''}
            >
              {places?.map((place, i) =>(
                <div>
                  className={classes.markerContainer}
                  lat={Number(place.latitude)}
                  lng={Number(place.longitude)}
                  key={i}
                  {
                    isMobible ? (
                      <LocationOnOutlinedIcon color='primary' fontSize='large'/>
                    ): (
                      <Paper elevation={3} className={classes.paper}>
                      <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                      <img
                        className={classes.pointer}
                        src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                        alt={place.name}
                      />
                     
                    </Paper>
                    )
                  }
                </div>
              ))}


          </GoogleMapReact>
        </div>
    )
}



export default Map;