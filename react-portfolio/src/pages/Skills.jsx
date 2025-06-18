export default function Skills() {
  return (
    <section className="p-12 bg-darker-bg min-h-screen text-center">
      <h2 className="text-4xl font-bold mb-8 text-accent">Technical Expertise</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:translate-y-[-10px] hover:shadow-accent transition-transform duration-300">
          <i className="fas fa-code text-4xl text-accent mb-4"></i>
          <h3 className="text-2xl font-semibold mb-2">Frontend Development</h3>
          <p>React, Vue, HTML5, CSS3, JavaScript</p>
        </div>
        <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:translate-y-[-10px] hover:shadow-accent transition-transform duration-300">
          <i className="fas fa-server text-4xl text-accent mb-4"></i>
          <h3 className="text-2xl font-semibold mb-2">Backend Development</h3>
          <p>Node.js, Python, MongoDB, PostgreSQL</p>
        </div>
        <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:translate-y-[-10px] hover:shadow-accent transition-transform duration-300">
          <i className="fas fa-paint-brush text-4xl text-accent mb-4"></i>
          <h3 className="text-2xl font-semibold mb-2">UI/UX Design</h3>
          <p>Figma, Adobe XD, Prototyping, User Testing</p>
        </div>
      </div>
    </section>
  );
}
