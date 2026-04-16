export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-purple-100 via-pink-50 to-purple-200 text-gray-900">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 py-5 bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-purple-600">
          IslandTech Solutions
        </h1>

        <a
          href="/book"
          className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg font-semibold transition"
        >
          Book Consultation
        </a>
      </nav>

      {/* HERO */}
      <section className="text-center mt-28 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Grow Your Business With a
          <span className="text-pink-500"> Website & Booking System</span>
        </h2>

        <p className="text-lg text-gray-700">
          We help Jamaican businesses attract more customers,
          automate bookings, and look professional online.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="/book"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
          >
            Book Consultation
          </a>

          <a
            href="#services"
            className="border border-gray-900 px-6 py-3 rounded-xl hover:bg-gray-900 hover:text-white transition"
          >
            View Services
          </a>
        </div>

        {/* TRUST LINE */}
        <p className="mt-6 text-sm text-gray-500">
          Trusted solutions • Fast delivery • Built for real businesses
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="mt-32 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1">
            <h4 className="text-xl font-semibold text-purple-600">
              Website Development
            </h4>
            <p className="text-gray-600 mt-2">
              Professional websites designed to attract and convert customers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1">
            <h4 className="text-xl font-semibold text-pink-500">
              Booking Systems
            </h4>
            <p className="text-gray-600 mt-2">
              Let customers book your services anytime—no missed opportunities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1">
            <h4 className="text-xl font-semibold text-yellow-500">
              Tech Setup
            </h4>
            <p className="text-gray-600 mt-2">
              Get your business fully set up with modern digital tools.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-32 px-6 text-center max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-12">
          How It Works
        </h3>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold text-purple-600 mb-2">
              1. Contact Us
            </h4>
            <p className="text-gray-600">
              Tell us about your business and what you need.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold text-pink-500 mb-2">
              2. We Build
            </h4>
            <p className="text-gray-600">
              We create your system quickly and professionally.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold text-yellow-500 mb-2">
              3. Get Customers
            </h4>
            <p className="text-gray-600">
              Start receiving bookings and growing your business.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="mt-32 text-center px-6 pb-24">
        <div className="bg-linear-to-r from-purple-600 to-pink-500 text-white p-10 rounded-2xl max-w-3xl mx-auto shadow-lg">

          <h3 className="text-3xl font-bold mb-4">
            Ready to Get More Customers?
          </h3>

          <p className="mb-6 text-purple-100">
            Let’s build something that works for your business.
          </p>

          <a
            href="/book"
            className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Book a Consultation
          </a>

        </div>
      </section>

    </main>
  );
}