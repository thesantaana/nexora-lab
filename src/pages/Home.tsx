import { Link } from 'react-router-dom';
import { projects, services } from '../data/content';
import { useLanguage } from '../state/language';
import { Reveal } from '../components/Reveal';
import { ContactPanel } from '../components/ContactPanel';

export default function Home() {
  const { language } = useLanguage();
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  return <div className={`k-home ${language === 'zh' ? 'lang-zh' : 'lang-en'}`}>
    <section className="k-hero">
      <div className="k-hero-media" aria-hidden="true">
        <img src={asset('assets/nexora-hero.png')} className="active" alt="" />
        <div className="k-hero-vignette" />
        <div className="k-hero-scan" />
      </div>
      <div className="k-hero-copy">
        <p className="k-overline">NEXORA LAB · DIGITAL PRODUCT STUDIO</p>
        <h1>{language === 'zh' ? <>构建下一代<br />数字体验</> : <>Build what<br />comes next.</>}</h1>
        <p className="k-hero-lead">{language === 'zh' ? '从网站、业务系统到 AI 应用，把复杂技术做成真正可靠、好用的产品。' : 'From websites and business systems to AI applications — turning complex technology into products people trust.'}</p>
        <div className="k-hero-actions">
          <Link className="k-button light" to="/contact">{language === 'zh' ? '开始合作' : 'Start a project'} <span>↗</span></Link>
          <Link className="k-button glass" to="/work">{language === 'zh' ? '查看案例' : 'Explore work'}</Link>
        </div>
      </div>
      <div className="k-hero-foot">
        <span>01 / NEXORA</span>
        <div className="k-progress"><i /></div>
        <span>SYSTEMS IN MOTION</span>
      </div>
    </section>

    <section className="k-intro">
      <Reveal><p className="k-section-label">01 · WHAT WE DO</p></Reveal>
      <Reveal><h2>{language === 'zh' ? <>一支小而精的技术团队，<br /><span>为真实业务交付完整产品。</span></> : <>A focused engineering team,<br /><span>shipping complete digital products.</span></>}</h2></Reveal>
      <Reveal className="k-intro-meta"><p>{language === 'zh' ? '年轻、灵活、价格友好，同时坚持正式工作室级别的流程、代码质量与交付规范。' : 'Young, flexible and cost-friendly, with studio-grade process, code quality and delivery standards.'}</p><Link to="/about">{language === 'zh' ? '认识团队' : 'Meet the team'} <b>↗</b></Link></Reveal>
    </section>

    <section className="k-showcase">
      <div className="k-section-head"><p className="k-section-label">02 · SELECTED WORK</p><Link to="/work">{language === 'zh' ? '查看全部' : 'View all'} ↗</Link></div>
      <div className="k-feature-stack">
        {projects.map((project, index) => <Reveal key={project.slug} className="k-feature-card">
          <img src={asset(project.images[0].replace(/^\//, ''))} alt={`${project.title} ${language === 'zh' ? project.zh : project.en}`} />
          <div className="k-feature-shade" />
          <div className="k-feature-top"><span>0{index + 1}</span><span>{project.stack.slice(0, 2).join(' · ')}</span></div>
          <div className="k-feature-copy"><p>{language === 'zh' ? project.zh : project.en}</p><h3>{project.title}</h3><span className="k-round-arrow">↗</span></div>
        </Reveal>)}
      </div>
    </section>

    <section className="k-capabilities">
      <div className="k-section-head"><p className="k-section-label">03 · CAPABILITIES</p><Link to="/services">{language === 'zh' ? '服务详情' : 'All services'} ↗</Link></div>
      <div className="k-cap-grid">
        {services.slice(0, 4).map((service, index) => <Reveal key={service.no} className="k-cap-card">
          <div><span>0{index + 1}</span><b>↗</b></div>
          <h3>{language === 'zh' ? service.zh : service.en}</h3>
          <p>{language === 'zh' ? service.detailZh : service.detailEn}</p>
        </Reveal>)}
      </div>
    </section>

    <section className="k-proof">
      <Reveal className="k-proof-copy"><p className="k-section-label">04 · DELIVERY STANDARD</p><h2>{language === 'zh' ? '不是演示。是能上线、能维护、能持续迭代的产品。' : 'Not a demo. A product built to launch, maintain and evolve.'}</h2></Reveal>
      <div className="k-proof-list">
        {['需求拆解 / Discovery', '界面与架构 / Design', '开发与测试 / Build', '部署与售后 / Support'].map((item, index) => <Reveal key={item}><span>0{index + 1}</span><p>{item}</p><b>●</b></Reveal>)}
      </div>
    </section>
    <ContactPanel />
  </div>;
}
