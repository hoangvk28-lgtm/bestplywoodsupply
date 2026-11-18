import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Minimal inline markup for article content: [text](href) and **bold**.
 * Internal paths use next/link; http(s) links open as external.
 */
export function RichText({ text }: { text: string }) {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      const href = m[2];
      const cls = "font-semibold text-forest underline decoration-gold/60 underline-offset-[3px] hover:decoration-forest";
      out.push(
        href.startsWith("/") ? (
          <Link key={i++} href={href} className={cls}>{m[1]}</Link>
        ) : (
          <a key={i++} href={href} className={cls} rel="noopener" target="_blank">{m[1]}</a>
        ),
      );
    } else {
      out.push(<strong key={i++} className="font-semibold text-charcoal">{m[3]}</strong>);
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

/** Plain-text version for JSON-LD. */
export const plain = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");
