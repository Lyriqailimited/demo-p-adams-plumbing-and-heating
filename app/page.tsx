const SERVICES = [
  "Boiler repair",
  "Boiler installation",
  "Plumbing repairs",
  "Emergency callouts",
];

const FEATURES = [
  {
    title: "24/7 Availability",
    description: "Our AI receptionist is available around the clock, so you never miss an important call.",
    icon: "🕐",
  },
  {
    title: "Instant Booking",
    description: "Customers can book appointments instantly without waiting on hold.",
    icon: "📅",
  },
  {
    title: "Never Miss a Call",
    description: "Every call is answered promptly, ensuring no lead is ever lost.",
    icon: "📞",
  },
];

export default function Home() {
  const bookingLink = process.env.GOOGLE_CALENDAR_BOOKING_LINK || "#book";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative py-24 px-6 text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a3a6b 0%, #f97316 100%)" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          P Adams Plumbing &amp; Heating
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Fast, reliable plumbing and heating services across Leeds — available 24/7 for emergencies.
        </p>
        <a
          href="#widget"
          className="inline-block px-8 py-4 rounded-full text-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-[#1a3a6b] transition-all"
        >
          Try AI Receptionist
        </a>
      </section>

      {/* Widget */}
      <section id="widget" className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: "#1a3a6b" }}>
            Talk to Our AI Receptionist
          </h2>
          <iframe
            src="/widget.html"
            title="AI Voice Receptionist"
            width="100%"
            height="600"
            style={{ border: "none", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#1a3a6b" }}>
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service}
                className="p-6 rounded-xl border-2 text-center font-semibold text-lg"
                style={{ borderColor: "#f97316", color: "#1a3a6b" }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#1a3a6b" }}>
            Why an AI Receptionist?
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Modernize how P Adams Plumbing &amp; Heating handles customer calls
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1a3a6b" }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center" style={{ background: "#1a3a6b" }}>
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-white/80 mb-8 text-lg">
          Book a demo call and see the AI receptionist in action
        </p>
        <a
          href={bookingLink}
          className="inline-block px-8 py-4 rounded-full text-lg font-semibold"
          style={{ background: "#f97316", color: "white" }}
        >
          Book a Demo Call
        </a>
      </section>
    </main>
  );
}
