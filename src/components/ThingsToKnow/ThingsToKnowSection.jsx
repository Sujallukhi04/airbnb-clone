import React from 'react';
import { TkRules, Shield, TkCancellation } from '../../lib/icons.jsx';
import { listing } from '../../data/propertyData.js';

export default function ThingsToKnowSection() {
  const { thingsToKnow } = listing;

  return (
    <div className="section">
      <h3 className="section__title">Things to know</h3>

      <div className="know-grid">
        <div className="know">
          <TkRules />
          <b>House rules</b>
          {thingsToKnow.houseRules.map((rule, i) => (
            <p key={i}>{rule}</p>
          ))}
          <a href="#" className="more">
            Show more
          </a>
        </div>

        <div className="know">
          <Shield />
          <b>Safety & property</b>
          {thingsToKnow.safety.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
          <a href="#" className="more">
            Show more
          </a>
        </div>

        <div className="know">
          <TkCancellation />
          <b>Cancellation policy</b>
          {thingsToKnow.cancellation.map((rule, i) => (
            <p key={i}>{rule}</p>
          ))}
          <a href="#" className="more">
            Show more
          </a>
        </div>
      </div>
    </div>
  );
}
