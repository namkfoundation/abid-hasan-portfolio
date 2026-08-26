"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

function ThreeDObject() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 3, 3]} intensity={3} />

      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[1.35, 64, 64]}>
          <MeshDistortMaterial
            color="#6d5dfc"
            roughness={0.15}
            metalness={0.8}
            distort={0.35}
            speed={2}
          />
        </Sphere>
      </Float>

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={2}
      />
    </Canvas>
  );
}

const projects = [
  {
    title: "EduHarbor",
    description:
      "An educational platform focused on learning, quizzes, competitions and digital resources.",
  },
  {
    title: "AI Education Projects",
    description:
      "Educational AI concepts and digital tools designed to make learning easier and smarter.",
  },
  {
    title: "Quiz & Competition Platforms",
    description:
      "Interactive online quiz, examination and competition experiences for students.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="logo">ABID HASAN</div>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#social">Social</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            WELCOME TO MY WORLD
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span>Abid Hasan</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Student • Creator • Technology Enthusiast
          </motion.h2>

          <motion.p
            className="heroDescription"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            I love creating educational projects, digital experiences and
            technology-driven solutions.
          </motion.p>

          <div className="buttons">
            <a href="#projects" className="primaryButton">
              Explore My Work
            </a>

            <a href="#contact" className="secondaryButton">
              Contact Me
            </a>
          </div>
        </div>

        <div className="threeD">
          <ThreeDObject />
        </div>
      </section>

      <section id="about" className="section">
        <p className="sectionTag">ABOUT ME</p>
        <h2>Who is Abid Hasan?</h2>

        <p className="sectionText">
          I am Abid Hasan, a student and technology enthusiast interested in
          education, web development, AI and digital innovation. I enjoy
          building projects that can provide useful experiences for students
          and communities.
        </p>
      </section>

      <section id="projects" className="section">
        <p className="sectionTag">MY WORK</p>
        <h2>Featured Projects</h2>

        <div className="projectGrid">
          {projects.map((project, index) => (
            <motion.div
              className="projectCard"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="projectNumber">
                0{index + 1}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>View Project →</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <p className="sectionTag">MY SKILLS</p>
        <h2>Things I Love Working With</h2>

        <div className="skills">
          {[
            "Web Development",
            "AI & Technology",
            "Education Technology",
            "Creative Design",
            "Digital Projects",
            "Project Management",
          ].map((skill) => (
            <div className="skill" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="social" className="section socialSection">
        <p className="sectionTag">CONNECT WITH ME</p>
        <h2>Follow My Journey</h2>

        <p className="sectionText">
          My personal social media username is:
        </p>

        <div className="username">@abidhasanlive</div>

        <div className="socialGrid">
          <a href="https://www.facebook.com/abidhasanlive" target="_blank">
            Facebook
          </a>

          <a href="https://www.instagram.com/abidhasanlive" target="_blank">
            Instagram
          </a>

          <a href="https://www.youtube.com/@abidhasanlive" target="_blank">
            YouTube
          </a>

          <a href="https://www.tiktok.com/@abidhasanlive" target="_blank">
            TikTok
          </a>

          <a href="https://github.com/abidhasanlive" target="_blank">
            GitHub
          </a>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="sectionTag">GET IN TOUCH</p>
        <h2>Let's Create Something Amazing.</h2>

        <a href="mailto:abidhasanmomit@gmail.com" className="primaryButton">
          Contact Me
        </a>
      </section>

      <footer>
        © {new Date().getFullYear()} Abid Hasan. All Rights Reserved.
      </footer>
    </main>
  );
}
