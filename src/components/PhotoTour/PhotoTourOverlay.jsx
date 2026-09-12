import React from 'react';
import { TourBack, Share, Heart } from '../../lib/icons.jsx';
import { photoTour, allPhotos } from '../../data/propertyData.js';

export default function PhotoTourOverlay({ open, onClose, onOpenPhoto }) {
  if (!open) return null;

  const scrollToCategory = (catId) => {
    const el = document.getElementById(`cat-${catId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`tour ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true">
      <div className="tour__bar">
        <button className="iconbtn back" onClick={onClose} aria-label="Back to listing" type="button">
          <TourBack />
        </button>

        <span className="tour__title">Photo tour</span>

        <div className="tour__actions">
          <button className="iconbtn" aria-label="Share" type="button">
            <Share />
          </button>
          <button className="iconbtn" aria-label="Save" type="button">
            <Heart />
          </button>
        </div>
      </div>

      <div className="tour__scroll">
        <div className="tour__inner">
          {/* Category Thumbnail Navigation */}
          <div className="tour__thumbs">
            {photoTour.map((c) => (
              <button
                key={c.id}
                className="tour__thumb"
                onClick={() => scrollToCategory(c.id)}
                type="button"
              >
                <img src={c.photos[0]} alt={c.title} loading="lazy" />
                <small>{c.title}</small>
              </button>
            ))}
          </div>

          {/* Photo Categories & Grids */}
          {photoTour.map((c) => {
            let photoOffset = 0;
            return (
              <div key={c.id} id={`cat-${c.id}`} className="tour-cat">
                <div className="tour-cat__head">
                  <h2>{c.title}</h2>
                  {c.subtitle && <p>{c.subtitle}</p>}
                </div>

                <div className="tour-cat__photos">
                  {c.rows.map((count, rIdx) => {
                    const rowPhotos = c.photos.slice(photoOffset, photoOffset + count);
                    photoOffset += count;
                    const rowClass = count === 1 ? 'one' : 'two';

                    return (
                      <div key={rIdx} className={`tour-row ${rowClass}`}>
                        {rowPhotos.map((src) => {
                          const globalIdx = allPhotos.findIndex((p) => p.src === src);
                          return (
                            <button
                              key={src}
                              className="tour-photo"
                              onClick={() => onOpenPhoto(globalIdx >= 0 ? globalIdx : 0)}
                              type="button"
                              aria-label={`Open photo in lightbox`}
                            >
                              <img src={src} alt={c.title} loading="lazy" />
                            </button>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
