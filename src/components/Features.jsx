import React from 'react'

const features = [
  { title: 'Responsive by default', desc: 'Tailwind CSS and semantic HTML for fluid layouts from mobile to desktop.' },
  { title: 'Clean & modular code', desc: 'Small, focused components and clear structure make maintenance easy.' },
  { title: 'API integration', desc: 'Contact form posts to the provided endpoint with validation & states.' },
]

export default function Features() {
  return (
    <section id="features" className="py-16 bg-slate-50">
      <div className="container-narrow">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-soft transition">
              <h3 className="font-semibold text-lg text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
