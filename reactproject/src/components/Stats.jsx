import CountUp from "react-countup";

const stats = [
  { value: 1578, label: "Projects Delivered" },
  { value: 10000, label: "Happy Clients" },
  { value: 5485, label: "Years of Experience" },
  { value: 1000, label: "Cups of Coffee" }
];

export default function Stats() {
  return (
    <section className="py-20 bg-navy text-white text-center" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-12">Our Achievements</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {stats.map(({ value, label }) => (
          <div key={label} className="bg-[#012a65] rounded-5xl p-10 w-48 shadow hover:shadow-5xl transition">
            <div className="text-4xl font-extrabold text-primary mb-2">
              <CountUp end={value} duration={3} />+
            </div>
            <div className="uppercase text-sm tracking-wider">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}