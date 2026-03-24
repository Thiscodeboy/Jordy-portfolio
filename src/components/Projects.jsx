import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    tag: 'Marketing Operations',
    title: 'Archery Student Organization',
    desc: 'Led end-to-end marketing operations, growing membership and building a thriving social media presence through targeted digital campaigns.',
    gradient: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
    kpis: [
      { value: '65%', label: 'Email Open Rate' },
      { value: '12%', label: 'Click-Through Rate' },
      { value: '2,300+', label: 'Social Followers' },
      { value: '20→80', label: 'Member Growth' },
    ],
  },
  {
    tag: 'Full-Stack Development',
    title: 'Full-Stack Vibe Coder Projects',
    desc: 'Built complete web applications across front-end and back-end using React.js, Node.js, and REST APIs — combining core coding with AI-assisted workflows.',
    gradient: 'linear-gradient(135deg, #0a0a0a, #1a1a2e, #16213e)',
    kpis: [
      { value: 'React', label: 'Frontend' },
      { value: 'Node.js', label: 'Backend' },
      { value: 'REST', label: 'API Design' },
      { value: 'AI', label: 'Accelerated' },
    ],
  },
  {
    tag: 'Digital Marketing',
    title: 'Multi-Channel Campaign Strategy',
    desc: 'Executed integrated digital marketing campaigns across email, social media, and content channels. Tracked KPIs via analytics dashboards to optimize performance.',
    gradient: 'linear-gradient(135deg, #1a0a2e, #2d1b69, #11001c)',
    kpis: [
      { value: 'SEO', label: 'Optimization' },
      { value: 'HubSpot', label: 'CRM' },
      { value: 'Mailchimp', label: 'Email' },
      { value: 'Analytics', label: 'Data-Driven' },
    ],
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Project Spotlight</h2>
          <p className="section-subtitle">
            Hover over each project to discover the KPIs and impact behind the work.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              style={{ border: 'none' }}
            >
              <div
                className="project-card-bg"
                style={{ background: project.gradient }}
              />
              <div className="project-card-overlay" />
              <div className="project-card-content">
                <span className="project-tag">{project.tag}</span>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.desc}</p>
                <div className="project-kpis">
                  {project.kpis.map((kpi) => (
                    <div key={kpi.label} className="kpi-item">
                      <span className="kpi-value">{kpi.value}</span>
                      <span className="kpi-label">{kpi.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
