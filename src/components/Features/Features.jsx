import React from 'react';
import data from '../../Data/data.json';
import './Features.css'

function Features() {
  return (
    <div className='features'>
        {data.article.map((item) => (
        <div key={item.id} className="features-item">
          <div className="features-img">
            <img src={item.icon} alt={item.altIcon} />
          </div>
          <div className="features-text">
            <div className="features-title">{item.title}</div>
            <div className="features-subtitle">{item.paragraph}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Features