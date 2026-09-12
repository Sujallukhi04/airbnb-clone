import React, { useState } from 'react';
import { HouseMarker, Plus, Minus, MapSearch } from '../../lib/icons.jsx';
import { listing } from '../../data/propertyData.js';

export default function LocationMap() {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="section" id="location">
      <h3 className="section__title">Where you'll be</h3>
      <div className="location__sub">{listing.location}</div>

      <div className="map">
        <div
          className="map__bg"
          style={{ transform: `scale(${zoom})`, transition: 'transform 0.3s ease' }}
        />
        <button className="map__search" aria-label="Search map" type="button">
          <MapSearch />
        </button>

        <div className="map__pin" aria-label="Listing location">
          <HouseMarker />
        </div>

        <div className="map__zoom">
          <button
            onClick={() => setZoom((z) => Math.min(z + 0.25, 2))}
            aria-label="Zoom in"
            type="button"
          >
            <Plus />
          </button>
          <button
            onClick={() => setZoom((z) => Math.max(z - 0.25, 0.75))}
            aria-label="Zoom out"
            type="button"
          >
            <Minus />
          </button>
        </div>
      </div>

      <div className="location__note">Exact location provided after booking.</div>

      <h4 className="location__h">Candolim, Goa, India</h4>
      <p className="location__text">{listing.neighbourhood}</p>
    </div>
  );
}
