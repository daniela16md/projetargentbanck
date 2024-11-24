import React from 'react';
import Hero from '../../components/Hero/Hero';
import data from '../../Data/data.json';
import './Home.css'

function Home() {
  return (
    <div>
      <Hero />
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
    
    </div>
  )
}

export default Home