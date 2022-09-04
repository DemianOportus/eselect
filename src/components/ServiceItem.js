import { Box, Typography, Button } from "@mui/material";

function ServiceItem(props) {
  return (
    <>
      <Button variant="text">
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Box
            sx={{
              width: "25%",
            }}
          >
            <img width={"100%"} src={props.image} />
          </Box>
          <Box
            sx={{
              width: "50%",
              padding: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
            }}
          >
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "start" }}
            >
              <Typography variant="h5">{props.service}</Typography>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "start",
                textAlign: "left",
                textTransform: "capitalize",
              }}
            >
              <Typography variant="subtitle1">{props.description}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "25%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">{"CA$" + props.price}</Typography>
          </Box>
        </Box>
      </Button>
    </>
  );
}

export default ServiceItem;
