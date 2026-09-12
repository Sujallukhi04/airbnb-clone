import React, { useEffect } from 'react';
import {
  Close,
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

const getIconForLabel = (label) => {
  const l = label.toLowerCase();
  if (l.includes('kitchen') || l.includes('fridge') || l.includes('microwav')) return AmKitchen;
  if (l.includes('wifi')) return AmWifi;
  if (l.includes('workspace')) return AmWorkspace;
  if (l.includes('parking')) return AmParking;
  if (l.includes('pool')) return AmPool;
  if (l.includes('hot tub') || l.includes('jacuzzi')) return AmHottub;
  if (l.includes('pet')) return AmPets;
  if (l.includes('camera')) return AmCamera;
  if (l.includes('monoxide')) return AmCo;
  if (l.includes('smoke')) return AmSmoke;
  return AmWorkspace;
};

export default function AmenitiesModal({ open, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (open && e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={`modal-overlay ${open ? 'is-open' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__bar">
          <button className="iconbtn" onClick={onClose} aria-label="Close modal" type="button">
            <Close />
          </button>
        </div>

        <div className="modal__body">
          <h2 id="modal-title">What this place offers</h2>
          {listing.amenitiesFull.map((group, gIdx) => (
            <div key={gIdx} className="amgroup">
              <h3>{group.group}</h3>
              {group.items.map((item, itemIdx) => {
                const IconComponent = getIconForLabel(item.label);
                return (
                  <div
                    key={itemIdx}
                    className={`row ${item.unavailable ? 'is-unavailable' : ''}`}
                  >
                    <div className="ico">
                      <IconComponent />
                    </div>
                    <span className="label">{item.label}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
