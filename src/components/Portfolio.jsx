import { Download, ExternalLink, Github, Linkedin, Mail, Menu, X, Gamepad2, Book, Music } from 'lucide-react';
import { useState, useEffect } from 'react';


function TypingEffect() {
  const [text, setText] = useState('');
  const fullText = 'Hanif';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);
  
  return <span>{text}</span>;
}

function ScrollReveal({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef) {
      observer.observe(elementRef);
    }

    return () => {
      if (elementRef) observer.unobserve(elementRef);
    };
  }, [elementRef, delay]);

  return (
    <div
      ref={setElementRef}
      className={`transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <style>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(168, 85, 247, 0.3); }
          50% { text-shadow: 0 0 20px rgba(168, 85, 247, 0.8), 0 0 30px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.4); }
        }
        .glow-text {
          animation: glow 2.5s ease-in-out infinite;
        }
        .click-shadow {
          transition: box-shadow 0.3s ease;
        }
        .click-shadow:active {
          box-shadow: 0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.4), inset 0 0 20px rgba(168, 85, 247, 0.2);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .float-icon {
          animation: float 3s ease-in-out infinite;
          opacity: 0.1;
        }
        .float-icon-1 { animation-delay: 0s; }
        .float-icon-2 { animation-delay: 1s; }
        .float-icon-3 { animation-delay: 2s; }
      `}</style>

      {/* Background Icons */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 text-purple-600 float-icon float-icon-1">
          <Gamepad2 size={200} />
        </div>
        <div className="absolute top-40 right-40 text-purple-600 float-icon float-icon-2">
          <Book size={180} />
        </div>
        <div className="absolute bottom-32 left-1/3 text-purple-600 float-icon float-icon-3">
          <Music size={150} />
        </div>
        <div className="absolute bottom-20 right-20 text-purple-500 float-icon float-icon-1">
          <Gamepad2 size={120} />
        </div>
        <div className="absolute top-1/2 right-10 text-purple-600 float-icon float-icon-2">
          <Music size={160} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-gray-400">My</span>
            <span className="text-purple-400 glow-text"> Portfolio</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-purple-400 transition">Home</a>
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
            <button className="px-4 py-2 border border-purple-500 text-purple-400 rounded hover:bg-purple-500/10 transition">
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 p-4 space-y-4">
            <a href="#home" className="block hover:text-purple-400">Home</a>
            <a href="#about" className="block hover:text-purple-400">About</a>
            <a href="#projects" className="block hover:text-purple-400">Projects</a>
            <a href="#contact" className="block hover:text-purple-400">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <p className="text-gray-400 mb-2">Hello Friends 👋</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-2">
              I am <span className="text-purple-400 glow-text"><TypingEffect /></span>
            </h1>
            <p className="text-gray-400 text-lg mb-6">UI/UX Design & Designer</p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Saya adalah seorang desainer dan developer yang passionate tentang menciptakan pengalaman digital yang menarik. Dengan perpaduan antara desain yang indah dan fungsionalitas yang solid, saya membantu brand Anda stand out di dunia digital.
            </p>

            <div className="flex gap-4 mb-8">
              <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center gap-2 transition transform hover:scale-105">
                <Download size={18} />
                Download CV
              </button>
              <button className="px-6 py-3 border border-gray-600 hover:border-purple-500 hover:text-purple-400 rounded-lg transition">
                Learn More
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <p className="text-gray-400 text-sm">Find Me On:</p>
              <div className="flex gap-4">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mnhanifno1@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110">
                  <Mail size={20} />
                </a>
                <a href="https://github.com/hasnnsss" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-naufal-hanif-790bbb348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden md:block">
            <div className="w-80 h-80 bg-gradient-to-br from-purple-600 to-purple-900 rounded-2xl flex items-center justify-center overflow-hidden">
              <img 
                src="/profile.png" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What I Offer</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "UI/UX Design", desc: "Membuat sebuah Desain yang indah dan user-friendly" },
              { title: "Designer", desc: "Membuat desain foto maupun video yang menarik" },
              { title: "Brand Identity", desc: "Membangun identitas visual yang kuat dan bermakna" }
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div 
                  className="p-8 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-purple-500/50 transition group hover:shadow-lg hover:shadow-purple-500/50 click-shadow"
                >
                  <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600/40 transition">
                    <div className="text-2xl">✨</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16">Recent Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "E-Commerce Platform", tag: "Web Design", link: "https://github.com/your-github-username/project1" },
              { title: "Mobile App Design", tag: "Mobile Design", link: "https://github.com/your-github-username/project2" },
              { title: "Brand Identity", tag: "Branding", link: "https://github.com/your-github-username/project3" },
              { title: "Dashboard System", tag: "UI/UX", link: "https://github.com/your-github-username/project4" }
            ].map((project, i) => (
              <a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-8 border border-slate-700 hover:border-purple-500/50 transition cursor-pointer hover:shadow-lg hover:shadow-purple-500/50 click-shadow block"
              >
                <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/10 transition"></div>
                <div className="relative">
                  <span className="text-sm text-purple-400 font-medium">{project.tag}</span>
                  <h3 className="text-2xl font-bold mt-4 mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-6">Proyek profesional yang menampilkan keahlian saya dalam desain dan development.</p>
                  <div className="flex items-center text-purple-400 group-hover:translate-x-2 transition">
                    View Project
                    <ExternalLink size={18} className="ml-2" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-purple-900/20 to-slate-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-400 mb-12">
            Punya ide? Mari kita ciptakan sesuatu yang amazing bersama-sama.
          </p>
          
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-lg font-semibold transition transform hover:scale-105">
            Get In Touch
            
          </button>

          {/* Footer */}
          <div className="mt-20 pt-12 border-t border-slate-800">
            <div className="flex justify-center gap-6 mb-6">
              <a href="https://github.com/hasnnsss" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                <Linkedin size={24} />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=your-email@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-500 text-sm">© 2024 Your Portfolio. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}