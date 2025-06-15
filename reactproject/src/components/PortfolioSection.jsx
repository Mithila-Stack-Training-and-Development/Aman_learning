const works = [
  "Startup Website",
  "Mobile App UI",
  "E-Commerce Platform",
  "Blog CMS"
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-12 text-navy dark:text-primary">Our Work</h2>
      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 max-w-5xl mx-auto">
        {works.map((w) => (
          <div key={w} className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow hover:shadow-lg transition-all">
            {w}
          </div>
        ))}
      </div>
    </section>
  );
}
