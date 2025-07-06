import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-salesforce-navy">Get in Touch</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-salesforce-blue mb-6">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salesforce-blue focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salesforce-blue focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-2"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salesforce-blue focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="job">Job Opportunity</option>
                <option value="project">Project Collaboration</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-salesforce-blue focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-salesforce-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-salesforce-cloud transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-salesforce-blue mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-salesforce-navy mb-2">
                  Email
                </h3>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-700 hover:text-salesforce-blue"
                >
                  your.email@example.com
                </a>
              </div>
              <div>
                <h3 className="text-lg font-medium text-salesforce-navy mb-2">
                  Phone
                </h3>
                <a
                  href="tel:+1234567890"
                  className="text-gray-700 hover:text-salesforce-blue"
                >
                  (123) 456-7890
                </a>
              </div>
              <div>
                <h3 className="text-lg font-medium text-salesforce-navy mb-2">
                  Location
                </h3>
                <p className="text-gray-700">City, State, Country</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-salesforce-blue mb-6">
              Professional Profiles
            </h2>
            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-salesforce-blue"
              >
                LinkedIn Profile
              </a>
              <a
                href="https://trailblazer.me/id/your-id"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-salesforce-blue"
              >
                Trailblazer Profile
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-salesforce-blue"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 