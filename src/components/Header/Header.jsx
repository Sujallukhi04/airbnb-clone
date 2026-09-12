import React, { useEffect, useState } from 'react';
import { Logo, Globe, Menu, SearchGo, Star } from '../../lib/icons.jsx';
import { listing } from '../../data/propertyData.js';

export default function Header({ onReserve }) {
  const [showSubnav, setShowSubnav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSubnav(window.scrollY > 550);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <a href="#" className="nav__logo" aria-label="Airbnb homepage">
            <Logo />
          </a>

          <div className="searchbar" role="search">
            <button className="searchbar__seg" type="button">
              <img src="/images/searchbar-house.png" alt="" aria-hidden="true" />
              Anywhere
            </button>
            <div className="searchbar__divider" />
            <button className="searchbar__seg" type="button">
              Any week
            </button>
            <div className="searchbar__divider" />
            <button className="searchbar__seg searchbar__seg--muted" type="button">
              Add guests
            </button>
            <button className="searchbar__go" aria-label="Search" type="button">
              <SearchGo />
            </button>
          </div>

          <div className="nav__right">
            <a href="#" className="nav__host">
              Become a host
            </a>
            <button className="nav__icon" aria-label="Choose language and currency" type="button">
              <Globe />
            </button>
            <button className="nav__icon" aria-label="User menu" type="button">
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* Sticky Secondary Navigation */}
      <nav className={`subnav ${showSubnav ? 'is-shown' : ''}`} aria-label="Listing shortcuts">
        <div className="subnav__inner">
          <div className="subnav__links">
            <a href="#photos" className="is-active">
              Photos
            </a>
            <a href="#amenities">Amenities</a>
            <a href="#reviews">Reviews</a>
            <a href="#location">Location</a>
          </div>

          <div className="subnav__right">
            <div className="subnav__price">
              <div className="subnav__amount">
                <b>{listing.booking.price}</b> <span>{listing.booking.priceUnit}</span>
              </div>
              <div className="subnav__rating">
                <Star style={{ width: 10, height: 10, display: 'inline-block', verticalAlign: '-1px', marginRight: 3 }} />
                <span>{listing.rating} · {listing.reviewCount} reviews</span>
              </div>
            </div>
            <button className="btn-reserve btn-reserve--sm" onClick={onReserve} type="button">
              Reserve
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
