import { useLanguage } from '../state/language';
import { ContactPanel } from '../components/ContactPanel';

export default function About() {
  const { language } = useLanguage();
  return <><section className="page-hero about-hero"><span>ABOUT / 03</span><h1>{language === 'zh' ? '青年视角，工程标准。' : 'Young perspective. Engineering standards.'}</h1></section>
    <section className="about-copy section-pad"><p>{language === 'zh' ? 'NEXORA LAB 是由中南大学计算机学院软件工程专业学生组成的独立开发团队。我们重视技术深度，也重视需求边界、沟通节奏和最终交付。' : 'NEXORA LAB is an independent development team formed by Software Engineering students from CSU School of Computer Science. We value technical depth, clear scope, communication and delivery.'}</p><div className="metrics"><div><b>04</b><span>{language === 'zh' ? '代表项目' : 'Selected projects'}</span></div><div><b>02</b><span>{language === 'zh' ? '核心成员' : 'Core members'}</span></div><div><b>60</b><span>{language === 'zh' ? '天售后支持' : 'Days support'}</span></div></div></section>
    <section className="team section-pad"><article><div className="avatar">SYX</div><span>CO-FOUNDER / FULL-STACK & DESKTOP</span><h2>SYX</h2><p>{language === 'zh' ? '全栈、桌面应用、计算机视觉与项目协作。' : 'Full-stack, desktop applications, computer vision and project coordination.'}</p></article><article><div className="avatar inverse">KLC</div><span>CO-FOUNDER / BACKEND & AI</span><h2>KLC</h2><p>{language === 'zh' ? '后端系统、AI 智能体、数据平台与服务部署。' : 'Backend systems, AI agents, data platforms and service deployment.'}</p></article></section>
    <section className="principles section-pad"><span className="section-label">OUR STANDARD</span>{[['01','SCOPE','范围写清楚'],['02','PROGRESS','过程看得见'],['03','SOURCE','源码可交付'],['04','SUPPORT','售后有边界']].map(([n,en,zh]) => <div key={n}><span>{n}</span><b>{en}</b><p>{language === 'zh' ? zh : en}</p></div>)}</section><ContactPanel /></>;
}
