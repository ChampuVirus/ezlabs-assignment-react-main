import React from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Features from "./components/Features.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main id="main" className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-slate-200">
          <HeroSection />
        </section>

        {/* Features Section */}
        <section className="bg-slate-50 py-20">
          <div className="container-narrow">
            <Features />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-tr from-white to-blue-50"
        >
          <div className="container-narrow text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 animate-fadeIn">
              Let’s Connect 💬
            </h2>
            <p className="text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed">
              Got a project idea or just want to say hello? Drop your message
              below and we’ll respond soon.
            </p>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
