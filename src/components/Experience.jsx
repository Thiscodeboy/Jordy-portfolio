import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timeline = [
  {
    date: '2024 – Present',
    title: "Bachelor's in Digital Economics & Business",
    org: 'Università Politecnica delle Marche, Ancona',
    items: [
      'Coursework: Digital Transformation, Business Management, Data Analytics',
      'Student Representative',
    ],
  },
  {
    date: 'Academic Year 2024',
    title: 'Marketing Operations Lead',
    org: 'Archery Student Organization — Università Politecnica delle Marche',
    items: [
      'Grew organization membership from 20 → 80 through targeted campaigns',
      'Built social media presence to 2,300+ followers across Instagram and TikTok',
      'Ran weekly email newsletters achieving 65% open rate and 12% CTR',
      'Coordinated content creators, designers, and event organizers',
    ],
  },
  {
    date: '2023',
    title: 'Leadership Training (3 Months)',
    org: 'African Leadership Academy — Remote / International',
    items: [
      'Intensive program focused on leadership, entrepreneurship, and cross-cultural collaboration',
    ],
  },
  {
    date: '2018 – 2021',
    title: 'High School Diploma',
    org: 'Wolaita Liqa School, Ethiopia',
    items: [
      'Top 10 of class',
      'Debate Award',
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My journey through academia, leadership, and digital innovation.
          </p>
        </motion.div>

        <div className="timeline">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-date">{item.date}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <div className="timeline-org">{item.org}</div>
              <ul className="timeline-desc">
                {item.items.map((li, j) => (
                  <li key={j}>{li}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
