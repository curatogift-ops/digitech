import Link from "next/link";

const posts = [
  {
    title: "Why every business needs a professional website in 2026",
    slug: "why-every-business-needs-website-2026",
    excerpt: "A website is your office, salesperson, and proof that the business is real. Here is what changes when you have one.",
    date: "29 Jan 2026",
    read: "5 min",
    image: "/images/blog/main-image.png",
  },
];

export default function BlogPage() {
  return (
    <main className="page-pad">
      <section className="wrap page-hero">
        <p className="kicker">Insights</p>
        <h1>Notes on sites, search, and getting found.</h1>
        <p className="lede">Short pieces from the studio. No trend roundups. Just the decisions that affect whether a site earns its keep.</p>
      </section>
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="wrap post-grid">
          {posts.map((post) => (
            <article key={post.slug} className="card project-tile">
              <img src={post.image} alt="" />
              <div>
                <p className="kicker">{post.date} · {post.read}</p>
                <h2 style={{ fontSize: "1.8rem", margin: "10px 0" }}>{post.title}</h2>
                <p style={{ color: "var(--muted)" }}>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="btn btn-ghost" style={{ marginTop: 16 }}>Read</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
