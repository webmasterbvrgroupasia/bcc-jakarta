import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


export default function Calendar({ handleClick, event }) {
    const color = "rgba(255,255,255,0.25)";

    return (
        <div className="">
            <LocalizationProvider
                dateAdapter={AdapterDayjs}>
                <DateCalendar
                    onChange={handleClick}
                    sx={{
                        "& .MuiPickersDay-root": {
                            color:  'white',
                            backgroundColor: color
                        },
                        color: 'white',
                        svg: { color: "#fff" },
                        input: {color: "#fff"  },
                        label: { color: "#fff"  },
                        span: {color: "#fff" },
                    }}
                />
            </LocalizationProvider>
        </div>
    );
}
