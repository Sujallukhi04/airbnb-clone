import React from 'react';

export default function Toast({ message }) {
  return (
    <div className={`toast ${message ? 'is-shown' : ''}`} role="status" aria-live="polite">
      {message}
    </div>
  );
}
