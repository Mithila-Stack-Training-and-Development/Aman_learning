export default function Projects() {
  return (
    <section className="p-12 bg-darker-bg min-h-screen text-center">
      <h2 className="text-4xl font-bold mb-8 text-accent">Projects</h2>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:shadow-accent hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
          <p>Details about project 1...</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:shadow-accent hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
          <p>Details about project 2...</p>
        </div>
      </div>
    </section>
  );
}
