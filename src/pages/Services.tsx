import { services } from '../data/content';
import { useLanguage } from '../state/language';
import { Reveal } from '../components/Reveal';
import { ContactPanel } from '../components/ContactPanel';

export default function Services() {
  const { language } = useLanguage();
  return <><section className="page-hero"><span>CAPABILITIES / 01</span><h1>{language === 'zh' ? '从需求到上线，完整负责。' : 'From brief to launch, fully owned.'}</h1><p>{language === 'zh' ? '我们不出售标准套餐。每个项目根据目标、功能与周期单独评估。' : 'We do not sell fixed packages. Every project is scoped around its goals, functions and timeline.'}</p></section>
    <section className="services-page section-pad">{services.map((s, i) => <Reveal key={s.no} className="service-detail"><div><span>{s.no}</span><h2>{language === 'zh' ? s.zh : s.en}</h2></div><p>{language === 'zh' ? s.detailZh : s.detailEn}</p><ul>{(i === 0 ? ['Responsive Design', 'Bilingual Content', 'SEO Basics'] : i === 1 ? ['Business Systems', 'Desktop Apps', 'Data Platforms'] : i === 2 ? ['WeChat', 'Mobile UX', 'API Integration'] : i === 3 ? ['Agents & RAG', 'Computer Vision', 'Automation'] : ['Source Delivery', 'Deployment', '60-day Support']).map(x => <li key={x}>{x}</li>)}</ul></Reveal>)}</section>
    <section className="process section-pad"><span className="section-label">PROCESS / 合作流程</span><div>{[['01','DISCOVER','需求沟通'],['02','DEFINE','范围确认'],['03','BUILD','设计开发'],['04','VERIFY','测试验收'],['05','DELIVER','部署交付']].map(([n,en,zh]) => <article key={n}><span>{n}</span><h3>{en}</h3><p>{language === 'zh' ? zh : en}</p></article>)}</div></section><ContactPanel /></>;
}
