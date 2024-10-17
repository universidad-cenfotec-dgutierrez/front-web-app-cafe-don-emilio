import React, { useState, useEffect } from 'react';
import { CalendarIcon, WorldIcon } from '../icons';
import "./calendar.component.scss";

/**
 * Page component showing the reservation site
 * @author shantyCerdas
 */

interface TourSchedulerProps {
  onDateSelect: React.Dispatch<React.SetStateAction<string | null>>;
  onTimeSelect: React.Dispatch<React.SetStateAction<string | null>>;
}

// Function to format a date as "6 November"
const formatDateInSpanish = (date: Date): string => {
  const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  return `${day} ${month}`;
};

// Function to get the start of the week (Monday)
const getStartOfWeek = (date: Date): Date => {
  const startOfWeek = new Date(date);
  const day = startOfWeek.getDay();
  const distance = (day === 0 ? -6 : 1) - day; // Adjust if Sunday (0) to go to the previous Monday
  startOfWeek.setDate(startOfWeek.getDate() + distance);
  return startOfWeek;
};

// Function to add months to a date
const addMonths = (date: Date, months: number): Date => {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

// Function to get date ranges from start to end date
const getDateRanges = (startDate: Date, endDate: Date): string[] => {
  const dateRanges = [];
  let currentStartDate = new Date(startDate);

  while (currentStartDate < endDate) {
    const currentEndDate = new Date(currentStartDate);
    currentEndDate.setDate(currentEndDate.getDate() + 6); // 1 week range

    dateRanges.push(`${formatDateInSpanish(currentStartDate)} - ${formatDateInSpanish(currentEndDate)}`);

    currentStartDate.setDate(currentStartDate.getDate() + 7); // Move to next week
  }

  return dateRanges;
};

// Function to get the date for a specific day of the week
const getDateForDay = (startOfWeek: Date, dayOffset: number): string => {
  const date = new Date(startOfWeek);
  date.setDate(date.getDate() + dayOffset);
  return date.getDate().toString(); // Return just the day of the month
};

export const TourScheduler: React.FC<TourSchedulerProps> = ({
  onDateSelect,
  onTimeSelect
}) => {
  const [currentStartDate, setCurrentStartDate] = useState<Date>(new Date());
  const [selectedDay, setSelectedDay] = useState<string>("SAB");
  const [selectedDateRange, setSelectedDateRange] = useState<string>("6 Noviembre - 12 Noviembre");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Español");
  const [dateRanges, setDateRanges] = useState<string[]>([]);

  const daysOfWeek = ["LUN", "MAR", "MIER", "JUE", "VIE", "SAB", "DOM"];

  useEffect(() => {
    const today = new Date();
    const startOfWeek = getStartOfWeek(today);
    setCurrentStartDate(startOfWeek);

    const threeMonthsLater = addMonths(startOfWeek, 3);
    const ranges = getDateRanges(startOfWeek, threeMonthsLater);
    setDateRanges(ranges);
    setSelectedDateRange(ranges[0]);
  }, []);

  useEffect(() => {
    if (currentStartDate) {
      const threeMonthsLater = addMonths(currentStartDate, 3);
      const ranges = getDateRanges(currentStartDate, threeMonthsLater);
      setDateRanges(ranges);
      const currentRange = ranges.find(range => range.startsWith(formatDateInSpanish(currentStartDate)));
      if (currentRange) setSelectedDateRange(currentRange);
    }
  }, [currentStartDate]);

  const handleDayChange = (day: string) => {
    setSelectedDay(day);
    // Format the date and notify parent
    const selectedDate = getDateForDay(currentStartDate, daysOfWeek.indexOf(day));
    onDateSelect(selectedDate);
  };
  

  const handlePreviousWeek = () => {
    const previousStartDate = new Date(currentStartDate);
    previousStartDate.setDate(previousStartDate.getDate() - 7);
    if (previousStartDate >= getStartOfWeek(new Date())) { // Ensure we don’t go past the current date
      setCurrentStartDate(previousStartDate);
    }
  };

  const handleNextWeek = () => {
    const nextStartDate = new Date(currentStartDate);
    nextStartDate.setDate(nextStartDate.getDate() + 7);
    if (nextStartDate <= addMonths(getStartOfWeek(new Date()), 3)) { // Ensure we don’t go past the 3-month limit
      setCurrentStartDate(nextStartDate);
    }
  };

  const handleDateRangeChange = (range: string) => {
    setSelectedDateRange(range);
    // Extract start date from the selected range
    const [startDateStr] = range.split(" - ");
    const [day, month] = startDateStr.split(" ");
    const monthIndex = new Date(Date.parse(month + " 1, 2012")).getMonth(); // Get month index from the month name
    const newStartDate = new Date(currentStartDate);
    newStartDate.setDate(parseInt(day));
    newStartDate.setMonth(monthIndex);
    setCurrentStartDate(getStartOfWeek(newStartDate));
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  const isFirstWeek = currentStartDate <= getStartOfWeek(new Date());
  const isLastWeek = currentStartDate >= addMonths(getStartOfWeek(new Date()), 3);

  return (
    <>
      <div className="row justify-content-left align-items-center mb-4">
        <div className="col-auto d-flex align-items-center">
          <CalendarIcon />
          <i className="bi bi-calendar3 me-2"></i>
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            id="dateDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span>{selectedDateRange}</span>
          </button>
          <div className="dropdown ms-2">
            <ul className="dropdown-menu" aria-labelledby="dateDropdown">
              {dateRanges.map((range, index) => (
                <li key={index}>
                  <button
                    className="dropdown-item font-weight"
                    onClick={() => handleDateRangeChange(range)}
                  >
                    {range}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-auto d-flex align-items-center ms-5">
          <i className="bi bi-translate me-2"></i>
          <div className="dropdown">
            <WorldIcon />
            <button
              className="btn btn-light dropdown-toggle font-weight"
              type="button"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Idioma del tour: {selectedLanguage}
            </button>
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
              <li>
                <button
                  className="dropdown-item font-weight"
                  onClick={() => setSelectedLanguage("Español")}
                >
                  Español
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item font-weight"
                  onClick={() => setSelectedLanguage("Inglés")}
                >
                  Inglés
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Day buttons with arrows */}
      <div className="row justify-content-center mb-2">
        <div className="col-auto">
          <button
            className={`btn btn-outline-secondary me-2 ${
              isFirstWeek ? "disabled" : ""
            } arrow-btn custom-btn`}
            onClick={handlePreviousWeek}
            disabled={isFirstWeek}
          >
            <i className="bi bi-arrow-left">
              <img src="/Left-Arrow.png" alt="left-arrow" />
            </i>
          </button>

          <div className="btn-group" role="group">
            {daysOfWeek.map((day) => (
              <button
                key={day}
                type="button"
                className={`btn btn-outline-${
                  selectedDay === day ? "primary active" : "secondary custom-btn"
                } d-flex flex-column align-items-center`}
                onClick={() => handleDayChange(day)}
              >
                <div className="first-div d-flex justify-content-center align-items-center">
                  {day}
                </div>
                <div className="second-div d-flex justify-content-center align-items-center">
                  {getDateForDay(currentStartDate, daysOfWeek.indexOf(day))}
                </div>
              </button>
            ))}
          </div>

          <button
            className={`btn btn-outline-secondary ms-2 ${
              isLastWeek ? "disabled" : ""
            } arrow-btn custom-btn`}
            onClick={handleNextWeek}
            disabled={isLastWeek}
          >
            <i className="bi bi-arrow-right">
              <img src="/Right-Arrow.png" alt="right-arrow" />
            </i>
          </button>
        </div>
      </div>
    </>
  );
};
