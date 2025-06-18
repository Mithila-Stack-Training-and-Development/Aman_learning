import profile from '../assets/profile.jpg';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center p-12 bg-gradient-radial from-accent-glow to-transparent">
      <div className="flex-1 pr-0 md:pr-20 text-center md:text-left">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
          Full-Stack Developer
        </h1>
        <p className="mt-6 text-xl opacity-90 max-w-xl mx-auto md:mx-0">
          Building Digital experiences that merge Creativity with Technology
        </p>
        <p className="mt-4 text-accent font-semibold max-w-xl mx-auto md:mx-0">
          Specializing in Modern Web Development and Cyber Security
        </p>
        <a
          href="/contact"
          className="inline-block mt-8 px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-green-700 text-white hover:opacity-90 transition"
        >
          Let's Connect
        </a>
      </div>
      <div className="flex-1 text-center mt-12 md:mt-0">
        <img
          src={profile}
          alt="Profile"
          className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-accent shadow-lg animate-float filter grayscale-20 contrast-110 mx-auto"
        />
        <p className="mt-6 max-w-md mx-auto text-white/90">
          Hi! This is Aman Roy, currently pursuing B.Tech in Computer Science and Engineering (specialization in Cyber Security). I'm constantly learning and improving, excited about new technologies, and always open to collaborating on innovative projects.
        </p>
      </div>
    </section>
  );
}
