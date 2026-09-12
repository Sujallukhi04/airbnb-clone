import React from 'react';
import { ChevronLeft, ChevronRight, Keyboard } from '../../lib/icons.jsx';
import { listing } from '../../data/propertyData.js';

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function RenderMonth({ year, month }) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`b-${i}`} className="cal-day blank" />);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const isStart = month === 9 && d === 18;
    const isEnd = month === 9 && d === 23;
    const inRange = month === 9 && d > 18 && d < 23;

    let cls = 'cal-day';
    if (isStart) cls += ' start';
    else if (isEnd) cls += ' end';
    else if (inRange) cls += ' in-range';

    days.push(
      <div key={d} className={cls}>
        {d}
      </div>
    );
  }

  return (
    <div className="cal-month">
      <div className="cal-month__title">
        {MONTH_NAMES[month]} {year}
      </div>
      <div className="cal-dow">
        {DAYS.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>
      <div className="cal-days">{days}</div>
    </div>
  );
}

export default function CalendarPicker() {
  return (
    <div className="section calendar">
      <b className="h">{listing.calendar.heading}</b>
      <div className="range">{listing.calendar.range}</div>

      <div className="cal-grid">
        <div className="cal-nav">
          <button aria-label="Previous month" type="button">
            <ChevronLeft />
          </button>
          <button aria-label="Next month" type="button">
            <ChevronRight />
          </button>
        </div>

        {listing.calendar.months.map((m, idx) => (
          <RenderMonth key={idx} year={m.year} month={m.month} />
        ))}
      </div>

      <div className="cal-foot">
        <span className="kbd" title="Keyboard shortcuts">
          <Keyboard />
        </span>
        <button className="clear" type="button">
          Clear dates
        </button>
      </div>
    </div>
  );
}
