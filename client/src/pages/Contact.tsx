import { useState } from 'react'
import { httpsCallable } from 'firebase/functions'
import { functions } from '../firebase'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const submitInquiry = httpsCallable(functions, 'submitInquiry');
      await submitInquiry(formData);
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="contact-container success-message">
        <h2>Thank You!</h2>
        <p>Your inquiry has been received. We will get back to you shortly.</p>
        <button className="submit-button" onClick={() => setSubmitted(false)}>Send another message</button>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact & Inquiry</h1>
        <p>Partner with us, invest, or inquire about our properties.</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="type">Inquiry Type</label>
          <select id="type" name="type" value={formData.type} onChange={handleChange}>
            <option value="general">General Inquiry</option>
            <option value="partnership">Partnership Development</option>
            <option value="investor">Investor Relations</option>
            <option value="tenant">Prospective Tenant</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Sending...' : 'Send Inquiry'}
        </button>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  )
}

export default Contact
