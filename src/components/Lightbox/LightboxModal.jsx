import React, { useEffect, useState } from 'react';
import { Close, LbPrev, LbNext, Share, Heart } from '../../lib/icons.jsx';
import { allPhotos } from '../../data/propertyData.js';

export default function LightboxModal({ index, onClose, setIndex }) {
  const [fade, setFade] = useState(false);

  const isOpen = index !== null && index >= 0 && index < allPhotos.length;
  const currentPhoto = isOpen ? allPhotos[index] : null;

  const prev = () => {
    if (index > 0) {
      setFade(true);
      setIndex(index - 1);
    }
  };

  const next = () => {
    if (index < allPhotos.length - 1) {
      setFade(true);
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, index]);

  useEffect(() => {
    if (fade) {
      const timer = setTimeout(() => setFade(false), 300);
      return () => clearTimeout(timer);
    }
  }, [fade]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div className={`lightbox ${isOpen ? 'is-open' : ''}`} role="dialog" aria-modal="true">
      <div className="lightbox__bar">
        <button className="iconbtn close" onClick={onClose} aria-label="Close lightbox" type="button">
          <Close />
        </button>

        <span className="lightbox__title">{currentPhoto.category}</span>

        <div className="lightbox__right">
          <span className="lightbox__count">
            {index + 1} / {allPhotos.length}
          </span>
          <button className="iconbtn" aria-label="Share" type="button">
            <Share />
          </button>
          <button className="iconbtn" aria-label="Save" type="button">
            <Heart />
          </button>
        </div>
      </div>

      <button
        className="lightbox__nav prev"
        onClick={prev}
        disabled={index === 0}
        aria-label="Previous photo"
        type="button"
      >
        <LbPrev />
      </button>

      <div className="lightbox__stage">
        <img
          className={fade ? 'fade' : ''}
          src={currentPhoto.src}
          alt={currentPhoto.category}
        />
      </div>

      <button
        className="lightbox__nav next"
        onClick={next}
        disabled={index === allPhotos.length - 1}
        aria-label="Next photo"
        type="button"
      >
        <LbNext />
      </button>
    </div>
  );
}
