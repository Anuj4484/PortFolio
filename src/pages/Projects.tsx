const Projects = () => {
  const projects = [
    {
      title: "Enterprise Sales Automation",
      description:
        "Developed a comprehensive sales automation solution using Salesforce Sales Cloud, custom Apex triggers, and Lightning Web Components.",
      technologies: [
        "Apex",
        "Lightning Web Components",
        "Process Builder",
        "Flow Builder",
      ],
      highlights: [
        "Automated lead assignment and scoring system",
        "Custom dashboard for sales performance metrics",
        "Integration with external ERP system",
        "Improved sales process efficiency by 40%",
      ],
      duration: "6 months",
      role: "Lead Developer",
    },
    {
      title: "Customer Service Portal",
      description:
        "Built a self-service customer portal using Experience Cloud with custom components and integration capabilities.",
      technologies: [
        "Experience Cloud",
        "Lightning Components",
        "REST API",
        "Single Sign-On",
      ],
      highlights: [
        "Custom knowledge base integration",
        "Case management system",
        "Real-time chat support integration",
        "Reduced customer service calls by 30%",
      ],
      duration: "4 months",
      role: "Technical Lead",
    },
    {
      title: "Field Service Mobile App",
      description:
        "Implemented a mobile-first field service solution for technicians using Salesforce Field Service Lightning.",
      technologies: [
        "Field Service Lightning",
        "Lightning Web Components",
        "Offline Functionality",
        "Geolocation Services",
      ],
      highlights: [
        "Offline-capable mobile app",
        "Real-time scheduling and dispatch",
        "Inventory management integration",
        "Increased field technician productivity by 25%",
      ],
      duration: "5 months",
      role: "Senior Developer",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-salesforce-navy">Projects</h1>
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-salesforce-blue mb-2">
                {project.title}
              </h2>
              
              <div className="mb-4">
                <span className="text-gray-600 mr-4">
                  <strong>Duration:</strong> {project.duration}
                </span>
                <span className="text-gray-600">
                  <strong>Role:</strong> {project.role}
                </span>
              </div>

              <p className="text-gray-700 mb-6">{project.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-salesforce-navy mb-3">
                  Key Highlights
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-salesforce-navy mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-salesforce-blue bg-opacity-10 text-salesforce-blue px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg text-center">
        <h2 className="text-2xl font-semibold text-salesforce-navy mb-4">
          Interested in Collaborating?
        </h2>
        <p className="text-gray-700 mb-6">
          I'm always open to discussing new projects and opportunities.
        </p>
        <a
          href="/contact"
          className="inline-block bg-salesforce-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-salesforce-cloud transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Projects; 