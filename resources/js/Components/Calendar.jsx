import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Calendar({ handleClick }) {

    return (
        <div className="bg-white rounded-md border-white">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar onChange={handleClick} />
            </LocalizationProvider>
        </div>
    );
}
