import React, { useState } from 'react'

const API_URL = 'https://vernanbackend.ezlab.in/api/contact-us/'

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [serverMessage, setServerMessage] = useState('')

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!validateEmail(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)
    setServerMessage('')
    if (!validate()) return
    try {
      setLoading(true)
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setServerMessage('Form Submitted')
        setForm({ name: '', email: '', phone: '', message: '' })
      } else {
        const data = await res.json().catch(() => ({}))
        setStatus('error')
        setServerMessage(data?.message || 'Submission failed')
      }
    } catch {
      setStatus('error')
      setServerMessage('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 max-w-2xl" noValidate>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="John Doe"
            className="input"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <p id="name-error" className="text-sm text-red-600 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="john@example.com"
            className="input"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <p id="email-error" className="text-sm text-red-600 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone</label>
        <input
          id="phone"
          name="phone"
          value={form.phone}
          onChange={onChange}
          placeholder="9876543210"
          className="input"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && <p id="phone-error" className="text-sm text-red-600 mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={onChange}
          rows={5}
          placeholder="Write your message here..."
          className="input"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && <p id="message-error" className="text-sm text-red-600 mt-1">{errors.message}</p>}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="btn"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {status === 'success' && <span className="text-green-700 font-medium">{serverMessage}</span>}
        {status === 'error' && <span className="text-red-700 font-medium">{serverMessage}</span>}
      </div>
    </form>
  )
}
