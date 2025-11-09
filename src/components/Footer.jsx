import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white animate-fadeIn">
      <div className="container-narrow py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} Aman Varshney — Front-End Developer
        </p>
        <div className="flex items-center gap-4">
          <a className="hover:text-brand-700" href="#features">Features</a>
          <a className="hover:text-brand-700" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

