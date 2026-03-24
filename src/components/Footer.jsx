import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-links">
          <a
            href="https://github.com/Thiscodeboy"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaGithub className="footer-link-icon" />
            GitHub
          </a>
          <a
            href="mailto:yordanosita@gmail.com"
            className="footer-link"
          >
            <FaEnvelope className="footer-link-icon" />
            yordanosita@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/yordanos-haliso"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaLinkedin className="footer-link-icon" />
            LinkedIn
          </a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Yordanos Haliso Hanjalo. Crafted with{' '}
          <span className="heart">♥</span> and a Vibe Coder workflow.
        </p>
      </div>
    </footer>
  );
}
