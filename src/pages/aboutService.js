import { Grid, Typography, Container } from "@mui/material";

function AboutService(props){
    return(   
        <Container>
            <Grid alignItems="center" style={{paddingTop: "80px"}}>     
                <Typography variant="h3" className="subtitle"> {props.service} </Typography>
                <hr
                    style={{
                        backgroundColor: "#1876d0",
                        opacity: 100,
                        width: "80px",
                        height: "3px",
                        border: "none",
                        margin: "30px auto 80px auto",
                    }}
                ></hr>
                <Grid item style={{padding: "0px 70px"}}>
                    <Typography
                        style={{
                            fontSize: "3.5vh",
                            textAlign: "center",
                        }}
                    >
                        {props.description}
                    </Typography>
                </Grid>
                <Typography>Meet our team!</Typography>
                <Typography>{props.company}</Typography>
            </Grid> 
        </Container> 
  );
}

export default AboutService;