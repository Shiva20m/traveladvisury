import React from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import searchIcons from '@material-ui/icons/Search';
import useStyles from './style'
import DatePick from "./Datepicker";
import { BorderStyleRounded } from "@material-ui/icons";

const Header = () => {
    const classes = useStyles();
    return(
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
               <Typography variant="h5" className={classes.titleimage}>
                   <img src={require('./Erusu logo.png')} alt="Eurso Consultant" srcset="" />
               </Typography>

               <Box display="flex">
                <h2>select date here</h2>
                <Typography variant="h6" className={classes.titleDate}>
                    <div style={{margin: 15}}>
                        
                    <DatePick />
                    </div>
                </Typography>
                </Box>

                <Box display= "flex">
                <Typography variant="h6" className={classes.title}>
                    explore new places 
                </Typography>
                
                    <div className={classes.search}>
                        <div className={classes.searchIcons}>
                            <searchIcons />
                        </div>
                        
                        <InputBase placeholder="Where to?" classes={{ root: classes.inputRoot, input: classes.inputInput, }} />
                    </div>
                    
                
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default Header;