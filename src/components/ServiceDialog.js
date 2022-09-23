import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
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
import { useRedirect } from "./RedirectContext";
import { getFunctions, httpsCallable } from "firebase/functions";

function ServiceDialog(props) {
  const theme = useTheme();
  const [header, setHeader] = useState("Service");
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [body, setBody] = useState(false);
  let calendar = <Calendar />;

  async function getServices() {
    let servicesRef = collection(db, "Service");
    let servicesData = await getDocs(servicesRef);
    let data = [];
    servicesData.forEach((doc) => {
      data.push(doc.data());
    });
    setServices(data);
  }

  let serviceDom = services.map((service) => (
    <ServiceItem
      change={setHeader}
      body={setBody}
      name={service["name"]}
      description={service["description"]}
      price={service["price"]}
      image={service["image"]}
    />
  ));

  let value = useRedirect();

  useEffect(() => {
    if (value.red) {
      const functions = getFunctions();
      const checkout = httpsCallable(functions, "checkout");
      checkout({ name: value.name }).then((result) => {
        window.location.href = result.data;
      });
    }
  }, [value.red, value.name]);

  useEffect(() => {
    getServices();
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
      <DialogTitle>{header}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} alignItems={"stretch"}>
          {body ? <>{calendar}</> : serviceDom}
        </Stack>
      </DialogContent>

      <DialogActions>
        {body ? (
          <Button
            onClick={() => {
              value.runUse(true);
            }}
          >
            Proceed to checkout
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
