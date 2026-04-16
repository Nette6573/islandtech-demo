"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function BookPage() {
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "bookings"), {
        ...form,
        createdAt: new Date().toISOString(),
      });

      alert("Booking submitted successfully!");

      setForm({
        fullName: "",
        businessName: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        notes: "",
      });
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("There was an error submitting your booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <main className="min-h-screen bg-linear-to-br from-purple-100 via-pink-50 to-purple-200 flex items-center justify-center px-4 py-12">

    <div className="w-full max-w-6xl grid md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden">

      {/* LEFT SIDE (BRANDING) */}
      <div className="bg-linear-to-br from-purple-600 to-pink-500 text-white p-10 flex flex-col justify-center">

        <h2 className="text-3xl font-bold mb-4">
          IslandTech Solutions
        </h2>

        <p className="text-lg mb-6 text-purple-100">
          Helping Jamaican businesses grow with modern digital solutions.
        </p>

        <ul className="space-y-3 text-sm">
          <li>✔ Professional Websites</li>
          <li>✔ Booking Systems</li>
          <li>✔ Business Setup</li>
          <li>✔ Ongoing Support</li>
        </ul>

        <div className="mt-8 text-sm text-purple-200">
          📞 Fast setup | 💬 Easy communication | 🚀 Real results
        </div>

      </div>

      {/* RIGHT SIDE (FORM) */}
      <div className="p-8 md:p-10">

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Book a Consultation
        </h1>

        <p className="text-gray-500 mb-6">
          Tell us what you need and reserve a time.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-pink-300 outline-none"
          />

          <input
            name="businessName"
            placeholder="Business Name"
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-purple-300 outline-none"
          />

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-pink-300 outline-none"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-purple-300 outline-none"
          />

          <select
            name="service"
            onChange={handleChange}
            required
            aria-label="Select a service"
            className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-pink-300 outline-none"
          >
            <option value="">Select a service</option>
            <option>Website Development</option>
            <option>Booking System Setup</option>
            <option>Business Starter Package</option>
            <option>Website + Booking Package</option>
            <option>Tech Consultation</option>
            <option>Custom Solution</option>
          </select>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              onChange={handleChange}
              required
              placeholder="Select date"
              className="rounded-xl border px-4 py-3"
            />
            <input
              type="time"
              name="time"
              onChange={handleChange}
              required
              placeholder="Select time"
              className="rounded-xl border px-4 py-3"
            />
          </div>

          <textarea
            name="notes"
            placeholder="Briefly describe what you need..."
            rows={4}
            onChange={handleChange}
            className="w-full rounded-xl border px-4 py-3"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>

        </form>

      </div>

    </div>

  </main>
);
}