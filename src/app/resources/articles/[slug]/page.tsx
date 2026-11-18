import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { Img } from "@/components/Img";
import { ArticleCard, fmtDate, sectionTitle } from "@/components/resources";
import { RichText, plain } from "@/components/RichText";
import { ArrowLink, Breadcrumbs, JsonLd } from "@/components/ui";
import { articles, getArticle, type ArticleBlock } from "@/content/resources";
import { productHref, productName } from "@/content/products";
import { articleLd, faqLd, pageMeta } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => articles.map((a) => ({ slug: a.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticle((await params).slug);
  if (!a) return {};
  return pageMeta({ title: a.title.split(":")[0], description: a.description, path: `/resources/articles/${a.slug}/`, type: "article" });
}

const pCls = "mt-4 text-[1.05rem] leading-[1.75] text-charcoal/85";
const anchor = (h: string) => h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function Block({ b }: { b: ArticleBlock }) {
  return (
    <section id={anchor(b.h)} className="scroll-mt-24">
      <h2 className="text-[1.5rem]">{b.h}</h2>
      {b.p?.map((p) => <p key={p} className={pCls}><RichText text={p} /></p>)}
      {b.image && (
        <figure className="mt-6">
          <Img name={b.image.name} alt={b.image.alt} sizes="(min-width: 900px) 680px, 100vw" className="h-auto w-full rounded-xl" />
          {b.image.caption && <figcaption className="mt-2 text-[.85rem] text-stone">{b.image.caption}</figcaption>}
        </figure>
      )}
      {b.list && (
        <ul className="mt-4 space-y-2.5">
          {b.list.map((l) => <li key={l} className="flex gap-3 text-[1.02rem] leading-[1.65]"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-gold" /><span><RichText text={l} /></span></li>)}
        </ul>
      )}
      {b.steps && (
        <ol className="mt-4 space-y-3">
          {b.steps.map((l, i) => (
            <li key={l} className="flex gap-4 text-[1.02rem] leading-[1.65]">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-forest text-[.75rem] font-bold text-white">{i + 1}</span>
              <span><RichText text={l} /></span>
            </li>
          ))}
        </ol>
      )}
      {b.table && (
        <div className="table-scroll mt-6 rounded-2xl border border-line bg-white">
          <table className="spec-table min-w-[560px]">
            <caption className="sr-only">{b.table.caption}</caption>
            <thead><tr>{b.table.head.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
            <tbody>
              {b.table.rows.map((r) => (
                <tr key={r.join("|")}>
                  {r.map((c, i) => (i === 0 ? <th key={i} scope="row"><RichText text={c} /></th> : <td key={i}><RichText text={c} /></td>))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {b.after?.map((p) => <p key={p} className={pCls}><RichText text={p} /></p>)}
      {b.note && <p className="mt-5 border-l-2 border-gold bg-ivory px-5 py-4 text-[.95rem] leading-[1.65] text-charcoal/85"><RichText text={b.note} /></p>}
    </section>
  );
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const more = articles.filter((x) => x.slug !== a.slug && x.section === a.section).concat(articles.filter((x) => x.slug !== a.slug && x.section !== a.section)).slice(0, 3);
  const crumbs = [{ name: "Resources", href: "/resources/" }, { name: sectionTitle(a.section), href: `/resources/${a.section}/` }, { name: a.title, href: `/resources/articles/${a.slug}/` }];
  const long = a.body.length >= 6;

  return (
    <>
      <article>
        <header className="bg-ivory">
          <div className="wrap max-w-4xl pb-12 pt-10 md:pt-14">
            <Breadcrumbs items={crumbs} />
            <p className="eyebrow mb-5 mt-10">{sectionTitle(a.section)}</p>
            <h1 className="text-[clamp(2rem,1.5rem+2vw,3.1rem)]">{a.title}</h1>
            <p className="lede mt-5">{a.description}</p>
            <p className="mt-6 text-[.85rem] text-stone">
              <time dateTime={a.date}>{fmtDate(a.date)}</time>
              {a.updated && <> · Updated <time dateTime={a.updated}>{fmtDate(a.updated)}</time></>} · {a.readMinutes} min read · Best Plywood Supply
            </p>
          </div>
        </header>
        <div className="wrap max-w-4xl border-t border-line py-14">
          <div className="max-w-[68ch] space-y-10">
            {a.takeaways && (
              <div className="border border-line bg-white p-7">
                <p className="text-[.7rem] font-bold uppercase tracking-[.16em] text-forest-2">Key takeaways</p>
                <ul className="mt-4 space-y-2.5">
                  {a.takeaways.map((t) => <li key={t} className="flex gap-3 text-[1rem] leading-[1.6]"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-gold" /><span><RichText text={t} /></span></li>)}
                </ul>
              </div>
            )}
            {long && (
              <nav aria-label="Contents" className="text-[.95rem]">
                <p className="text-[.7rem] font-bold uppercase tracking-[.16em] text-stone">Contents</p>
                <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-stone">
                  {a.body.map((b) => <li key={b.h}><a href={`#${anchor(b.h)}`} className="text-charcoal/80 hover:text-forest">{b.h}</a></li>)}
                  {a.faq && <li><a href="#faq" className="text-charcoal/80 hover:text-forest">Frequently asked questions</a></li>}
                </ol>
              </nav>
            )}
            {a.body.map((b) => <Block key={b.h} b={b} />)}
            {a.faq && (
              <section id="faq" className="scroll-mt-24">
                <h2 className="text-[1.5rem]">Frequently asked questions</h2>
                <div className="mt-5 divide-y divide-line border-y border-line">
                  {a.faq.map((f) => (
                    <details key={f.q} className="group py-4">
                      <summary className="cursor-pointer list-none text-[1.05rem] font-semibold text-charcoal marker:hidden">{f.q}</summary>
                      <p className="mt-3 text-[1rem] leading-[1.7] text-charcoal/85"><RichText text={f.a} /></p>
                    </details>
                  ))}
                </div>
              </section>
            )}
            {a.sources && (
              <section className="text-[.88rem] text-stone">
                <p className="text-[.7rem] font-bold uppercase tracking-[.16em]">Sources & evidence</p>
                <ul className="mt-3 space-y-1.5">
                  {a.sources.map((s) => <li key={s.label}><RichText text={s.label} />{s.note && <> — {s.note}</>}</li>)}
                </ul>
              </section>
            )}
          </div>
          <aside className="mt-14 border-t border-line pt-8">
            <p className="text-[.7rem] font-bold uppercase tracking-[.16em] text-stone">Related products</p>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {a.relatedProducts.map((s) => <ArrowLink key={s} href={productHref(s)}>{productName(s)}</ArrowLink>)}
            </div>
          </aside>
        </div>
      </article>
      <section className="section-sm bg-white">
        <div className="wrap">
          <h2 className="text-[length:var(--text-h3)]">More resources</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{more.map((x) => <ArticleCard key={x.slug} a={x} />)}</div>
        </div>
      </section>
      <CTASection {...(a.cta ?? {})} />
      <JsonLd data={articleLd({ title: a.title, description: a.description, href: `/resources/articles/${a.slug}/`, date: a.date })} />
      {a.faq && <JsonLd data={faqLd(a.faq.map((f) => ({ q: f.q, a: plain(f.a) })))} />}
    </>
  );
}
