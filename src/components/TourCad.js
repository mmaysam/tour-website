import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AccessAlarms } from '@mui/icons-material';
import Rating from '@mui/material/Rating';


const TourCard = () => {
    return ( 
        
        <Grid item xs={3}>
            <Paper elevation={5} square>
                <img src="https://media.gettyimages.com/photos/uzungol-in-trabzon-turkey-picture-id1217868183?s=2048x2048" 
                 alt=""
                 className="img" />
             <Box paddingX={2}>
                <Typography components="subtitle1" component="h2">
                    visit trabzon
                </Typography>
                <Box
                 sx={{
                     display: "flex",
                     alignItems: "center"
                 }}
                
                >
             <AccessAlarms sx={{
                 
                 width:12

             }} />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                    5 hours
                </Typography>
            </Box>
            <Box 
              sx={{
                     display: "flex",
                     alignItems: "center"
                 }}
                 marginTop={3}
            >
             <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
             <Typography variant="body2" component="p" marginLeft={0.5}>
                    4.5
                </Typography>
                <Typography variant="body2" component="p" marginLeft={0.5}>
                    566 (reviews)
                </Typography>
            </Box>
            </Box>
            

             </Paper> 
        </Grid>
        
    )
}

export default TourCard;
