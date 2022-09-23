import { Box, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { useRedirect } from "./RedirectContext";

function ServiceItem(props) {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  let value = useRedirect();
  const [loading, setLoading] = useState(false);

  function handleClick() {
    props.change("Choose Appointment date");
    props.body(true);
    setLoading(true);
    value.runName(props.name);
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
              <ThemeProvider theme={theme}>
                <Typography variant="h5">{props.name}</Typography>
              </ThemeProvider>
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
              <ThemeProvider theme={theme}>
                <Typography variant="subtitle2">{props.description}</Typography>
              </ThemeProvider>
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
            <ThemeProvider theme={theme}>
              <Typography variant={"h5"}>{"CA$" + props.price}</Typography>
            </ThemeProvider>
          </Box>
        </Box>
      </LoadingButton>
    </>
  );
}

export default ServiceItem;
