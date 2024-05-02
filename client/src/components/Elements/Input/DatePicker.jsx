import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DateInput = ({ name, label }) => {
  return (
    <>
      <label htmlFor={name} className="labelArticle text-md">
        Published at
      </label>
      <DatePickerComponent name={name}  />
    </>
  );
};

export const DatePickerComponent = ({ name, label }) => {
  const [value, setValue] = React.useState(dayjs());

  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <div className="flex flex-col font-bold w-full md:w-[525px]">
            <DatePicker
              name={name}
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </div>
        </DemoContainer>
      </LocalizationProvider>
  );
};

DatePickerComponent.defaultProps = {
  name: "date",
  label: "Tanggal",
};

export default DateInput
