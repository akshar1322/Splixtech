"use client";
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Navigationbar from '@/components/Navigationbar/Navigationbar';
import Footer from '@/components/Footer/footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consent: false,
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setStatus('Message sent successfully');
        setFormData({ name: '', phone: '', email: '', consent: false });
      } else {
        setStatus(result.message || 'Failed to send message');
      }
    } catch (error) {
      setStatus('An unexpected error occurred');
    }
  };

  return (
    <main>
            <Navigationbar />
        <br />
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(../Images/BG/Contact-US.jpg)', backgroundAttachment: 'fixed' }}
        />
        <div className="relative z-5 flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="w-full max-w-5xl p-8 bg-white bg-opacity-0 rounded-lg">
            <h2 className="text-center text-2xl font-semibold mb-4">
              Get in Touch with SpliXtech
              <br />
              We&apos;re here to help with your web, software, mobile, and AI/ML needs. Reach out to us for innovative solutions and outstanding support. <span className="italic">Thank You</span> 👍
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-900"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-900"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-900"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-sm text-white">
                  I&apos;d like to receive notifications and offers from SpliXtech and consent to the privacy policy.
                </span>
              </div>
              <div className="flex justify-center">
                <Button label="Send" />
              </div>
              {status && <p className="text-center text-lg mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
