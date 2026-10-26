import { useState, useEffect, useLayoutEffect } from 'react';
import { flushSync } from 'react-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import ProjectGrid from './components/ProjectGrid';
import Education from './components/Education';
import { translations } from './translations';

function App() {
    // Se leen al inicializar para evitar un parpadeo del tema/idioma por defecto
    const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') !== 'light');
    const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'es');

    useEffect(() => {
        const handleMouseMove = (e) => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // useLayoutEffect para que la clase cambie dentro del flushSync de la view transition
    useLayoutEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const toggleTheme = () => {
        const newTheme = !isDark;
        
        if (!document.startViewTransition) {
            setIsDark(newTheme);
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
            return;
        }

        document.startViewTransition(() => {
            flushSync(() => {
                setIsDark(newTheme);
            });
        });
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    const toggleLang = () => {
        const newLang = lang === 'es' ? 'en' : 'es';
        setLang(newLang);
        localStorage.setItem('lang', newLang);
    };

    const t = translations[lang];

    return (
        <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 bg-background text-foreground selection:bg-accent/30 relative`}>
            {/* Ambient Spotlight Effect */}
            <div 
                className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
                style={{
                    background: isDark
                        ? 'radial-gradient(800px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), hsla(var(--accent) / 0.15), transparent 80%)'
                        : 'radial-gradient(800px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), hsla(var(--accent) / 0.08), transparent 80%)'
                }}
            />

            <div className="relative z-10">
                <Navbar isDark={isDark} toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} t={t.nav} />
                <main className="container mx-auto px-6 pt-24 pb-12 space-y-32">
                    <Hero t={t.hero} />
                    <TechStack t={t.techStack} />
                    <Timeline t={t.experience} />
                    <ProjectGrid t={t.projects} />
                    <Education t={t.education} />
                </main>
                <footer className="border-t border-foreground/10 py-12 mt-20">
                    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className={`${isDark ? 'text-muted' : 'text-oxford-gray/70'} text-sm`}>{t.footer.rights}</p>
                        <div className="flex gap-4">
                            <a href="https://github.com/lucasludu" target="_blank" rel="noopener noreferrer" className="p-2 glass-card hover:text-accent transition-colors"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/lucasludu" target="_blank" rel="noopener noreferrer" className="p-2 glass-card hover:text-accent transition-colors"><Linkedin size={20} /></a>
                            <a href="mailto:lucas.ludu.mdp@hotmail.com" className="p-2 glass-card hover:text-accent transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
