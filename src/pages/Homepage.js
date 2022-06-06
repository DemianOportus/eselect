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
    <Box bgcolor="black" > 
    
    
    {/* <img src="../../images/personal-selection.jpeg" alt="Picture personal selection"/> */}

    <Grid container justifyContent="center" alignItems="center">
        <img src="../../images/model.png" alt="Picture personal selection"/>
        
        <Grid container spacing={2} >
            <Item >
                <Button color="secondary" >
                <CalendarMonthIcon fontSize='large'/> Book Dates
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