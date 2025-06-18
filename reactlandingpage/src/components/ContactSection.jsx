export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-neutral-900" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-12 text-navy dark:text-primary text-center">Contact Us</h2>
      <div className="max-w-6xl mx-auto flex flex-wrap gap-10 justify-center">
        <form className="flex flex-col gap-4 w-full max-w-md">
          <input type="text" placeholder="Your Name" required className="p-3 rounded border" />
          <input type="email" placeholder="Your Email" required className="p-3 rounded border" />
          <textarea rows="5" placeholder="Your Message" className="p-3 rounded border" />
          <button type="submit" className="bg-primary text-white py-3 rounded hover:brightness-110">Send Message</button>
        </form>
        <div className="rounded shadow overflow-hidden w-full max-w-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58658041.22408656!2d7.810985599999961!3d26.190083300000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb7fd8669a9c7%3A0xd8353f3ef6e250f7!2sMithila%20Stack!5e0!3m2!1sen!2sin!4v1749115659297!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mithila Stack Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
