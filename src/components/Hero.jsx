import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = ({ t }) => {
    return (
        <section id="inicio" className="py-20 flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6">
                    Lucas David Ludueña <br />
                    <span className="text-accent">{t.title}</span>
                </h1>
                <p className="text-lg md:text-xl text-muted max-w-3xl mb-10 leading-relaxed text-left">
                    {/* "\n" = salto de línea, **texto** = resaltado */}
                    {t.description.split('\n').map((line, i) => (
                        <span key={i}>
                            {i > 0 && <br />}
                            {line.split('**').map((part, j) =>
                                j % 2 === 1
                                    ? <span key={j} className="dark:text-white text-slate-900 font-semibold">{part}</span>
                                    : part
                            )}
                        </span>
                    ))}
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    <a
                        href={`${import.meta.env.BASE_URL}${t.cvFile}`}
                        download={t.cvFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-white rounded-lg transition-all font-semibold group"
                    >
                        <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                        {t.downloadCv}
                    </a>
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/lucasludu" target="_blank" rel="noopener noreferrer" className="p-3 glass-card hover:bg-white/10 transition-colors"><Linkedin size={24} /></a>
                        <a href="https://github.com/lucasludu" target="_blank" rel="noopener noreferrer" className="p-3 glass-card hover:bg-white/10 transition-colors"><Github size={24} /></a>
                        <a href="mailto:lucas.ludu.mdp@hotmail.com" className="p-3 glass-card hover:bg-white/10 transition-colors"><Mail size={24} /></a>
                    </div>
                </div>
            </motion.div>
        </section >
    );
};

export default Hero;
