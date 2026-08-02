import { useLanguage } from '../state/language';
import { ContactPanel } from '../components/ContactPanel';

export default function Contact() {
  const { language } = useLanguage();
  return <><section className="page-hero contact-hero"><span>CONTACT / 04</span><h1>{language === 'zh' ? '先聊清楚，再开始做。' : 'Clarity first. Then we build.'}</h1><p>{language === 'zh' ? '发送项目背景、核心功能与期望时间，我们会根据具体需求评估方案。' : 'Send your context, core functions and target timeline. We will evaluate a fitting approach.'}</p></section>
    <section className="contact-page section-pad"><div className="qr-static"><span>WECHAT / 微信咨询</span><img src="/assets/wechat-qr.jpg" alt="隋咏轩微信二维码" /><p>{language === 'zh' ? '添加时请备注「项目咨询」' : 'Please note “Project inquiry”'}</p></div><div className="contact-info"><div><span>PHONE</span><a href="tel:19313006137">193 1300 6137</a></div><div><span>PROJECT BRIEF</span><a href="./downloads/NEXORA-LAB-项目需求表.docx" download>{language === 'zh' ? '下载 Word 需求表 ↘' : 'Download Word brief ↘'}</a></div><div><span>AVAILABILITY</span><p>{language === 'zh' ? '按需求评估 · 支持远程协作' : 'Scoped per project · Remote collaboration'}</p></div></div></section><ContactPanel /></>;
}
