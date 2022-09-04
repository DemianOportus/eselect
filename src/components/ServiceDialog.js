import { useState, useEffect } from "react";
import { Dialog, DialogTitle, Box, Stack, DialogContent } from "@mui/material";
import ServiceItem from "./ServiceItem";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

function ServiceDialog(props) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

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
      service={service["name"]}
      description={service["description"]}
      price={service["price"]}
    />
  ));

  useEffect(() => {
    console.log("loaded before page load.");
    getServices();
    console.log("end");
    setLoading(false);
  }, []);
  let dialogDom = (
    <Dialog
      fullWidth={true}
      maxWidth={"lg"}
      onClose={props.close}
      open={props.open}
    >
      <DialogTitle>Service</DialogTitle>
      <DialogContent>
        <Stack spacing={2} alignItems={"stretch"}>
          {serviceDom}
        </Stack>
      </DialogContent>
    </Dialog>
  );
  return <>{loading ? <h1>Loading</h1> : dialogDom}</>;
}

export default ServiceDialog;
