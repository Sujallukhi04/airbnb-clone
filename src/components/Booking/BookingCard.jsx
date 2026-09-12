import React from 'react';
import { ChevronDown, Flag } from '../../lib/icons.jsx';
import { listing } from '../../data/propertyData.js';

export default function BookingCard({ onReserve }) {
  return (
    <div className="booking-sticky">
      {/* Promo banner */}
      <div className="promo">
        <img src="/images/discount.svg" alt="" style={{ width: 32, height: 32, flexShrink: 0 }} />
        <div className="promo__text">
          <b>{listing.booking.promo}</b> <a href="#">{listing.booking.promoTerms}</a>
        </div>
        <button className="promo__claim" type="button">
          Claim
        </button>
      </div>

      {/* Main Reservation Card */}
      <div className="pricecard">
        <div className="pricecard__price">
          <b>{listing.booking.price}</b> <span>{listing.booking.priceUnit}</span>
        </div>

        <div className="dates">
          <div className="dates__row">
            <div className="dates__cell">
              <div className="dates__label">CHECK-IN</div>
              <div className="dates__value">{listing.booking.checkIn}</div>
            </div>
            <div className="dates__cell">
              <div className="dates__label">CHECKOUT</div>
              <div className="dates__value">{listing.booking.checkOut}</div>
            </div>
          </div>
          <div className="dates__guests">
            <div>
              <div className="dates__label">GUESTS</div>
              <div className="dates__value">{listing.booking.guests}</div>
            </div>
            <ChevronDown />
          </div>
        </div>

        <div className="pricecard__note">
          Free cancellation before <b>17 October</b>
        </div>

        <button className="btn-reserve" onClick={onReserve} type="button">
          Reserve
        </button>

        <div className="pricecard__fine">You won't be charged yet</div>
      </div>

      <div className="report">
        <Flag />
        <a href="#">Report this listing</a>
      </div>
    </div>
  );
}
