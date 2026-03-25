import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiSparkles } from 'react-icons/hi2';
import { SiOpenai } from 'react-icons/si';
import { FaRobot, FaCode, FaBolt } from 'react-icons/fa6';

const tools = [
  { icon: <SiOpenai />, label: 'ChatGPT' },
  { icon: <FaRobot />, label: 'Claude AI' },
  { icon: <FaCode />, label: 'Cursor IDE' },
  { icon: <FaBolt />, label: 'AI Workflows' },
];

export default function VibeCoder() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="vibe-coder-card"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="vibe-coder-header">
            <HiSparkles className="vibe-coder-icon" style={{ color: '#8b5cf6' }} />
            <h2 className="vibe-coder-title">The Vibe Coder Edge</h2>
          </div>

          <p className="vibe-coder-text">
            I combine traditional software engineering with AI-powered tools to ship
            projects faster and smarter. By leveraging <strong style={{ color: '#8b5cf6' }}>Claude</strong>,{' '}
            <strong style={{ color: '#00d4ff' }}>ChatGPT</strong>, and{' '}
            <strong style={{ color: '#ff2d75' }}>Cursor IDE</strong>, I accelerate every phase
            of development from rapid prototyping and debugging to full-stack deployment.
            This isn't replacing skill; it's <em>amplifying</em> it.
          </p>

          <p className="vibe-coder-text" style={{ marginBottom: '28px' }}>
            The result? Higher quality code, faster iteration cycles, and the ability to
            take projects from concept to production as a solo developer at startup speed.
          </p>

          <div className="vibe-tools">
            {tools.map((tool) => (
              <motion.div
                key={tool.label}
                className="vibe-tool"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="vibe-tool-icon">{tool.icon}</span>
                {tool.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
