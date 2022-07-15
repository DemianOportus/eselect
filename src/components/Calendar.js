import * as React from "react";
import { useState } from "react";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";

export default function Calendar() {
  const [date, setDate] = useState(new Date());

  return (
    <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
  );
}
