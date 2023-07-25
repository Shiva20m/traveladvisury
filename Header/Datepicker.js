import React, { useState } from "react";
import DatePicker from "react-datepicker";
import  "react-datepicker/dist/react-datepicker.module.css";


function DatePick () {
    const [selectedDate, setSelectedDate] = useState();
    return(
      
        <DatePicker
         selected={selectedDate} 
         onChange={date => setSelectedDate(date)}
         dateFormat= 'yyyy/MM/dd'
         minDate={new Date()}
         isClearable
         placeholderText="Enter Date"
         />
    );
}
export default DatePick;

