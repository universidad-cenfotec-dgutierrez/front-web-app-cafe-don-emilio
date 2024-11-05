import React from 'react';
import "./text-image.component.scss";

interface FamilySectionProps {
  title: string;
  listParagraph: string[];
  imageSrc: string;
  imageAlt: string;
}

export const TextImage: React.FC<FamilySectionProps> = ({ title, listParagraph, imageSrc, imageAlt }) => {
  return (
    <div className="row margin-bottom margin-top">
      <div className="col-12 col-md-6">
        <div className='text-container'>
        <h2 className="titulo-5 fw-bold">{title}</h2>
        {listParagraph.map((text, index) => (
          <p  key={index}>{text}</p> 
        ))}
      </div>
        </div>
      <div className="col-12 col-md-6 d-flex justify-content-center">
        <img src={imageSrc} className="img-fluid" alt={imageAlt} />
      </div>
    </div>
  );
};

