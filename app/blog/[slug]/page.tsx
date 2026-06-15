import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export const revalidate = 60;

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article introuvable" };

  const baseUrl = "https://nellianabex.fr";
  const ogImage = post.image ?? `${baseUrl}/nelliana-og.jpg`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${baseUrl}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [ogImage] },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen pt-32 pb-24 px-5 md:px-12">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gris-sombre text-xs font-body uppercase tracking-widest mb-12 hover:text-fluo transition-colors"
        >
          ← Blog
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-body font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-fluo text-noir">
            {post.category.replace("-", " ")}
          </span>
          <span className="text-gris-sombre text-[10px] font-body">
            {new Date(post.date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="text-gris-sombre text-[10px] font-body">· {post.author}</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-[clamp(2rem,6vw,4rem)] leading-none text-blanc-casse mb-6">
          {post.title}
        </h1>
        <p className="text-gris-sombre font-body text-base leading-relaxed mb-10 border-l-2 border-fluo pl-4">
          {post.description}
        </p>

        {/* Cover image */}
        {post.image && (
          <div className="w-full aspect-video rounded-2xl overflow-hidden mb-12 bg-white/5">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Content */}
        <article className="prose prose-invert prose-sm md:prose-base max-w-none
          prose-headings:font-display prose-headings:text-blanc-casse prose-headings:tracking-wide
          prose-p:text-gris-sombre prose-p:font-body prose-p:leading-relaxed
          prose-a:text-fluo prose-a:no-underline hover:prose-a:underline
          prose-strong:text-blanc-casse
          prose-code:text-fluo prose-code:bg-white/5 prose-code:px-1 prose-code:rounded
          prose-li:text-gris-sombre prose-li:font-body
          prose-blockquote:border-fluo prose-blockquote:text-gris-sombre">
          <MDXRemote source={post.content} />
        </article>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-white/8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-body text-gris-sombre border border-white/10 rounded-full px-3 py-1"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 p-6 border border-fluo/20 rounded-2xl bg-fluo/[0.03]">
          <p className="font-display text-xl text-blanc-casse mb-2">Tu cherches quelqu'un pour ton projet ?</p>
          <p className="text-gris-sombre font-body text-sm mb-4">Graphisme, DA, management — on en parle.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-fluo text-noir font-body font-semibold text-sm rounded-lg hover:scale-105 transition-transform duration-200"
          >
            Travaillons ensemble →
          </Link>
        </div>
      </div>
    </main>
  );
}
