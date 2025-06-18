import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Validation function
  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) errs.email = "Email is required.";
    else if (!/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(formData.email))
      errs.email = "Invalid email format.";
    if (!formData.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);

      try {
        const response = await fetch("http://localhost:5000/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          toast.success(data.message);
          setFormData({ name: "", email: "", message: "" });
        } else {
          toast.error(data.message || "Something went wrong.");
        }
      } catch (error) {
        toast.error("Failed to send message. Please try again later.");
        console.error("Error:", error);
      } finally {
        setSubmitting(false);
      }
    } else {
      toast.error("Please fix the errors before submitting.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-white dark:bg-dark-bg text-gray-900 dark:text-white">
      <motion.div
        className="w-full max-w-2xl bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-accent">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full px-4 py-2 rounded bg-gray-200 dark:bg-gray-800
                         focus:ring-2 focus:ring-accent
                         ${errors.name ? "border border-red-500" : ""}`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full px-4 py-2 rounded bg-gray-200 dark:bg-gray-800
                         focus:ring-2 focus:ring-accent
                         ${errors.email ? "border border-red-500" : ""}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`w-full px-4 py-2 rounded bg-gray-200 dark:bg-gray-800
                         focus:ring-2 focus:ring-accent resize-none
                         ${errors.message ? "border border-red-500" : ""}`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-3 rounded text-white font-semibold transition
                       ${
                         submitting
                           ? "bg-accent/60 cursor-not-allowed"
                           : "bg-accent hover:bg-green-600"
                       }`}
          >
            {submitting ? "Sending…" : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
