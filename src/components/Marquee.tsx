export function Marquee({ text }: { text: string }) {
  return <div className="marquee" aria-hidden="true"><div>{Array.from({ length: 6 }, (_, i) => <span key={i}>{text} <b>↗</b></span>)}</div></div>;
}
