import React from "react";
import DashOption from "./dashoption";

function CreateDashOption(dashoption) {
  return (
    <DashOption
      key={dashoption.id}
      img={dashoption.img}
      title={dashoption.title}
      action={dashoption.action}
    />
  );
}

export default CreateDashOption;
