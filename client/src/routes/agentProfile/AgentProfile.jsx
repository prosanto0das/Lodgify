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
        email: "prosanto@lodgify.com",
        phone: "+1 234-567-8900"
      }
    },
    {
      id: 2,
      name: "Nayma",
      role: "Student Housing Specialist",
      image: "/nayma.jpg",
      bio: "Nayma has helped hundreds of students find their ideal living spaces near universities.",
      skills: ["Student Relations", "Location Analysis", "Budget Planning"],
      social: {
        email: "nayma@lodgify.com",
        phone: "+1 234-567-8901"
      }
    },
    {
      id: 3,
      name: "Habiba",
      role: "Mess & Lodging Coordinator",
      image: "/habiba.jpg",
      bio: "Habiba specializes in connecting students with quality mess and lodging facilities.",
      skills: ["Mess Management", "Student Welfare", "Community Building"],
      social: {
        email: "habiba@lodgify.com",
        phone: "+1 234-567-8902"
      }
    }
  ];

  // Function to handle email click with direct window.location approach
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
    return false; // Prevent default behavior
  };

  return (
    <div className="agent-profile-container">
      <Link to="/" className="back-button">
        <i className="fas fa-arrow-left"></i> Back to Home
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
                {agent.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="social-links">
                {/* Updated email link with onclick handler and rel attributes */}
                <a 
                  href={`mailto:${agent.social.email}`}
                  onClick={() => handleEmailClick(agent.social.email)} 
                  className="social-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fas fa-envelope"></i>
                  Email
                </a>
                <a 
                  href={`tel:${agent.social.phone}`} 
                  className="social-link"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-phone"></i>
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