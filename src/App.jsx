// src/App.jsx
import { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import FirstTimesSection from './components/FirstTimesSection';
import ReasonsSection from './components/ReasonsSection';
import GallerySection from './components/GallerySection';
import LoveLetterSection from './components/LoveLetterSection';
import PromiseSection from './components/PromiseSection';
import FloatingPetals from './components/FloatingPetals';
import { useSheetData } from './hooks/useSheetData';
import { defaultData } from './data/defaultData';
import './index.css';

// ============================================================
// 🔧 CONFIG — Google Sheet URL
// ============================================================
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/11L9sFzBoEltSxsX6k7Dl8eZ4Iz_j_zXoLT_b9GEO0Xs/edit?usp=sharing';
// ============================================================

const GIDS = {
  config:   '0',
  timeline: '1',
  reasons:  '2',
  gallery:  '3',
  firsts:   '4',
  songs:    '5',
};

function mergeData(sheetRows, defaultRows) {
  if (!sheetRows || sheetRows.length === 0) return defaultRows;
  return sheetRows;
}

function useAllSheetData(url) {
  const config   = useSheetData(url, GIDS.config);
  const timeline = useSheetData(url, GIDS.timeline);
  const reasons  = useSheetData(url, GIDS.reasons);
  const gallery  = useSheetData(url, GIDS.gallery);
  const firsts   = useSheetData(url, GIDS.firsts);
  const songs    = useSheetData(url, GIDS.songs);

  const loading = config.loading || timeline.loading || reasons.loading;
  const configData = (config.data && config.data[0]) ? config.data[0] : null;

  return {
    loading,
    config: configData ? {
      anniversary_date: configData.anniversary_date || defaultData.config.anniversary_date,
      password:         configData.password         || defaultData.config.password,
      name_a:           configData.name_a           || defaultData.config.name_a,
      name_b:           configData.name_b           || defaultData.config.name_b,
      tagline:          configData.tagline          || defaultData.config.tagline,
      love_letter:      configData.love_letter      || defaultData.config.love_letter,
    } : defaultData.config,
    timeline: mergeData(timeline.data, defaultData.timeline),
    reasons:  mergeData(reasons.data,  defaultData.reasons),
    gallery:  mergeData(gallery.data,  defaultData.gallery),
    firsts:   mergeData(firsts.data,   defaultData.firsts),
    songs:    mergeData(songs.data,    defaultData.songs),
  };
}

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { loading, config, timeline, reasons, gallery, firsts, songs } = useAllSheetData(SHEET_URL);

  useEffect(() => {
    const saved = sessionStorage.getItem('qt_auth');
    if (saved === 'true') setLoggedIn(true);
  }, []);

  function handleLogin() {
    sessionStorage.setItem('qt_auth', 'true');
    setLoggedIn(true);
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <span className="heart">💗</span>
        <p>Đang tải những kỷ niệm...</p>
      </div>
    );
  }

  if (!loggedIn) {
    return (
      <LoginPage
        onLogin={handleLogin}
        correctPassword={config.password}
        nameA={config.name_a}
        nameB={config.name_b}
      />
    );
  }

  return (
    <>
      <FloatingPetals />
      <NavBar nameA={config.name_a} />
      <main>
        <HeroSection config={config} />
        <TimelineSection timeline={timeline} />
        <FirstTimesSection firsts={firsts} />
        <ReasonsSection reasons={reasons} />
        <GallerySection gallery={gallery} />
        <LoveLetterSection config={config} songs={songs} />
        <PromiseSection nameB={config.name_b} />
      </main>
    </>
  );
}
