import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Graphisme rap, DA & management d'artistes",
  description:
    "Articles sur le graphisme rap, la direction artistique musicale et le management d'artistes indépendants — par Nelliana BEX.",
  alternates: { canonical: "https://nellianabex.fr/blog" },
};

export const revalidate = 60;

const CATEGORY_COLORS: Record<string, string> = {
  graphisme: "bg-fluo text-noir",
  "direction-artistique": "bg-white/10 text-blanc-casse",
  management: "bg-white/10 text-blanc-casse",
  photographie: "bg-white/10 text-blanc-casse",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen pt-32 pb-24 px-5 md:px-12 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="mb-16">
        <p className="text-gris-sombre text-xs font-body uppercase tracking-widest mb-4">
          Blog
        </p>
        <h1 className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-none text-blanc-casse">
          NOTES &{" "}
          <span className="text-fluo">PROCESS</span>
        </h1>
        <p className="mt-6 text-gris-sombre font-body text-base max-w-xl">
          Graphisme rap, direction artistique, management d'artistes — ce que j'apprends en faisant.
        </p>
      </div>

      {/* Posts */}
      {posts.length === 0 ? (
        <p className="text-gris-sombre font-body">Premiers articles à venir.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border border-white/8 rounded-2xl p-6 hover:border-fluo/40 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.04]"
            >
              {post.image && (
                <div className="w-full aspect-video rounded-xl overflow-hidden mb-5 bg-white/5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              )}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className={`text-[10px] font-body font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                    CATEGORY_COLORS[post.category] ?? "bg-white/10 text-blanc-casse"
                  }`}
                >
                  {post.category.replace("-", " ")}
                </span>
                <span className="text-gris-sombre text-[10px] font-body">
                  {new Date(post.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h2 className="font-display text-xl text-blanc-casse leading-tight mb-2 group-hover:text-fluo transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-gris-sombre font-body text-sm leading-relaxed line-clamp-3">
                {post.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-body text-fluo/60 group-hover:text-fluo transition-colors duration-200">
                Lire →
              </span>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
