import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animate, stagger } from 'animejs';
import { projects, services } from '../data/content';
import { useLanguage } from '../state/language';
import { Reveal } from '../components/Reveal';
import { Marquee } from '../components/Marquee';
import { ProjectCard } from '../components/ProjectCard';
import { ContactPanel } from '../components/ContactPanel';

export default function Home() {
  const { language } = useLanguage();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    animate('.hero-title-line', { translateY: [70, 0], opacity: [0, 1], duration: 900, delay: stagger(110), ease: 'outExpo' });
  }, []);
  return <>
    <section className="hero">
      <div className="hero-kicker"><span>INDEPENDENT DIGITAL STUDIO</span><span>CSU · CHANGSHA · 2026</span></div>
      <h1><span className="hero-title-line">ENGINEERING</span><span className="hero-title-line">IDEAS INTO</span><span className="outline hero-title-line">RELIABLE</span><span className="hero-title-line">PRODUCTS.</span></h1>
      <div className="hero-stage" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}assets/projects/civion-login.png`} alt="" />
        <div className="hero-stage-shade" />
        <span className="hero-stage-index">N / 01</span>
        <span className="hero-stage-caption">CIVION · COMPUTER VISION</span>
        <span className="hero-stage-status">SYSTEM ONLINE</span>
      </div>
      <div className="hero-bottom">
        <p>{language === 'zh' ? '将想法构建为可靠的数字产品。网站、软件、小程序与 AI 系统定制。' : 'Engineering ideas into reliable digital products — websites, software, mini programs and AI systems.'}</p>
        <Link to="/work" className="circle-link" aria-label="查看案例"><span>{language === 'zh' ? '查看案例' : 'View work'}</span><b>↓</b></Link>
      </div>
      <div className="grid-orbit" aria-hidden="true"><i /><i /><i /><i /></div>
    </section>
    <Marquee text="WEB · SOFTWARE · MINI PROGRAMS · AI SYSTEMS" />
    <section className="statement section-pad">
      <Reveal><span className="section-label">01 / STUDIO</span><h2>{language === 'zh' ? <>年轻的团队，<em>成熟的交付。</em></> : <>Young team. <em>Mature delivery.</em></>}</h2></Reveal>
      <Reveal><p>{language === 'zh' ? '我们来自中南大学计算机学院，以扎实的工程能力、清晰的合作流程和灵活的成本，为每个项目提供从需求拆解到部署上线的完整支持。' : 'We are a student development team from CSU School of Computer Science, combining solid engineering, a clear process and flexible collaboration from discovery through launch.'}</p></Reveal>
    </section>
    <section className="featured section-pad">
      <div className="section-head"><span className="section-label">02 / SELECTED WORK</span><Link to="/work">{language === 'zh' ? '全部案例' : 'All work'} ↗</Link></div>
      <div className="project-grid"><ProjectCard project={projects[0]} large /><ProjectCard project={projects[1]} /><ProjectCard project={projects[2]} /><ProjectCard project={projects[3]} large /></div>
    </section>
    <section className="service-preview section-pad">
      <div className="section-head"><span className="section-label">03 / CAPABILITIES</span><Link to="/services">{language === 'zh' ? '服务详情' : 'Details'} ↗</Link></div>
      {services.map(s => <Reveal key={s.no} className="service-row"><span>{s.no}</span><h3>{language === 'zh' ? s.zh : s.en}</h3><p>{language === 'zh' ? s.detailZh : s.detailEn}</p><b>↗</b></Reveal>)}
    </section>
    <ContactPanel />
  </>;
}
