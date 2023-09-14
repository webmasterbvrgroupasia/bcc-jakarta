import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


export default function Calendar({ handleClick, event }) {
    const color = "#ffffff";


    return (
        <div className="">
            <LocalizationProvider
                dateAdapter={AdapterDayjs}>
                <DateCalendar
                    onChange={handleClick}
                    sx={{
                        "& .MuiPickersDay-root": {
                            color:  'white',
                            backgroundColor: new Date().getDate() === 14 ? 'red' :'white'
                        },
                        color: 'white',
                        svg: { color },
                        input: { color },
                        label: { color },
                        span: {color},
                    }}
                />
            </LocalizationProvider>
        </div>
    );
}
