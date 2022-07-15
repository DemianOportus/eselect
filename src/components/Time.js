import * as React from "react";
import AlarmIcon from "@mui/icons-material/Alarm";
import SnoozeIcon from "@mui/icons-material/Snooze";
import TextField from "@mui/material/TextField";
import ClockIcon from "@mui/icons-material/AccessTime";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { Box } from "@mui/material";

function Timer() {
  const [value, setValue] = React.useState(new Date());
  return (
    <Box sx={{ width: "100px", hight: "100px", outline: "solid 2px #000" }}>
      <StaticDateTimePicker
        displayStaticWrapperAs="desktop"
        openTo="month"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </Box>

    // <MobileDateTimePicker
    //   disableFuture
    //   hideTabs
    //   openTo="hours"
    //   value={value}
    //   onChange={(newValue) => {
    //     setValue(newValue);
    //   }}
    //   components={{
    //     LeftArrowIcon: AlarmIcon,
    //     RightArrowIcon: SnoozeIcon,
    //     OpenPickerIcon: ClockIcon,
    //   }}
    //   renderInput={(params) => <TextField {...params} />}
    // />
  );
}

export default Timer;
