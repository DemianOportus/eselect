import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Box,
  Stack,
  DialogContent,
  Button,
} from "@mui/material";
import ServiceItem from "./ServiceItem";
import { getDocs, collection } from "firebase/firestore";
import useMediaQuery from "@mui/material/useMediaQuery";
import { db } from "../firebase";
import { useTheme } from "@mui/material/styles";
import Calendar from "./Calendar";
import { RedirectProvider, useRedirect } from "./RedirectContext";
import { getFunctions, httpsCallable } from "firebase/functions";

function ServiceDialog(props) {
  const theme = useTheme();
  const [header, setHeader] = useState("Service");
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [body, setBody] = useState(false);
  const [isRedirected, setIsRedirected] = useState(false);
  let cal = <Calendar />;

  async function getServices() {
    let servicesRef = collection(db, "Service");
    let servicesData = await getDocs(servicesRef);
    let data = [];
    servicesData.forEach((doc) => {
      data.push(doc.data());
    });
    setServices(data);
    console.log(services);
  }

  let serviceDom = services.map((service) => (
    <ServiceItem
      change={setHeader}
      body={setBody}
      redirect={isRedirected}
      name={service["name"]}
      description={service["description"]}
      price={service["price"]}
      image={service["image"]}
    />
  ));
  // ()  {
  //   setIsRedirected(true);
  //   console.log(isRedirected);
  // }
  let value = useRedirect();
  console.log(value);
  useEffect(() => {
    console.log(value.red);
    if (value.red) {
      const functions = getFunctions();
      const checkout = httpsCallable(functions, "checkout");
      console.log("name>>>", value.name);
      checkout({ name: value.name }).then((result) => {
        console.log(result.data);
        window.location.href = result.data;
      });
    }
  }, [value.red, value.name]);

  useEffect(() => {
    console.log("loaded before page load.");
    getServices();
    console.log("end");
    setLoading(false);
  }, []);
  let dialogDom = (
    <Dialog
      fullWidth={true}
      maxWidth={"sm"}
      onClose={props.close}
      open={props.open}
      fullScreen={fullScreen}
    >
      <DialogTitle></DialogTitle>
      <DialogContent>
        <Stack spacing={2} alignItems={"stretch"}>
          {body ? <h1>{cal}</h1> : serviceDom}
        </Stack>
      </DialogContent>

      <DialogActions>
        {body ? (
          <Button
            onClick={() => {
              value.runUse(true);
            }}
          >
            Agree
          </Button>
        ) : (
          <></>
        )}
      </DialogActions>
    </Dialog>
  );
  return <>{loading ? <h1>Loading</h1> : dialogDom}</>;
}

export default ServiceDialog;
