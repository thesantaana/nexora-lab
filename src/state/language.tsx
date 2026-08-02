import { createContext, useContext, useMemo, useState } from 'react';

export type Language = 'zh' | 'en';
type LanguageContextValue = { language: Language; toggle: () => void };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');
  const value = useMemo(() => ({ language, toggle: () => setLanguage(v => v === 'zh' ? 'en' : 'zh') }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('LanguageProvider missing');
  return value;
}

export function useCopy<T>(copy: { zh: T; en: T }) {
  return copy[useLanguage().language];
}
