import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import DataViz from './components/DataViz';
import Skills from './components/Skills';

import VibeCoder from './components/VibeCoder';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Ambient background effects */}
      <div className="bg-gradient-animated" />
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <DataViz />
        <TechStack />

        <VibeCoder />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
