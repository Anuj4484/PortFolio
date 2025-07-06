const Footer = () => {
  return (
    <footer className="bg-salesforce-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:your.email@example.com" className="hover:text-salesforce-blue">
                  your.email@example.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-salesforce-blue">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-salesforce-blue"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-salesforce-blue"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://trailblazer.me/id/your-id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-salesforce-blue"
                >
                  Trailblazer Profile
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/certifications" className="hover:text-salesforce-blue">
                  Certifications
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-salesforce-blue">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-salesforce-blue">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 