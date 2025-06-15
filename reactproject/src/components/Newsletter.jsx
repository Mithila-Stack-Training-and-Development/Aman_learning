import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
    } else {
      alert(`Thanks for subscribing with ${email}!`);
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="py-20" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6 text-navy dark:text-primary">Subscribe to Our Newsletter</h2>
      <div className="flex justify-center gap-2">
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" className="p-3 rounded border w-72" />
        <button onClick={handleSubscribe} className="bg-primary text-white px-6 py-3 rounded hover:brightness-110">Subscribe</button>
      </div>
    </section>
  );
}