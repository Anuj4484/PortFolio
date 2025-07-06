const Skills = () => {
  const skillCategories = [
    {
      title: "Salesforce Development",
      skills: [
        { name: "Apex Programming", level: 90 },
        { name: "Lightning Web Components", level: 85 },
        { name: "Visualforce", level: 80 },
        { name: "SOQL & SOSL", level: 90 },
        { name: "Triggers & Automation", level: 85 },
      ],
    },
    {
      title: "Integration & APIs",
      skills: [
        { name: "REST API Development", level: 85 },
        { name: "SOAP API Integration", level: 80 },
        { name: "Middleware Solutions", level: 75 },
        { name: "External Services", level: 80 },
        { name: "Authentication & Security", level: 85 },
      ],
    },
    {
      title: "Platform Architecture",
      skills: [
        { name: "Solution Design", level: 85 },
        { name: "Data Modeling", level: 90 },
        { name: "Security & Sharing", level: 85 },
        { name: "Performance Optimization", level: 80 },
        { name: "Governance & Best Practices", level: 85 },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-salesforce-navy">Technical Skills</h1>

      {/* Skills Grid */}
      <div className="space-y-12">
        {skillCategories.map((category, index) => (
          <section key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-salesforce-blue">
              {category.title}
            </h2>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-salesforce-blue h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Additional Skills */}
      <section className="mt-12 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-salesforce-blue">
          Additional Technologies & Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Git & Version Control",
            "Agile Methodologies",
            "CI/CD Pipelines",
            "JavaScript/HTML/CSS",
            "Data Loader",
            "Workbench",
            "VS Code",
            "JIRA",
            "Postman",
          ].map((tool, index) => (
            <div
              key={index}
              className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 text-center"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* Methodologies */}
      <section className="mt-12 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-salesforce-blue">
          Development Methodologies
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Agile Development & Scrum</li>
          <li>Test-Driven Development (TDD)</li>
          <li>Continuous Integration/Continuous Deployment</li>
          <li>Code Review & Pair Programming</li>
          <li>DevOps Practices</li>
        </ul>
      </section>
    </div>
  );
};

export default Skills; 