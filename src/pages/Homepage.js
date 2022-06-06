import React from 'react';
import {Box, Grid, Typography, Button, ImageListItem } from '@mui/material';
import ResponsiveAppBar from "../components/NavBar";
//import img1  from "../images/personal-selection.jpeg";
import styled from '@emotion/styled';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Homepage() {
    const theme = createTheme({
        components: {
          // Name of the component
          MuiButton: { 
            defaultProps: {
              variant: 'contained',
              fullWidth: 'true',
              },
            },

          },
      });
    const Item = styled(Grid)({
        justifyContent:"center", 
        alignItems:"center",
        display: 'flex',
        
    });
    Item.defaultProps = {
        item: true,
        md: 4,
        xs: 6,
        
    };
    return <> 
    
    <ResponsiveAppBar/>
    <ThemeProvider theme={theme}>
    <Box bgcolor="white" > 

    <Grid sx={{ position: 'relative' }}> 
    <Typography variant="h1" sx={{ position: 'absolute', zIndex: 1, top: 0, left: 0 }}>Find the service that you need</Typography>
    <img  style={{ width: "100%", marginBottom: "1%", display: "inline-block" }} src="../../images/model2.jpeg" alt="Picture personal selection" />
    </Grid> 
    {/* <img src="../../images/personal-selection.jpeg" alt="Picture personal selection"/> */}

    <Grid container justifyContent="center" alignItems="center" >
        
        
        <Grid container spacing={2} >
            <Item >
                <Button color="secondary" onClick={event => alert("Book Dates")}>
                <CalendarMonthIcon fontSize='large'
                /> Book Dates
                </Button>
            </Item>
            <Item >
                <Button><LocationSearchingIcon fontSize='large'/>Whatever</Button>
            </Item>
            <Item >
                <Button><LocationSearchingIcon fontSize='large'/>Whatever</Button>
            </Item>
            <Item >
                <Button><LocationSearchingIcon fontSize='large'/>Whatever</Button>
            </Item>
            <Item >
                <Button ><LocationSearchingIcon fontSize='large'/>Whatever</Button>
            </Item>
            <Item>
                <Button > <ConnectWithoutContactIcon fontSize='large'/> Contact us</Button>
            </Item>
        </Grid>
</Grid>
</Box>
</ThemeProvider>
</>
}
export default Homepage;