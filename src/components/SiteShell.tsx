import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../state/language';

const nav = [
  ['/', '首页', 'Home'], ['/services', '服务', 'Services'], ['/work', '案例', 'Work'],
  ['/about', '关于', 'About'], ['/contact', '联系', 'Contact']
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { language, toggle } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname]);
  return <>
    <header className="site-header">
      <NavLink to="/" className="brand" aria-label="NEXORA LAB 首页">
        <img src={`${import.meta.env.BASE_URL}assets/nexora-wordmark.svg`} alt="NEXORA LAB" />
      </NavLink>
      <button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label="打开导航">{open ? 'CLOSE' : 'MENU'}</button>
      <nav className={open ? 'nav open' : 'nav'}>
        {nav.map(([to, zh, en], i) => <NavLink key={to} to={to} end={to === '/'}><small>0{i + 1}</small>{language === 'zh' ? zh : en}</NavLink>)}
      </nav>
      <button className="language" onClick={toggle} aria-label="切换语言">{language === 'zh' ? 'EN' : '中'}</button>
    </header>
    <main>{children}</main>
    <footer className="footer">
      <div><strong>NEXORA LAB</strong><span>霓序开发工作室</span></div>
      <p>{language === 'zh' ? '中南大学计算机学院学生开发团队 · 非学校官方机构' : 'A student development team from CSU School of Computer Science · Not an official university organization'}</p>
      <span>© 2026 NEXORA LAB</span>
    </footer>
  </>;
}
