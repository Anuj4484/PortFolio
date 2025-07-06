const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-salesforce-navy to-salesforce-blue text-white rounded-lg shadow-xl">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Salesforce Developer & Solution Architect
          </h1>
          <p className="text-xl mb-8">
            Building scalable, innovative solutions on the Salesforce platform
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/contact"
              className="bg-white text-salesforce-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get in Touch
            </a>
            <a
              href="/projects"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-salesforce-blue transition duration-300"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Key Skills Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Salesforce Development</h3>
            <ul className="space-y-2">
              <li>• Apex Programming</li>
              <li>• Lightning Web Components</li>
              <li>• Visualforce</li>
              <li>• SOQL & SOSL</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Integration Expertise</h3>
            <ul className="space-y-2">
              <li>• REST & SOAP APIs</li>
              <li>• Middleware Integration</li>
              <li>• Third-party Services</li>
              <li>• Data Migration</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Platform Architecture</h3>
            <ul className="space-y-2">
              <li>• Solution Design</li>
              <li>• Security & Sharing</li>
              <li>• Performance Optimization</li>
              <li>• Best Practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications Preview */}
      <section className="bg-gray-100 py-12 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Salesforce Certifications</h2>
          <p className="text-gray-600">
            Validated expertise across multiple Salesforce domains
          </p>
        </div>
        <div className="flex justify-center">
          <a
            href="/certifications"
            className="bg-salesforce-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-salesforce-cloud transition duration-300"
          >
            View All Certifications
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home; 