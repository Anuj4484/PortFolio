const Certifications = () => {
  const certifications = [
    {
      title: "Salesforce Certified Platform Developer II",
      issueDate: "20XX",
      description:
        "Advanced certification demonstrating expertise in complex programmatic solutions on the Salesforce platform.",
      skills: [
        "Advanced Apex Development",
        "Integration Architecture",
        "Testing & Debugging",
        "Performance Optimization",
      ],
      badgeUrl: "https://trailhead.salesforce.com/assets/badges/platform-developer-ii.png",
    },
    {
      title: "Salesforce Certified Platform Developer I",
      issueDate: "20XX",
      description:
        "Core development certification validating fundamental programmatic capabilities on the Force.com platform.",
      skills: [
        "Apex & Visualforce",
        "Lightning Components",
        "Data Modeling",
        "Security & Access",
      ],
      badgeUrl: "https://trailhead.salesforce.com/assets/badges/platform-developer-i.png",
    },
    {
      title: "Salesforce Certified Administrator",
      issueDate: "20XX",
      description:
        "Certification demonstrating proficiency in managing and configuring Salesforce applications.",
      skills: [
        "User Management",
        "Security Controls",
        "Data Management",
        "Analytics & Reporting",
      ],
      badgeUrl: "https://trailhead.salesforce.com/assets/badges/administrator.png",
    },
  ];

  const trailheadAchievements = {
    badges: 100,
    points: 50000,
    trails: 25,
    rank: "Ranger",
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-salesforce-navy">
        Certifications & Achievements
      </h1>

      {/* Certifications Grid */}
      <div className="space-y-8 mb-12">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={cert.badgeUrl}
                    alt={cert.title}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-semibold text-salesforce-blue mb-2">
                    {cert.title}
                  </h2>
                  <p className="text-gray-600 mb-2">Issued: {cert.issueDate}</p>
                  <p className="text-gray-700 mb-4">{cert.description}</p>
                  
                  <h3 className="text-lg font-semibold text-salesforce-navy mb-2">
                    Key Skills Validated
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-salesforce-blue bg-opacity-10 text-salesforce-blue px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trailhead Achievements */}
      <section className="bg-white rounded-lg shadow-lg p-6 mb-12">
        <h2 className="text-2xl font-semibold text-salesforce-blue mb-6">
          Trailhead Achievements
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-salesforce-navy mb-2">
              {trailheadAchievements.badges}
            </div>
            <div className="text-gray-600">Badges Earned</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-salesforce-navy mb-2">
              {trailheadAchievements.points.toLocaleString()}
            </div>
            <div className="text-gray-600">Points Accumulated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-salesforce-navy mb-2">
              {trailheadAchievements.trails}
            </div>
            <div className="text-gray-600">Trails Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-salesforce-navy mb-2">
              {trailheadAchievements.rank}
            </div>
            <div className="text-gray-600">Current Rank</div>
          </div>
        </div>
      </section>

      {/* Verification Note */}
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <p className="text-gray-700 mb-4">
          All certifications can be verified through the official Salesforce
          Certification Verification system.
        </p>
        <a
          href="https://trailblazer.me/id"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-salesforce-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-salesforce-cloud transition duration-300"
        >
          View Trailblazer Profile
        </a>
      </div>
    </div>
  );
};

export default Certifications; 