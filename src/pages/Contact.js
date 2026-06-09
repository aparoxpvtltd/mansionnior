import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '2',
    notes: '',
    submitted: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData((prev) => ({ ...prev, submitted: true }));
  };

  return (
    <div className="page-content contact-page">
      <section className="section-intro contact-intro">
        <div className="section-heading">
          <p className="section-label">Contact</p>
          <h2>Reserve your table or ask a question.</h2>
        </div>
        <p className="section-copy">
          Reach out for private bookings, curated tasting menus, or to reserve a quiet afternoon seat.
        </p>
      </section>

      <div className="contact-grid">
        <div className="contact-details card">
          <h3>Visit us</h3>
          <p>128 Muse Avenue, Downtown</p>
          <p>Open daily from 8am to 8pm</p>
          <p>hello@maisonmuse.cafe</p>
        </div>

        <form className="contact-form card" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Date & time
            <input name="date" type="datetime-local" value={formData.date} onChange={handleChange} required />
          </label>
          <label>
            Guests
            <select name="guests" value={formData.guests} onChange={handleChange}>
              <option value="2">2 guests</option>
              <option value="4">4 guests</option>
              <option value="6">6 guests</option>
            </select>
          </label>
          <label>
            Notes
            <textarea name="notes" value={formData.notes} onChange={handleChange} rows="4" />
          </label>

          <button className="primary-btn" type="submit">
            {formData.submitted ? 'Request Sent' : 'Send Reservation Request'}
          </button>
          {formData.submitted && <p className="form-success">Thanks! We’ll follow up shortly.</p>}
        </form>
      </div>
    </div>
  );
}
