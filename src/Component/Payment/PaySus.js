/* import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.scss";

const PaySus = () => {
    const [dob, setDob] = useState(new Date());
    const handleChange = date => {
        setDob(date);
      };
    const handleSelect = date => {
        setDob(date);
      };

    return (
        <div>
            <h2>This is Paid</h2>
            <DatePicker selected={dob} onSelect={handleSelect} onChange={handleChange}/>

        </div>
    );
};

export default PaySus; */