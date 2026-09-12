import React, { useState } from 'react';
import { Laurel, Star, HiOutdoor, HiCool, HiKey, ChevronRight } from '../../lib/icons.jsx';
import { listing } from '../../data/propertyData.js';

const highlightIcons = {
  outdoor: HiOutdoor,
  cool: HiCool,
  key: HiKey,
};

export default function OverviewSection() {
  const [clamped, setClamped] = useState(true);

  return (
    <section className="overview">
      <h2>{listing.subtitle}</h2>
      <p className="specs">{listing.specs}</p>

      {/* Guest Favourite Badge */}
      <div className="favourite">
        <div className="favourite__left">
          <span className="laurel">
            <Laurel />
          </span>
          <span className="favourite__label">Guest<br />favourite</span>
          <span className="laurel flip">
            <Laurel />
          </span>
        </div>

        <div className="favourite__text">
          One of the most loved homes on Airbnb, according to guests
        </div>

        <div className="favourite__stats">
          <div className="favstat">
            <b>{listing.rating}</b>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} />
              ))}
            </div>
          </div>
          <div className="favourite__divider" />
          <div className="favstat">
            <b>{listing.reviewCount}</b>
            <small>Reviews</small>
          </div>
        </div>
      </div>

      {/* Host avatar preview row */}
      <div className="hostrow">
        <img src={listing.host.avatar} alt={listing.host.name} />
        <div>
          <b>Hosted by {listing.host.name}</b>
          <div className="meta">Superhost · {listing.host.tenure}</div>
        </div>
      </div>

      {/* Highlights */}
      <div className="highlights">
        {listing.highlights.map((h, i) => {
          const IconComponent = highlightIcons[h.icon] || HiKey;
          return (
            <div key={i} className="highlight">
              <div className="highlight__icon">
                <IconComponent />
              </div>
              <div>
                <b>{h.title}</b>
                <p>{h.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Description */}
      <div className="description">
        <div className="translate-note">
          <span>Some information has been automatically translated.</span>
          <a href="#">Show original</a>
        </div>
        <p className={clamped ? 'is-clamped' : ''}>{listing.description}</p>
        <button
          className="linkbtn"
          onClick={() => setClamped(!clamped)}
          type="button"
        >
          {clamped ? 'Show more' : 'Show less'}
          <ChevronRight style={{ transform: clamped ? 'rotate(0deg)' : 'rotate(-90deg)' }} />
        </button>
      </div>
    </section>
  );
}
