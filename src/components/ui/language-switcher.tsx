
'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { parseCookies, setCookie } from 'nookies';
import { isClient } from '@/lib/client-utils';
import Image from 'next/image';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';

type GoogleTranslationConfig = {
  defaultLanguage: string;
  languages: { name: string; title: string; flag: string }[];
};

declare global {
  interface Window {
    __GOOGLE_TRANSLATION_CONFIG__?: GoogleTranslationConfig;
  }
}

const COOKIE_NAME = 'googtrans';

const LanguageSwitcherComponent = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [config, setConfig] = useState<GoogleTranslationConfig | null>(null);

  useEffect(() => {
    if (!isClient) return;

    const handleConfig = () => {
      const translationConfig = window.__GOOGLE_TRANSLATION_CONFIG__;
      if (!translationConfig) return;

      setConfig(translationConfig);

      const cookie = parseCookies()[COOKIE_NAME];
      const lang = cookie?.split('/')?.[2] || translationConfig.defaultLanguage;

      setCurrentLang(lang);
    };

    if (window.__GOOGLE_TRANSLATION_CONFIG__) {
      handleConfig();
    }

    window.addEventListener('translationConfigReady', handleConfig);

    return () => {
      window.removeEventListener('translationConfigReady', handleConfig);
    };
  }, []);

  const switchLang = (lang: string) => {
    setCookie(undefined, COOKIE_NAME, `/auto/${lang}`, { path: '/' });
    window.location.reload();
  };

  if (!config) return null;

  const current = config.languages.find(l => l.name === currentLang);

  return (
    <Select value={currentLang} onValueChange={switchLang}>
      <SelectTrigger
        className="
        flex items-center gap-3
        w-auto h-[44px]
        bg-primary
        text-white
        rounded-[24px]
        border-none
        px-3
        text-sm
        font-medium
        focus:ring-0
        "
      >
        {current && (
          <div className="flex items-center gap-3">
            <Image
              src={current.flag}
              alt={current.title}
              width={36}
              height={24}
              className='w-8 h-5 object-contain'
            />
            <span className="text-lg">{current.name.toUpperCase()}</span>
          </div>
        )}
      </SelectTrigger>

      <SelectContent className="rounded-xl border-none shadow-lg bg-white">
        {config.languages.map((lang) => (
          <SelectItem key={lang.name} value={lang.name}>
            <div className="flex items-center gap-3 cursor-pointer">
              <Image src={lang.flag} alt={lang.title} width={28} height={18} />
              <span className='text-sm font-semibold leading-normal text-[#131313]'>{lang.title}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const LanguageSwitcher = dynamic(
  () => Promise.resolve(LanguageSwitcherComponent),
  { ssr: false }
);

export default LanguageSwitcher;






























// 'use client';

// import dynamic from 'next/dynamic';
// import { useEffect, useState } from 'react';
// import { parseCookies, setCookie } from 'nookies';
// import { isClient } from '@/lib/client-utils';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'

// type GoogleTranslationConfig = {
//   defaultLanguage: string;
//   languages: { name: string; title: string }[];
// };

// declare global {
//   interface Window {
//     __GOOGLE_TRANSLATION_CONFIG__?: GoogleTranslationConfig;
//   }
// }

// const COOKIE_NAME = 'googtrans';

// const LanguageSwitcherComponent = () => {
//   const [currentLang, setCurrentLang] = useState('en');
//   const [config, setConfig] = useState<GoogleTranslationConfig | null>(null);

//   useEffect(() => {
//     if (!isClient) return;

//     const handleConfig = () => {
//       const translationConfig = window.__GOOGLE_TRANSLATION_CONFIG__;
//       if (!translationConfig) return;

//       setConfig(translationConfig);
//       const cookie = parseCookies()[COOKIE_NAME];
//       const lang = cookie?.split('/')?.[2] || translationConfig.defaultLanguage;
//       setCurrentLang(lang);
//     };

//     if (window.__GOOGLE_TRANSLATION_CONFIG__) {
//       handleConfig();
//     }

//     window.addEventListener('translationConfigReady', handleConfig);

//     return () => {
//       window.removeEventListener('translationConfigReady', handleConfig);
//     };
//   }, []);

//   const switchLang = (lang: string) => {
//     setCookie(undefined, COOKIE_NAME, `/auto/${lang}`, { path: '/' });
//     if (isClient) {
//       window.location.reload();
//     }
//   };

//   if (!config) {
//     return null;
//   }

//   return (
//     <Select value={currentLang} onValueChange={switchLang}>
//       <SelectTrigger className="w-[140px] bg-white text-[#00253E] border-none rounded-full h-10 px-4 font-semibold focus:ring-0">
//         <SelectValue placeholder="Language" />
//       </SelectTrigger>
//       <SelectContent className="bg-white border-none shadow-lg rounded-[12px]">
//         {config.languages.map((lang) => (
//           <SelectItem
//             key={lang.name}
//             value={lang.name}
//             className="text-[#00253E] hover:bg-primary/10 cursor-pointer focus:bg-primary/20"
//           >
//             <div className="flex items-center gap-2">
//               <span>{lang.title}</span>
//             </div>
//           </SelectItem>
//         ))}
//       </SelectContent>
//     </Select>
//   );
// };

// const LanguageSwitcher = dynamic(() => Promise.resolve(LanguageSwitcherComponent), {
//   ssr: false
// });

// export default LanguageSwitcher;