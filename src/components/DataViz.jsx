import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const metrics = [
  {
    value: 65,
    suffix: '%',
    label: 'Email Open Rate',
    sublabel: 'Mailchimp Newsletters',
    color: '#00d4ff',
  },
  {
    value: 12,
    suffix: '%',
    label: 'Click-Through Rate',
    sublabel: 'Campaign Average',
    color: '#ff2d75',
  },
  {
    value: 2300,
    suffix: '+',
    label: 'Social Followers',
    sublabel: 'Instagram & TikTok',
    color: '#8b5cf6',
  },
  {
    value: 300,
    suffix: '%',
    label: 'Membership Growth',
    sublabel: '20 → 80 Members',
    color: '#06ffd2',
  },
];

function AnimatedRing({ value, maxValue, color, inView }) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min(value / maxValue, 1);
  const offset = circumference * (1 - (inView ? percentage : 0));

  return (
    <svg viewBox="0 0 120 120">
      <circle cx="60" cy="60" r={radius} className="dataviz-ring-bg" />
      <circle
        cx="60"
        cy="60"
        r={radius}
        className="dataviz-ring-fill"
        stroke={color}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </svg>
  );
}

function AnimatedNumber({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.round(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, inView]);

  const display = target >= 1000
    ? `${(count / 1000).toFixed(count >= target ? 1 : 1)}k`
    : count;

  return (
    <span>
      {display}{suffix}
    </span>
  );
}

export default function DataViz() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">Impact by the Numbers</h2>
          <p className="section-subtitle">
            Real metrics from real campaigns — data-driven proof of impact.
          </p>
        </motion.div>

        <div className="dataviz-grid">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="dataviz-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <div className="dataviz-ring">
                <AnimatedRing
                  value={metric.value}
                  maxValue={metric.value <= 100 ? 100 : metric.value}
                  color={metric.color}
                  inView={inView}
                />
                <div className="dataviz-value">
                  <AnimatedNumber
                    target={metric.value}
                    suffix={metric.suffix}
                    inView={inView}
                  />
                </div>
              </div>
              <div className="dataviz-label">{metric.label}</div>
              <div className="dataviz-sublabel">{metric.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
