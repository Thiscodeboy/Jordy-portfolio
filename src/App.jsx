import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import DataViz from './components/DataViz';
import Skills from './components/Skills';


import Footer from './components/Footer';

export default function App() {
  return (
    <>


      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Skills />
        <Projects />
        <DataViz />
        <TechStack />

      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
