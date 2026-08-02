import { useEffect, useState } from 'react';

export function BrandIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false);
      return;
    }
    const timer = window.setTimeout(() => setVisible(false), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;
  return <div className="brand-intro" aria-label="NEXORA LAB loading">
    <div className="intro-symbol" aria-hidden="true"><i /><i /><i /></div>
    <div className="intro-name">NEXORA</div>
    <div className="intro-progress"><span /></div>
  </div>;
}
