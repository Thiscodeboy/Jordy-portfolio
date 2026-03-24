import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 8,
  size: 2 + Math.random() * 4,
  color: Math.random() > 0.5 ? '#00d4ff' : '#ff2d75',
}));

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Floating particles */}
      <div className="hero-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              background: p.color,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            }}
          />
        ))}
      </div>

      <div className="container hero-layout">
        {/* Avatar — Left side */}
        <motion.div
          className="hero-avatar-col"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-glow" />
            <div className="hero-avatar-pulse" />
            <img
              src={profileImg}
              alt="Yordanos Haliso Hanjalo"
              className="hero-avatar"
            />
          </div>
        </motion.div>

        {/* Text — Right side */}
        <motion.div
          className="hero-text-col"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="hero-badge-dot" />
            Available for Opportunities
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="gradient-text">Yordanos</span>.
            I build digital ecosystems at the intersection of{' '}
            <span className="gradient-text">Business & Code</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Multidisciplinary Full-Stack Vibe Coder & Digital Strategist
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
