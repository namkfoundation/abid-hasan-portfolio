"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Stars,
} from "@react-three/drei";
import { motion } from "framer-motion";

function ThreeDScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 3, 3]} intensity={3} />
      <pointLight position={[-3, -2, 2]} intensity={2} />

      <Stars
        radius={50}
        depth={30}
        count={1500}
        factor={3}
        saturation={0}
        fade
        speed={1}
      />

      <Float
        speed={2}
        rotationIntensity={2}
        floatIntensity={2}
      >
        <Sphere args={[1.35, 64, 64]}>
          <MeshDistortMaterial
            color="#7565ff"
            roughness={0.12}
            metalness={0.85}
            distort={0.38}
            speed={2}
          />
        </Sphere>
      </Float>

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1.5}
      />
    </Canvas>
  );
}

const projects = [
  {
    number: "01",
    title: "EduHarbor",
    text: "An educational organization and digital learning platform focused on students, quizzes, competitions, learning resources and innovation.",
    tag: "Education",
  },
  {
    number: "02",
    title: "EduHarbor AI",
    text: "AI-powered educational concepts and digital learning tools designed to make education more interactive and accessible.",
    tag: "AI + Education",
  },
  {
    number: "03",
    title: "Digital Quiz Platforms",
    text: "Interactive quiz, examination and competition platforms designed for students and educational events.",
    tag: "Web Development",
  },
  {
    number: "04",
    title: "Science Quiz",
    text: "Educational quiz and competition initiatives covering science, general knowledge and academic learning.",
    tag: "Competition",
  },
  {
    number: "05",
    title: "Online Exam Systems",
    text: "Web-based examination concepts featuring timers, verification, result systems and student-friendly interfaces.",
    tag: "Technology",
  },
  {
    number: "06",
    title: "Creative Digital Projects",
    text: "Creative websites, campaigns, educational resources and technology projects built for digital communities.",
    tag: "Creative Tech",
  },
];

const skills = [
  "Web Development",
  "AI & Technology",
  "Education Technology",
  "Project Management",
  "Digital Innovation",
  "Creative Design",
  "Content Creation",
  "Leadership",
];

const achievements = [
  "Educational Project Development",
  "Quiz & Competition Organization",
  "Digital Learning Initiatives",
  "Technology & Innovation Projects",
  "Student Community Activities",
  "Creative Digital Campaigns",
];

const websites = [
  {
    name: "EduHarbor",
    url: "https://eduharbor.top",
    description: "Educational organization & learning platform",
  },
  {
    name: "EduHarbor AI",
    url: "https://ai.eduharbor.top",
    description: "AI-powered educational platform",
  },
  {
    name: "EduHarbor Quiz",
    url: "https://ai.eduharbor.top/quiz/",
    description: "Online practice quiz platform",
  },
];

export default function Home() {
  return (
    <main>

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#" className="logo">
          ABID<span>.</span>
        </a>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="#social"
          className="navButton"
        >
          Connect
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">

        <div className="heroText">

          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span></span>
            OPEN TO NEW OPPORTUNITIES
          </motion.div>

          <motion.p
            className="smallTitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Abid
            <span>Hasan</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Student • Creator • Technology Enthusiast
          </motion.h2>

          <motion.p
            className="heroDescription"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            I am passionate about education, technology, AI,
            web development and creating meaningful digital
            experiences for students and communities.
          </motion.p>

          <div className="buttons">

            <a
              href="#projects"
              className="primaryButton"
            >
              Explore My Work →
            </a>

            <a
              href="#about"
              className="secondaryButton"
            >
              About Me
            </a>

          </div>

        </div>

        <div className="threeD">
          <ThreeDScene />
        </div>

      </section>

      {/* STATS */}
      <section className="stats">

        <div>
          <strong>01</strong>
          <span>Education Focus</span>
        </div>

        <div>
          <strong>06+</strong>
          <span>Digital Projects</span>
        </div>

        <div>
          <strong>∞</strong>
          <span>Ideas & Innovation</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Learning Mindset</span>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">

        <div className="sectionHeader">
          <p>01 — ABOUT ME</p>
          <h2>Who is <span>Abid Hasan?</span></h2>
        </div>

        <div className="aboutGrid">

          <div className="aboutCard">

            <div className="cardIcon">
              👨‍💻
            </div>

            <h3>My Journey</h3>

            <p>
              I am Abid Hasan, a student and technology
              enthusiast who loves learning, creating and
              experimenting with digital technology.
            </p>

            <p>
              My interests include education technology,
              artificial intelligence, web development,
              digital innovation and creative projects.
            </p>

          </div>

          <div className="aboutCard highlight">

            <div className="cardIcon">
              🚀
            </div>

            <h3>My Vision</h3>

            <p>
              My goal is to use technology to create useful,
              accessible and engaging digital experiences
              that can help students learn better.
            </p>

            <div className="quote">
              “Learn. Create. Innovate. Inspire.”
            </div>

          </div>

        </div>

      </section>

      {/* EDUCATION */}
      <section id="education" className="section">

        <div className="sectionHeader">
          <p>02 — EDUCATION</p>
          <h2>My Academic <span>Journey</span></h2>
        </div>

        <div className="timeline">

          <div className="timelineItem">

            <div className="timelineDot"></div>

            <div className="timelineContent">

              <span>2026 — 2027</span>

              <h3>HSC Science</h3>

              <p>
                Currently preparing for HSC Science with
                focus on Physics, Chemistry, Mathematics,
                ICT and other science subjects.
              </p>

            </div>

          </div>

          <div className="timelineItem">

            <div className="timelineDot"></div>

            <div className="timelineContent">

              <span>2025</span>

              <h3>SSC</h3>

              <p>
                Completed SSC and continued my academic
                journey toward higher secondary education.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">

        <div className="sectionHeader">

          <p>03 — PROJECTS</p>

          <h2>
            Things I've <span>Created</span>
          </h2>

        </div>

        <div className="projectGrid">

          {projects.map((project, index) => (

            <motion.div
              className="projectCard"
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
            >

              <div className="projectTop">

                <span className="projectNumber">
                  {project.number}
                </span>

                <span className="projectTag">
                  {project.tag}
                </span>

              </div>

              <h3>{project.title}</h3>

              <p>{project.text}</p>

              <div className="projectArrow">
                Explore →
              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ORGANIZATION */}
      <section className="section organization">

        <div className="organizationContent">

          <div>

            <p className="sectionTag">
              MY MAIN INITIATIVE
            </p>

            <h2>
              Building the future
              <span> of education.</span>
            </h2>

            <p>
              EduHarbor is one of my major educational
              initiatives, focused on creating learning
              opportunities, digital resources, quizzes,
              competitions and technology-driven educational
              experiences.
            </p>

            <a
              href="https://eduharbor.top"
              target="_blank"
              className="primaryButton"
            >
              Visit EduHarbor →
            </a>

          </div>

          <div className="organizationLogo">
            <div className="orbit"></div>
            <strong>Edu</strong>
            <span>Harbor</span>
          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section">

        <div className="sectionHeader">

          <p>04 — SKILLS</p>

          <h2>
            What I <span>Do</span>
          </h2>

        </div>

        <div className="skillsGrid">

          {skills.map((skill, index) => (

            <motion.div
              className="skillCard"
              key={skill}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.06,
              }}
              whileHover={{
                scale: 1.04,
              }}
            >

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{skill}</h3>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="section">

        <div className="sectionHeader">

          <p>05 — ACHIEVEMENTS & ACTIVITIES</p>

          <h2>
            My <span>Highlights</span>
          </h2>

        </div>

        <div className="achievementGrid">

          {achievements.map((item, index) => (

            <motion.div
              className="achievementCard"
              key={item}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <div className="achievementIcon">
                ✓
              </div>

              <p>{item}</p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* WEBSITES */}
      <section className="section">

        <div className="sectionHeader">

          <p>06 — WEB PROJECTS</p>

          <h2>
            Explore My <span>Websites</span>
          </h2>

        </div>

        <div className="websiteGrid">

          {websites.map((site) => (

            <a
              href={site.url}
              target="_blank"
              className="websiteCard"
              key={site.name}
            >

              <div className="websiteIcon">
                ↗
              </div>

              <h3>{site.name}</h3>

              <p>{site.description}</p>

              <span>
                {site.url.replace("https://", "")}
              </span>

            </a>

          ))}

        </div>

      </section>

      {/* SOCIAL */}
      <section id="social" className="section socialSection">

        <div className="sectionHeader">

          <p>07 — SOCIAL MEDIA</p>

          <h2>
            Let's <span>Connect</span>
          </h2>

        </div>

        <div className="socialUsername">
          @abidhasanlive
        </div>

        <p className="socialDescription">
          Follow my journey, projects, ideas and updates.
        </p>

        <div className="socialGrid">

          <a
            href="https://www.facebook.com/abidhasanlive"
            target="_blank"
          >
            <strong>Facebook</strong>
            <span>@abidhasanlive</span>
          </a>

          <a
            href="https://www.instagram.com/abidhasanlive"
            target="_blank"
          >
            <strong>Instagram</strong>
            <span>@abidhasanlive</span>
          </a>

          <a
            href="https://www.youtube.com/@abidhasanlive"
            target="_blank"
          >
            <strong>YouTube</strong>
            <span>@abidhasanlive</span>
          </a>

          <a
            href="https://www.tiktok.com/@abidhasanlive"
            target="_blank"
          >
            <strong>TikTok</strong>
            <span>@abidhasanlive</span>
          </a>

          <a
            href="https://github.com/abidhasanlive"
            target="_blank"
          >
            <strong>GitHub</strong>
            <span>@abidhasanlive</span>
          </a>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">

        <p className="sectionTag">
          08 — CONTACT
        </p>

        <h2>
          Have an idea?
          <span> Let's build it.</span>
        </h2>

        <p>
          I'm always interested in learning, creating
          and exploring new ideas.
        </p>

        <div className="contactButtons">

          <a
            href="https://www.facebook.com/abidhasanlive"
            target="_blank"
            className="primaryButton"
          >
            Message Me →
          </a>

          <a
            href="https://github.com/abidhasanlive"
            target="_blank"
            className="secondaryButton"
          >
            GitHub →
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footerLogo">
          ABID HASAN
        </div>

        <p>
          Student • Creator • Technology Enthusiast
        </p>

        <p className="copyright">
          © {new Date().getFullYear()} Abid Hasan.
          All Rights Reserved.
        </p>

      </footer>

    </main>
  );
}
