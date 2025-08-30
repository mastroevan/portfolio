import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import profileImage from "../assets/profile.webp";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={profileImage}
            alt="Evan Mastro"
            className="w-full max-w-md h-auto rounded-lg shadow-2xl border-4 border-gray-300"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            I’m a <strong>Full Stack Software Engineer</strong> with 4+ years of
            experience designing and delivering scalable, user-focused web
            applications. I work with modern technologies like{" "}
            <strong>React, Python, PostgreSQL, and cloud-native platforms</strong>, and I thrive on collaborating with teams to build impactful features and streamline workflows.
          </p>

          <ul className="list-disc list-inside space-y-4 mb-6 text-lg leading-relaxed">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Some career highlights:</h3>
            <li>
              <strong>High-Scale Microservices</strong> — Built a Q&A system
              capable of handling 2,200 requests per second across 55M+ records.
            </li>
            <li>
              <strong>Team Leadership</strong> — Guided engineers to deliver a
              mission-critical web app that automated reporting on 30,000+ project
              tasks, cutting manual analysis time by 70%.
            </li>
            <li>
              <strong>SharePoint & Power Platform Expertise</strong> — Designed
              automation to export SharePoint lists into Excel for streamlined
              reporting, built custom Power Apps (including an internal
              reimbursement workflow), and modernized legacy systems by restoring
              a critical Microsoft Access database.
            </li>
          </ul>

          <p className="text-lg leading-relaxed">
            I’m a graduate of the{" "}
            <strong>Galvanize (Hack Reactor) Software Engineering Immersive</strong>,
            and I’m passionate about using technology to solve real-world problems
            and help teams work smarter.
          </p>
          <br />
          <br />
          <div className="flex justify-center gap-8 mt-8">
            <a
              href="https://github.com/mastroevan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-2xl text-gray-700 hover:text-black transition-transform hover:scale-110"
            >
              <FiGithub size={108} />
            </a>

            <a
              href="https://www.linkedin.com/in/mastroevan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-2xl text-blue-700 hover:text-blue-500 transition-transform hover:scale-110"
            >
              <FiLinkedin size={108} />
            </a>

            <a
              href="https://www.instagram.com/mastroevan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-2xl text-pink-500 hover:text-pink-600 transition-transform hover:scale-110"
            >
              <FiInstagram size={108} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;