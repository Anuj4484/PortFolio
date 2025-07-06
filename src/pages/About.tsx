const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-salesforce-navy">About Me</h1>
      
      {/* Professional Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-salesforce-blue">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A dedicated Salesforce Developer with [X] years of experience in designing, developing, and implementing 
          custom solutions on the Salesforce platform. Specialized in creating scalable applications using Apex, 
          Lightning Web Components, and integrating with external systems.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Passionate about delivering high-quality solutions that drive business value and enhance user experience. 
          Committed to staying current with the latest Salesforce features and best practices.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-salesforce-blue">Professional Experience</h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-salesforce-navy">Senior Salesforce Developer</h3>
            <p className="text-gray-600 mb-2">Company Name | 20XX - Present</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Led the development of complex Salesforce solutions for enterprise clients</li>
              <li>Implemented automated testing frameworks achieving 85% code coverage</li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>Integrated Salesforce with multiple external systems using REST APIs</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-salesforce-navy">Salesforce Developer</h3>
            <p className="text-gray-600 mb-2">Previous Company | 20XX - 20XX</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Developed custom Salesforce solutions using Apex and Lightning Components</li>
              <li>Created and maintained Visualforce pages and controllers</li>
              <li>Implemented data migration strategies and tools</li>
              <li>Collaborated with stakeholders to gather and refine requirements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Certifications Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-salesforce-blue">Education</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-salesforce-navy">Bachelor of Science in Computer Science</h3>
          <p className="text-gray-600">University Name | Graduated 20XX</p>
        </div>
      </section>

      {/* Personal Interests */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-salesforce-blue">Personal Interests</h2>
        <p className="text-gray-700 leading-relaxed">
          Outside of development, I enjoy contributing to the Salesforce community through blog posts and 
          local user group meetings. I'm also passionate about mentoring aspiring Salesforce developers 
          and staying active in the Trailblazer Community.
        </p>
      </section>
    </div>
  );
};

export default About; 