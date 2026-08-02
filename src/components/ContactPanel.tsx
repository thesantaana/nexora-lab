import { useState } from 'react';
import { useLanguage } from '../state/language';

export function ContactPanel() {
  const { language } = useLanguage();
  const [qr, setQr] = useState(false);
  const phone = '19313006137';
  return <>
    <section className="contact-panel">
      <p>{language === 'zh' ? '有一个想法？' : 'Have an idea?'}</p>
      <h2>{language === 'zh' ? '让我们把它做成。' : 'Let’s make it real.'}</h2>
      <div className="contact-actions">
        <button className="primary-button magnetic" onClick={() => setQr(true)}>{language === 'zh' ? '微信咨询' : 'Chat on WeChat'} <span>↗</span></button>
        <a href={`tel:${phone}`} className="text-link">{phone}</a>
        <a href="./downloads/NEXORA-LAB-项目需求表.docx" download className="text-link">{language === 'zh' ? '下载项目需求表 ↓' : 'Download project brief ↓'}</a>
      </div>
    </section>
    {qr && <div className="modal" role="dialog" aria-modal="true" aria-label="微信二维码" onClick={() => setQr(false)}>
      <div className="qr-card" onClick={e => e.stopPropagation()}>
        <button onClick={() => setQr(false)} aria-label="关闭">×</button>
        <span>WECHAT / 微信</span>
        <img src="/assets/wechat-qr.jpg" alt="隋咏轩微信加好友二维码" />
        <p>{language === 'zh' ? '扫码添加，备注「项目咨询」' : 'Scan to add. Note: Project inquiry'}</p>
      </div>
    </div>}
  </>;
}
