import { FaBriefcase, FaMapMarkerAlt, FaCertificate } from "react-icons/fa";
import uminberLogo from "../assets/uminber-logo.jpeg";
import dropxoutlogo from "../assets/dropxout-logo.jpeg";
import govtitilogo from "../assets/govtiti-logo.png";
import microsoftLogo from "../assets/microsoft-logo.jpeg";
import linkedinLogo from "../assets/linkedin-logo.jpeg";

const experiences = [
  {
    company: "Uminber Group",
    role: "AI Developer",
    duration: "Feb 2025 – Present",
    location: "Remote, Hardoi, Uttar Pradesh",
    logo: uminberLogo,
    description: [
      "Designed, trained, and fine-tuned generative AI models.",
      "Engineered optimized prompts to enhance AI response quality.",
      "Integrated AI functionalities into web applications using React.js.",
      "Developed AI-powered automation tools to streamline workflows.",
      "Researched AI advancements and proposed innovative solutions."
    ],
  },
  {
    company: "Drop X Out",
    role: "Frontend Developer",
    duration: "July 2024 – Oct 2024",
    location: "Remote, India",
    logo: dropxoutlogo,
    description: [
      "Developed interactive SPAs using React.js, improving engagement by 25%.",
      "Optimized site performance, reducing page load times by 20%.",
      "Collaborated on UI/UX design, boosting user acquisition by 15%.",
      "Integrated APIs for seamless data flow and dynamic content.",
    ],
  },
  {
    company: "Government Industrial Training Institute",
    role: "Student",
    duration: "July 2021 – Aug 2023",
    location: "On-site, Hardoi, Uttar Pradesh",
    logo: govtitilogo,
    description: [
      "Completed a 2-year training in industrial fitting and ship repair.",
      "Led hands-on mechanical projects with 90% accuracy.",
      "Developed a top-3 ranked capstone project for precision engineering.",
    ],
  }
];

const certifications = [
  {
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft & LinkedIn",
    issueDate: "Issued Sep 2023",
    description: [
      "This certification covers the fundamentals of Generative AI, its applications, and impact.",
      "It provides insights into AI ethics and responsible AI development practices.",
      "Learners gain hands-on experience with AI tools and automation workflows."
    ],
    skills: "Generative AI | Artificial Intelligence (AI) | Generative AI Tools",
    logo: microsoftLogo,
  },
  {
    title: "What Is Generative AI?",
    issuer: "LinkedIn",
    issueDate: "Issued Sep 2023",
    description: [
      "This course explores Generative AI concepts, including deep learning and neural networks.",
      "It explains the role of AI in modern applications and business automation.",
      "Participants learn about AI ethics, potential risks, and responsible AI implementation."
    ],
    skills: "Generative AI | Computer Ethics | Artificial Intelligence (AI)",
    logo: linkedinLogo,
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 px-6 md:px-16 text-green-500">
      {/* Experience Section */}
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-10">
        Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative p-6 rounded-xl border border-green-500 transition-all hover:scale-105 hover:shadow-2xl hover:border-green-400">
            <div className="flex items-center gap-4 mb-4">
              <img src={exp.logo} alt={`${exp.company} logo`} className="w-16 h-16 rounded-full object-cover p-1" />
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">{exp.role}</h3>
                <p className="text-green-400 text-sm md:text-base lg:text-lg">{exp.company}</p>
                <div className="flex items-center text-xs md:text-sm lg:text-base text-green-400 mt-1">
                  <FaBriefcase className="mr-2" /> {exp.duration}
                </div>
                <div className="flex items-center text-xs md:text-sm lg:text-base text-green-400 mt-1">
                  <FaMapMarkerAlt className="mr-2" /> {exp.location}
                </div>
              </div>
            </div>
            <ul className="list-none space-y-2 text-green-400 text-sm md:text-base lg:text-lg">
              {exp.description.map((point, i) => (
                <li key={i} className="relative before:content-['•'] before:text-white before:absolute before:-left-4">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mt-16 mb-10">
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div key={index} className="p-6 rounded-xl border border-green-500 transition-all hover:scale-105 hover:shadow-2xl hover:border-green-400 flex items-center gap-4">
            <img src={cert.logo} alt={`${cert.issuer} logo`} className="w-16 h-16 rounded-full p-2" />
            <div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">{cert.title}</h3>
              <p className="text-green-400 text-sm md:text-base lg:text-lg">{cert.issuer}</p>
              <p className="text-green-400 text-xs md:text-sm lg:text-base">{cert.issueDate}</p>
              <p className="text-green-400 text-sm md:text-base lg:text-xl font-medium mt-2">{cert.skills}</p>
              <p className="text-green-400 text-sm md:text-base lg:text-lg mt-2">{cert.description[0]}</p>
              <p className="text-green-400 text-sm md:text-base lg:text-lg">{cert.description[1]}</p>
              <p className="text-green-400 text-sm md:text-base lg:text-lg">{cert.description[2]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
