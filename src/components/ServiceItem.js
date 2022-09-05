import { Box, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { getFunctions, httpsCallable } from "firebase/functions";
import { useState } from "react";

function ServiceItem(props) {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    const functions = getFunctions();
    const checkout = httpsCallable(functions, "checkout");
    console.log(props.name);
    checkout({ name: props.name }).then((result) => {
      console.log(result.data);
      window.location.href = result.data;
    });
  }
  return (
    <>
      <LoadingButton loading={loading} variant="outlined" onClick={handleClick}>
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
              <Typography variant="h5">{props.name}</Typography>
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
      </LoadingButton>
    </>
  );
}

export default ServiceItem;
