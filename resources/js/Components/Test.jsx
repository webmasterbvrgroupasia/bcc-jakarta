import React, { useState } from 'react';

const Calendar = () => {
    const [date, setDate] = useState(new Date());

    // Fungsi untuk mengubah tanggal saat tombol bulan sebelumnya ditekan
    const prevMonth = () => {
        const newDate = new Date(date);
        newDate.setMonth(date.getMonth() - 1);
        setDate(newDate);
    };

    // Fungsi untuk mengubah tanggal saat tombol bulan berikutnya ditekan
    const nextMonth = () => {
        const newDate = new Date(date);
        newDate.setMonth(date.getMonth() + 1);
        setDate(newDate);
    };

    // Logika untuk membuat tampilan kalender
    const renderCalendar = () => {
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

        const days = [];

        // Menambahkan hari-hari sebelum hari pertama bulan
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="empty-day"></div>);
        }

        // Menambahkan hari-hari dalam bulan
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(<div key={i} className="calendar-day">{i}</div>);
        }

        return days;
    };

    return (
        <div className="calendar">
            <div className="calendar-header">
                <button onClick={prevMonth}>Bulan Sebelumnya</button>
                <h2>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
                <button onClick={nextMonth}>Bulan Berikutnya</button>
            </div>
            <div className="calendar-body">
                {renderCalendar()}
            </div>
        </div>
    );
};

export default Calendar;
