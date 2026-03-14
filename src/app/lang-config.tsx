/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect } from "react";


const config = {
  languages: [
    {
      title: 'English',
      name: 'en',
      flag: '/assets/flags/us.png',
    },
    {
      title: 'French',
      name: 'fr',
      flag: '/assets/flags/fr.png',
    },
    {
      title: 'Spanish',
      name: 'es',
      flag: '/assets/flags/es.svg',
    },
    //  {
    //   title: 'Bangla',
    //   name: 'bn',
    //   flag: '/assets/flags/bd.png',
    // },
  ],
  defaultLanguage: 'en',
};


export default function LangConfig() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Set configuration immediately
    (window as any).__GOOGLE_TRANSLATION_CONFIG__ = config;

    // Create a custom event to notify components that config is ready
    const event = new Event('translationConfigReady');
    window.dispatchEvent(event);
  }, []);

  return null;
}
