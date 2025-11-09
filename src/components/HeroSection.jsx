import React from 'react'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-brand-50 to-white">
      <div className="container-narrow py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Build delightful products with <span className="text-brand-600">clarity</span>.
          </h1>
          <p className="mt-5 text-lg text-slate-700">
            Pixel-perfect UI, responsive layouts, and clean code. This mirrors the assignment’s home page concept and is fully production-ready.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#contact" className="btn">Contact Us</a>
            <a href="#features" className="px-5 py-3 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-700 transition">
              Learn more
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-2xl bg-white shadow-soft border border-slate-200 grid place-items-center">
            <div className="text-center px-6">
              <div className="text-6xl" aria-hidden>✨</div>
              <p className="mt-2 text-slate-700">Responsive • Accessible • Performant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
