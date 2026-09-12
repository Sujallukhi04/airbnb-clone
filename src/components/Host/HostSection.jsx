import React from 'react';
import { SuperhostBadge, HostBorn, HostSchool, Shield } from '../../lib/icons.jsx';
import { listing } from '../../data/propertyData.js';

export default function HostSection() {
  const { host, cohosts } = listing;

  return (
    <div className="section">
      <div className="host-layout">
        {/* Host Identity Card */}
        <div className="host-card">
          <div className="host-card__id">
            <div className="host-card__avatar">
              <img src={host.avatar} alt={host.name} />
              {host.superhost && (
                <div className="host-card__badge" title="Superhost">
                  <SuperhostBadge />
                </div>
              )}
            </div>
            <div className="host-card__name">{host.name}</div>
            <div className="host-card__role">Superhost</div>
          </div>

          <div className="host-card__stats">
            <div className="host-stat">
              <b>{host.reviews}</b>
              <small>Reviews</small>
            </div>
            <div className="host-stat">
              <b>{host.ratingValue} ★</b>
              <small>Rating</small>
            </div>
            <div className="host-stat">
              <b>{host.yearsHosting}</b>
              <small>Years hosting</small>
            </div>
          </div>
        </div>

        {/* Host Info & Co-Hosts */}
        <div className="host-side">
          <div className="host-facts">
            <div className="host-fact">
              <HostBorn />
              <span>{host.born}</span>
            </div>
            <div className="host-fact">
              <HostSchool />
              <span>{host.school}</span>
            </div>
          </div>

          <div className="host-details" style={{ marginTop: 24 }}>
            <h3>Co-hosts</h3>
            <div className="cohost-grid">
              {cohosts.map((c, i) => (
                <div key={i} className="cohost">
                  {c.avatar ? (
                    <img src={c.avatar} alt={c.name} loading="lazy" />
                  ) : (
                    <span className="letter" style={{ background: c.color || '#222' }}>
                      {c.letter || c.name.charAt(0)}
                    </span>
                  )}
                  <span>{c.name}</span>
                </div>
              ))}
            </div>

            <h3>Host details</h3>
            <p>Response rate: {host.responseRate}</p>
            <p>{host.responseTime}</p>

            <button className="host-msg" type="button">
              Message Host
            </button>

            <div className="host-protect">
              <Shield />
              <span>
                To help protect your payment, never transfer money or communicate outside of the
                Airbnb website or app.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
