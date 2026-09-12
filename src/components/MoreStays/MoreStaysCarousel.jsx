import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from '../../lib/icons.jsx';
import { listing } from '../../data/propertyData.js';

export default function MoreStaysCarousel() {
  const trackRef = useRef(null);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(listing.moreStays.length / 5);

  const updatePage = () => {
    const el = trackRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setPage(1);
      return;
    }
    const currPage = Math.round((el.scrollLeft / maxScroll) * (totalPages - 1)) + 1;
    setPage(Math.min(totalPages, Math.max(1, currPage)));
  };

  const scrollToPage = (targetPage) => {
    const el = trackRef.current;
    if (!el) return;
    const validPage = Math.min(totalPages, Math.max(1, targetPage));
    const maxScroll = el.scrollWidth - el.clientWidth;
    const scrollAmount = (maxScroll * (validPage - 1)) / (totalPages - 1);
    el.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    setPage(validPage);
  };

  return (
    <div className="section">
      <div className="more-head">
        <b>More stays nearby</b>
        <div className="more-nav">
          <span className="page">
            {page} / {totalPages}
          </span>
          <button
            onClick={() => scrollToPage(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
            type="button"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scrollToPage(page + 1)}
            disabled={page >= totalPages}
            aria-label="Next page"
            type="button"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="more-track" ref={trackRef} onScroll={updatePage}>
        {listing.moreStays.map((stay, i) => (
          <a
            key={i}
            className="more-card"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            <img src={stay.img} alt={stay.title} loading="lazy" />
            <b>{stay.title}</b>
            <div className="p">
              {stay.price} · <Star /> {stay.rating}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
