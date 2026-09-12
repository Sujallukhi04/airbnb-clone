import React, { useState } from 'react';
import {
  Star,
  ScCleanliness,
  ScAccuracy,
  ScCheckin,
  ScCommunication,
  ScLocation,
  ScValue,
} from '../../lib/icons.jsx';
import { listing } from '../../data/propertyData.js';

const scoreIcons = {
  cleanliness: ScCleanliness,
  accuracy: ScAccuracy,
  checkin: ScCheckin,
  communication: ScCommunication,
  location: ScLocation,
  value: ScValue,
};

function ReviewCard({ r }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = r.text.length > 160;

  return (
    <div className="review">
      <div className="head">
        {r.avatar ? (
          <img className="avatar" src={r.avatar} alt={r.name} loading="lazy" />
        ) : (
          <span
            className="avatar-letter"
            style={{ background: r.color || '#222', color: r.textColor || '#fff' }}
          >
            {r.letter || r.name.charAt(0)}
          </span>
        )}
        <div>
          <div className="name">{r.name}</div>
          <div className="tenure">{r.tenure}</div>
        </div>
      </div>

      <div className="sub">
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} />
          ))}
        </div>
        <span>·</span>
        <span>{r.date}</span>
      </div>

      <p className={`body ${isLong && !expanded ? 'is-clamped' : ''}`}>{r.text}</p>
      {isLong && (
        <button
          className="more"
          onClick={() => setExpanded(!expanded)}
          type="button"
        >
          {expanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="reviews-band" id="reviews">
      <div className="container">
        <div className="reviews-hero">
          <div className="reviews-hero__top">
            <div className="reviews-hero__laurels">
              <img src="/images/laurel-left.png" alt="" />
              <div className="reviews-hero__score">{listing.rating}</div>
              <img src="/images/laurel-right.png" alt="" />
            </div>
            <div className="reviews-hero__fav">Guest favourite</div>
            <p className="reviews-hero__sub">
              This home is a guest favourite based on ratings, reviews and reliability
            </p>
            <button className="reviews-hero__link" type="button">
              How reviews work
            </button>
          </div>

          <div className="rating-grid">
            <div className="rating-col">
              <div className="h">Overall rating</div>
              <div className="rating-bars">
                {listing.ratingBreakdown.map((b) => (
                  <div key={b.star} className="rating-bar">
                    <span className="n">{b.star}</span>
                    <span className="track">
                      <span className="fill" style={{ width: `${b.pct}%` }} />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {listing.categoryScores.map((cat, idx) => {
              const IconComponent = scoreIcons[cat.icon] || ScCleanliness;
              return (
                <div key={idx} className="rating-col">
                  <div className="h">{cat.label}</div>
                  <div className="score">{cat.score}</div>
                  <div className="ico">
                    <IconComponent />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Topics Carousel Bar */}
          <div className="topics">
            {listing.reviewTopics.map((topic, idx) => (
              <div key={idx} className="topic">
                <img src={topic.icon} alt="" />
                <span>{topic.label}</span>
                <span className="c">({topic.count})</span>
              </div>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="reviews-grid">
            {listing.reviews.map((r, idx) => (
              <ReviewCard key={idx} r={r} />
            ))}
          </div>

          <button className="btn-outline" style={{ marginBottom: 48 }} type="button">
            Show all {listing.reviewCount} reviews
          </button>
        </div>
      </div>
    </section>
  );
}
