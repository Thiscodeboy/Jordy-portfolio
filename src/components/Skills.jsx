import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const categories = [
  {
    icon: '🎨',
    title: 'Creative & Media',
    skills: [
      'Photoshop', 'Premiere Pro', 'After Effects',
      'InDesign', 'Audition', 'Final Cut Pro',
    ],
  },
  {
    icon: '📈',
    title: 'Digital Marketing',
    skills: [
      'SEO', 'HubSpot', 'Mailchimp',
      'Social Media Marketing', 'Email Marketing',
      'Content Strategy',
    ],
  },
  {
    icon: '💻',
    title: 'Development',
    skills: [
      'React.js', 'JavaScript (ES6+)', 'HTML5 / CSS3',
      'Node.js', 'REST APIs', 'Bootstrap',
      'Git / GitHub', 'MongoDB', 'SQL Basics',
    ],
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    skills: [
      'Google Analytics', 'Data Visualization',
      'KPI Tracking', 'A/B Testing',
      'Campaign Analytics',
    ],
  },
  {
    icon: '🌐',
    title: 'Web Platforms',
    skills: [
      'WordPress', 'Webflow', 'Responsive Design',
      'SEO Optimization', 'Cross-browser Compatibility',
    ],
  },
  {
    icon: '🤝',
    title: 'Soft Skills',
    skills: [
      'Project Management', 'Cross-cultural Communication',
      'Leadership', 'Agile / Scrum',
      'Wireframing', 'WCAG Awareness',
    ],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Skills Matrix</h2>
          <p className="section-subtitle">
            A comprehensive toolkit spanning development, design, marketing, and leadership.
          </p>
        </motion.div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="skill-category-icon">{cat.icon}</span>
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
