const testimonials = [
  { quote: "Mithila Stack delivered our project on time with great quality. Highly recommended!", name: "Ramesh Kumar, Tirhutwala" },
  { quote: "Their design, development, and support were top-notch. I’ll work with them again!", name: "Priya Sinha, Startup Founder" },
  { quote: "Professional team and outstanding results. Truly impressed by their service!", name: "A. Verma, Local Business Owner" }
];

export default function Testimonials() {
  return (
    <section  className="py-20 bg-slate-100 dark:bg-neutral-800" id="testimonials" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-12 text-navy dark:text-primary text-center">What Our Clients Say</h2>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {testimonials.map(({ quote, name }) => (
          <div key={name} className="bg-white dark:bg-neutral-900 rounded-xl shadow p-8 max-w-sm hover:shadow-xl transition-all">
            <p className="italic mb-4">“{quote}”</p>
            <h4 className="font-semibold text-right">– {name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}