import React, { useState } from 'react';
import { Share, Heart, Grid } from '../../lib/icons.jsx';
import { listing } from '../../data/propertyData.js';

export default function HeroGrid({ onOpenTour, onShare }) {
  const [saved, setSaved] = useState(false);

  return (
    <section id="photos">
      <div className="titlebar">
        <h1 className="titlebar__h1">{listing.title}</h1>
        <div className="titlebar__actions">
          <button className="textbtn" onClick={onShare} type="button">
            <Share />
            <span className="txt">Share</span>
          </button>
          <button
            className={`textbtn ${saved ? 'is-saved' : ''}`}
            onClick={() => setSaved(!saved)}
            type="button"
          >
            <Heart filled={saved} />
            <span className="txt">{saved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      <div className="hero">
        <div className="hero__grid">
          {listing.hero.map((imgSrc, idx) => (
            <button
              key={idx}
              className="hero__tile"
              onClick={onOpenTour}
              aria-label={`View photo ${idx + 1} of property`}
              type="button"
            >
              <img src={imgSrc} alt={`Property view ${idx + 1}`} loading={idx === 0 ? 'eager' : 'lazy'} />
            </button>
          ))}
        </div>

        <button className="hero__all" onClick={onOpenTour} type="button">
          <Grid />
          Show all photos
        </button>
      </div>
    </section>
  );
}
