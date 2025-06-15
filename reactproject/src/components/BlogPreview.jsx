const posts = [
  { img: "/assets/blog1.jpg", title: "Why Every Business Needs a Website", desc: "Learn how an online presence can transform your local business into a brand." },
  { img: "/assets/blog2.jpg", title: "Top 5 Website Design Trends in 2025", desc: "Discover modern design trends that keep your site visually engaging and effective." },
  { img: "/assets/blog3.jpg", title: "Case Study: Makhana Seller's Digital Growth", desc: "How we helped a local brand reach national customers with a powerful website." }
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-20 bg-white" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-12 text-navy">Latest Blog Posts</h2>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 max-w-6xl mx-auto">
        {posts.map(({ img, title, desc }) => (
          <article key={title} className="bg-slate-50 dark:bg-neutral-800 rounded-xl shadow hover:shadow-xl transition-all">
            <img src={img} alt={title} className="w-full rounded-t-xl" />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-navy dark:text-primary mb-2">{title}</h3>
              <p className="text-sm mb-4">{desc}</p>
              <a href="#" className="text-primary font-medium">Read More →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
