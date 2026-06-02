import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import ProjectGrid from './components/ProjectGrid';
import Education from './components/Education';
import { translations } from './translations';

function App() {
    const [isDark, setIsDark] = useState(true);
    const [lang, setLang] = useState('es');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') setIsDark(false);
        const savedLang = localStorage.getItem('lang');
        if (savedLang) setLang(savedLang);

        const handleMouseMove = (e) => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        
        const loaderTimer = setTimeout(() => setIsLoading(false), 1200);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(loaderTimer);
        };
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    const toggleLang = () => {
        const newLang = lang === 'es' ? 'en' : 'es';
        setLang(newLang);
        localStorage.setItem('lang', newLang);
    };

    const t = translations[lang];

    return (
        <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 bg-background text-foreground selection:bg-accent/30 relative ${isDark ? 'dark' : ''}`}>
            {/* Initial Loader */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div 
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
                    >
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                            className="w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

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
