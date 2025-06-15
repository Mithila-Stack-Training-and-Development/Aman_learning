const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "DevOps Consulting"
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20" data-aos="fade-up">
     

      <h2 className="text-3xl font-bold mb-12 text-black dark:text-primary">Our Services</h2>
      <div className=" grid gap-6 lg:grid-cols-4 md:grid-cols-2 max-w-5xl mx-auto">
        {services.map((s) => (
          <div key={s} className="bg-white dark:bg-cardDark rounded-xl p-6 shadow hover:shadow-lg transition-all">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}