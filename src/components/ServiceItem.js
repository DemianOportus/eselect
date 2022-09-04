import { Box, Typography } from "@mui/material";

function ServiceItem(props) {
  return (
    <>
      <Box sx={{ display: "flex" }} border={"2px solid black"}>
        <Box
          sx={{
            width: "25%",
            backgroundColor: "gray",
          }}
        ></Box>
        <Box
          sx={{
            width: "50%",
            padding: 1,
          }}
        >
          <Typography variant="h5">{props.service}</Typography>
          <Typography variant="subtitle1">{props.description}</Typography>
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
    </>
  );
}

export default ServiceItem;
