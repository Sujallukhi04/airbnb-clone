import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header/Header.jsx';
import HeroGrid from './components/Hero/HeroGrid.jsx';
import OverviewSection from './components/Overview/OverviewSection.jsx';
import SleepSection from './components/Sleep/SleepSection.jsx';
import AmenitiesSection from './components/Amenities/AmenitiesSection.jsx';
import CalendarPicker from './components/Calendar/CalendarPicker.jsx';
import BookingCard from './components/Booking/BookingCard.jsx';
import ReviewsSection from './components/Reviews/ReviewsSection.jsx';
import LocationMap from './components/Location/LocationMap.jsx';
import HostSection from './components/Host/HostSection.jsx';
import ThingsToKnowSection from './components/ThingsToKnow/ThingsToKnowSection.jsx';
import MoreStaysCarousel from './components/MoreStays/MoreStaysCarousel.jsx';
import PhotoTourOverlay from './components/PhotoTour/PhotoTourOverlay.jsx';
import LightboxModal from './components/Lightbox/LightboxModal.jsx';
import AmenitiesModal from './components/Amenities/AmenitiesModal.jsx';
import Toast from './components/UI/Toast.jsx';

export default function App() {
  const [tourOpen, setTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const anyOverlay = tourOpen || lightboxIndex !== null || amenitiesOpen;

  useEffect(() => {
    document.body.classList.toggle('no-scroll', anyOverlay);
  }, [anyOverlay]);

  useEffect(() => {
    const handleKey = (e) => e.key === 'Tab' && document.body.classList.add('kbd');
    const handleClick = () => document.body.classList.remove('kbd');
    window.addEventListener('keydown', handleKey);
    window.addEventListener('mousedown', handleClick);
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    if (showToast._t) clearTimeout(showToast._t);
    showToast._t = setTimeout(() => setToastMessage(''), 2500);
  }, []);

  const handleShare = () => showToast('Link copied to clipboard');
  const handleReserve = () => showToast("Demo Reservation — You won't be charged.");

  return (
    <>
      <Header onReserve={handleReserve} />

      <main className="container">
        <HeroGrid onOpenTour={() => setTourOpen(true)} onShare={handleShare} />

        <div className="layout">
          <div className="layout__main">
            <OverviewSection />
            <SleepSection />
            <AmenitiesSection onShowAll={() => setAmenitiesOpen(true)} />
            <CalendarPicker />
          </div>
          <aside className="layout__aside">
            <BookingCard onReserve={handleReserve} />
          </aside>
        </div>
      </main>

      <ReviewsSection />

      <div className="container">
        <LocationMap />
        <HostSection />
        <ThingsToKnowSection />
        <MoreStaysCarousel />
      </div>



      <PhotoTourOverlay
        open={tourOpen}
        onClose={() => setTourOpen(false)}
        onOpenPhoto={(idx) => setLightboxIndex(idx)}
      />

      <LightboxModal
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        setIndex={setLightboxIndex}
      />

      <AmenitiesModal
        open={amenitiesOpen}
        onClose={() => setAmenitiesOpen(false)}
      />

      <Toast message={toastMessage} />
    </>
  );
}
