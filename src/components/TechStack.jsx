import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiMongodb,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { HiSparkles } from 'react-icons/hi2';

const techs = [
  { icon: <FaReact />, label: 'React.js', color: '#61DAFB' },
  { icon: <SiJavascript />, label: 'JavaScript', color: '#F7DF1E' },
  { icon: <FaNodeJs />, label: 'Node.js', color: '#68A063' },
  { icon: <TbApi />, label: 'REST APIs', color: '#00d4ff' },
  { icon: <FaHtml5 />, label: 'HTML5', color: '#E34F26' },
  { icon: <FaCss3Alt />, label: 'CSS3', color: '#1572B6' },
  { icon: <FaBootstrap />, label: 'Bootstrap', color: '#7952B3' },
  { icon: <FaGitAlt />, label: 'Git/GitHub', color: '#F05032' },
  { icon: <SiMongodb />, label: 'MongoDB', color: '#47A248' },
];

export default function TechStack() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="section" id="tech" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">The Vibe Coder Tech Stack</h2>
          <p className="section-subtitle">
            Technologies I use to build full-stack web experiences accelerated with AI.
          </p>
        </motion.div>

        <div className="tech-grid">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.label}
              className="tech-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <span className="tech-icon" style={{ color: tech.color }}>
                {tech.icon}
              </span>
              <span className="tech-label">{tech.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="ai-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <HiSparkles className="ai-badge-icon" />
          AI Assisted Accelerated Development
        </motion.div>
      </div>
    </section>
  );
}
