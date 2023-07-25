/* eslint-disable no-whitespace-before-property */
import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './style.js';

const List =({ places })=>{
    const classes =useState([]);
    const [type, setType] = useState(['Attraction']);
    const [Rating, setRating] = useState(['Filter']);


    return(
        <div className={classes.container}>
            <Typography variant="h4"> Check Resturant, Hotels & Attraction around you</Typography>
            <FormControl className={classes.FormControl}>
                <InputLabel>type</InputLabel>
                <Select value={type} onChange={(event)=>setType(event.target.value)}>
                    <MenuItem value="Resturant">Resturant</MenuItem>
                    <MenuItem value="Hotels">Hotels</MenuItem>
                    <MenuItem value="Attraction">Attraction</MenuItem>
                </Select>
            </FormControl>
           {/* for rating filter */}
           <FormControl className={classes.FormControl}>
                <InputLabel>Filter</InputLabel>
                <Select value={Rating} onChange={(event)=>setRating(event.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={1}>above 1.0</MenuItem>
                    <MenuItem value={2}>above 2.0</MenuItem>
                    <MenuItem value={3}>above 3.0</MenuItem>
                    <MenuItem value={4}>above 4.0</MenuItem>
                    <MenuItem value={4.5}>above 4.5</MenuItem>
                    
                   
                </Select>
            </FormControl>

            <Grid container spacing={3} className={classes.list}>
            {places ?.map((place, i) => (
              <Grid item key={i} xs={12}>
               <PlaceDetails place={place} />

               </Grid>
            ))}
          </Grid>
        </div>
    )
}

export default List;


