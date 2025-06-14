import { Link } from "react-router-dom";
import "./AgentProfile.scss";

function AgentProfile() {
  const agents = [
    {
      id: 1,
      name: "Prosanto",
      role: "Senior Property Manager",
      image: "/prosanto.jpg",
      bio: "With over 5 years of experience in student housing, Prosanto specializes in finding the perfect accommodation for students.",
      skills: ["Student Housing", "Property Management", "Negotiation"],
      social: {
        email: "prosanto0das23@gmail.com",
        phone: "+8801701140907",
      },
    },
    {
      id: 2,
      name: "Nayma",
      role: "Student Housing Specialist",
      image: "/nayma.jpg",
      bio: "Nayma has helped hundreds of students find their ideal living spaces near universities.",
      skills: ["Student Relations", "Location Analysis", "Budget Planning"],
      social: {
        email: "nayma.cse16@gmail.com",
        phone: "+8801715954503",
      },
    },
    {
      id: 3,
      name: "Habiba",
      role: "Mess & Lodging Coordinator",
      image: "/habiba.jpg",
      bio: "Habiba specializes in connecting students with quality mess and lodging facilities.",
      skills: ["Mess Management", "Student Welfare", "Community Building"],
      social: {
        email: "priyajahn2001@gmail.com",
        phone: "+8801715954503",
      },
    },
  ];

  
  const openGmailCompose = (email) => {
    const subject = encodeURIComponent("Student accommodation enquiry");
    const body = encodeURIComponent(
      "Hi,\n\nI would like to know more about your services.\n\nThanks,"
    );
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailURL, "_blank");
  };

  return (
    <div className="agent-profile-container">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>

      <Link to="/" className="back-button">
        <i className="fas fa-arrow-left" />
        Back to Home
      </Link>

      <div className="agents-grid">
        {agents.map((agent) => (
          <div key={agent.id} className="agent-card">
            <div className="agent-image">
              <img src={agent.image} alt={agent.name} />
            </div>

            <div className="agent-info">
              <h2>{agent.name}</h2>
              <h3>{agent.role}</h3>
              <p className="bio">{agent.bio}</p>

              <div className="skills">
                {agent.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="social-links">
                {/* Gmail-compose button */}
                <button
                  type="button"
                  className="social-link"
                  onClick={() => openGmailCompose(agent.social.email)}
                >
                  <i className="fas fa-envelope" />
                  Email
                </button>

                {/* Normal tel: link */}
                <a
                  href={`tel:${agent.social.phone}`}
                  className="social-link"
                >
                  <i className="fas fa-phone" />
                  Call
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgentProfile;