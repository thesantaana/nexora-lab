import { projects } from '../data/content';
import { useLanguage } from '../state/language';
import { Reveal } from '../components/Reveal';
import { ContactPanel } from '../components/ContactPanel';

export default function Work() {
  const { language } = useLanguage();
  return <><section className="page-hero"><span>SELECTED WORK / 02</span><h1>{language === 'zh' ? '技术，只有落地才有价值。' : 'Technology matters when it ships.'}</h1><p>{language === 'zh' ? '四个跨越桌面应用、企业平台与 AI 系统的代表项目。' : 'Four selected projects spanning desktop applications, enterprise platforms and AI systems.'}</p></section>
    <section className="work-list section-pad">{projects.map((p, index) => <Reveal key={p.slug} className="case-study">
      <div className="case-intro"><span>{p.id} / CASE</span><h2>{p.title}</h2><h3>{language === 'zh' ? p.zh : p.en}</h3><p>{language === 'zh' ? p.summaryZh : p.summaryEn}</p><div className="tags">{p.stack.map(t => <span key={t}>{t}</span>)}</div></div>
      <div className={`case-gallery gallery-${index}`}>{p.images.map((img, i) => <img key={img} src={img} loading="lazy" alt={`${p.title} ${i + 1}`} />)}</div>
    </Reveal>)}</section><ContactPanel /></>;
}
