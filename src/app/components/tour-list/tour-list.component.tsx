import React, { useState } from 'react';
import "./tour-list.component.scss";

interface Tour {
    time: string;
    title: string;
    available: string;
    duration: string;
    guide: string;
    almostFull: boolean;
}

interface TourListProps {
    selectedDate: string | null;
    onTimeSelect: (time: string) => void;
}

export const TourList: React.FC<TourListProps> = ({ selectedDate, onTimeSelect }) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Example tour data
    const tours: Tour[] = [
        {
            time: "8:00 a.m.",
            title: "Tour de Café Don Emilio",
            available: "6 cupos disponibles",
            duration: "5 horas",
            guide: "Deiner Fallas",
            almostFull: true
        },
        {
            time: "2:00 p.m.",
            title: "Tour de Café Don Emilio",
            available: "12 cupos disponibles",
            duration: "4 horas",
            guide: "Deiner Fallas",
            almostFull: false
        }
    ];

    // Function to handle tour selection
    const handleSelect = (index: number) => {
        setSelectedIndex(index);
        onTimeSelect(tours[index].time);
    };

    return (
        <div className="row justify-content-center">
            <div className="col-lg-8 tour-info">
                <div className="list-group">
                    {tours.map((tour, index) => (
                        <div className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                            <div className="col d-flex justify-content-between info-column">
                                <div className="d-flex justify-around fw-bold flex-fill flex-column-container">
                                    <span className="flex-item">{tour.time}</span>
                                    <span className="flex-item">{tour.title}</span>
                                    <span className="flex-item">{tour.available}</span>
                                </div>
                                <div className="d-flex justify-content flex-fill flex-column-container">
                                    <small className="small-item">{tour.duration}</small>
                                    <small className="small-item">Guía: {tour.guide}</small>
                                    <small className="small-item">{tour.almostFull ? '¡Ya casi se acaban!' : ''}</small>
                                </div>
                            </div>
                            <button
                                className={`btn btn-md-imp ${selectedIndex === index ? 'btn-secondary' : 'btn-secondary'} ${selectedIndex === index ? '' : 'reserve-now-btn'} color-light me-3 rounded-5 tour-list-btn`}
                                onClick={() => handleSelect(index)}
                                disabled={!selectedDate} // Disable button if no date selected
                            >
                                {selectedIndex === index ? 'Seleccionado' : 'Reservar Ahora'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
