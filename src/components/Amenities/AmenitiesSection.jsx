import React from 'react';
import {
  AmKitchen,
  AmWifi,
  AmWorkspace,
  AmParking,
  AmPool,
  AmHottub,
  AmPets,
  AmCamera,
  AmCo,
  AmSmoke,
} from '../../lib/icons.jsx';
import { listing } from '../../data/propertyData.js';

const amenityIcons = {
  kitchen: AmKitchen,
  wifi: AmWifi,
  workspace: AmWorkspace,
  parking: AmParking,
  pool: AmPool,
  hottub: AmHottub,
  pets: AmPets,
  camera: AmCamera,
  co: AmCo,
  smoke: AmSmoke,
};

export default function AmenitiesSection({ onShowAll }) {
  return (
    <div className="section" id="amenities">
      <h3 className="section__title">What this place offers</h3>
      <div className="amenity-grid">
        {listing.amenities.map((item, idx) => {
          const IconComponent = amenityIcons[item.icon] || AmWorkspace;
          return (
            <div
              key={idx}
              className={`amenity ${item.unavailable ? 'is-unavailable' : ''}`}
            >
              <div className="ico">
                <IconComponent />
              </div>
              <span className="label">{item.label}</span>
            </div>
          );
        })}
      </div>

      <button className="btn-outline" onClick={onShowAll} type="button">
        Show all 50 amenities
      </button>
    </div>
  );
}
