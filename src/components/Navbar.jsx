import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container-narrow py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2" aria-label="EZ Labs home">
          <div className="w-9 h-9 rounded-2xl bg-brand-600 grid place-items-center text-white font-black">EZ</div>
          <span className="font-bold text-lg text-slate-900">Labs</span>
        </a>
        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          <a href="#features" className="text-slate-700 hover:text-brand-700">Features</a>
          <a href="#contact" className="text-slate-700 hover:text-brand-700">Contact</a>
          <a href="#contact" className="btn">Get Started</a>
        </nav>
        <a href="#contact" className="md:hidden px-3 py-2 rounded-xl bg-brand-600 text-white text-sm">Contact</a>
      </div>
    </header>
  )
}
