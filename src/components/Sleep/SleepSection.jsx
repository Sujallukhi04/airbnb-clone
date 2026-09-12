import React from 'react';
import { listing } from '../../data/propertyData.js';

export default function SleepSection() {
  return (
    <div className="section">
      <h3 className="section__title">Where you'll sleep</h3>
      <div className="sleep-grid">
        {listing.sleep.map((item, idx) => (
          <div key={idx} className="sleep-card">
            <img src={item.img} alt={item.name} loading="lazy" />
            <b>{item.name}</b>
            <div className="meta">{item.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
