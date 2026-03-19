import { useState } from 'react'
import Header from '../components/Header'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const isFormValid =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.message.trim() !== ''

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!isFormValid) return

    // Replace this later with EmailJS / Formspree / backend if needed
    window.location.href = `mailto:zackelbaz@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`
  }

  return (
    <div className="page-shell">
      <Header />

      <main className="contact-page">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="name">NAME</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name..."
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email">EMAIL ADDRESS</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email Address..."
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              rows={8}
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
            disabled={!isFormValid}
          >
            SEND
          </button>
        </form>

        <div className="contact-icons">
          {/* Gmail */}
          <a
            href="mailto:zackelbaz@gmail.com"
            aria-label="Gmail"
          >
            <img src="/contacticons/gmail-icon.svg" alt="Gmail" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/zack-el-baz/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/contacticons/linkedin-icon.svg" alt="LinkedIn" />
          </a>

          {/* Linktree */}
          <a
            href="https://linktr.ee/zackelbaz"
            target="_blank"
            rel="noreferrer"
            aria-label="Linktree"
          >
            <img src="/contacticons/linktree-icon.svg" alt="Linktree" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <img src="/contacticons/instagram-icon.svg" alt="Instagram" />
          </a>

          {/* Behance */}
          <a
            href="https://www.behance.net/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            aria-label="Behance"
          >
            <img src="/contacticons/behance-icon.svg" alt="Behance" />
          </a>
        </div>
      </main>
    </div>
  )
}