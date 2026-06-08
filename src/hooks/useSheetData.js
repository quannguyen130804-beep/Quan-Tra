// src/hooks/useSheetData.js
// Fetches data from a PUBLIC Google Sheet (CSV export URL)
// No API key, no proxy needed — just make the sheet public ("Anyone with link can view")

import { useState, useEffect } from 'react';

function parseCSV(text) {
  const lines = text.trim().split('\n');
  if (lines.length < 2) return [];
  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  return lines.slice(1).map(line => {
    const values = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '"') {
        inQuotes = !inQuotes;
      } else if (line[i] === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += line[i];
      }
    }
    values.push(current.trim());
    const obj = {};
    headers.forEach((h, i) => { obj[h] = values[i] || ''; });
    return obj;
  }).filter(row => Object.values(row).some(v => v !== ''));
}

function toCSVUrl(shareUrl, gid = '0') {
  const match = shareUrl.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (!match) return null;
  const id = match[1];
  return `https://docs.google.com/spreadsheets/d/${id}/export?format=csv&gid=${gid}`;
}

export function useSheetData(sheetUrl, gid = '0') {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!sheetUrl || sheetUrl.includes('YOUR_SHEET_URL_HERE')) {
      setLoading(false);
      return;
    }

    const csvUrl = toCSVUrl(sheetUrl, gid);
    if (!csvUrl) {
      setError('Invalid sheet URL');
      setLoading(false);
      return;
    }

    // Direct fetch — works when Google Sheet is set to "Anyone with link can view"
    fetch(csvUrl)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch sheet');
        return res.text();
      })
      .then(text => {
        setData(parseCSV(text));
        setLoading(false);
      })
      .catch(err => {
        console.warn('Sheet fetch failed, using default data:', err.message);
        setError(err.message);
        setLoading(false);
      });
  }, [sheetUrl, gid]);

  return { data, loading, error };
}
