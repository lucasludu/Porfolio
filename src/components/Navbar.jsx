import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { useState } from 'react';

const Navbar = ({ isDark, toggleTheme, lang, toggleLang, t }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: t.home, href: '#inicio' },
        { name: t.stack, href: '#habilidades' },
        { name: t.experience, href: '#experiencia' },
        { name: t.projects, href: '#proyectos' },
        { name: t.education, href: '#educación' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10">
            <div className="container mx-auto px-6 h-20 flex justify-between items-center">
                <motion.a
                    href="#inicio"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold tracking-tighter flex items-center gap-3"
                >
                    <img src={`${import.meta.env.BASE_URL}favicon.png`} alt="LL Logo" className="w-8 h-8 rounded-lg shadow-[0_0_10px_rgba(124,58,237,0.3)] border border-accent/20" />
                    <div>Lucas<span className="text-accent">Ludueña</span></div>
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((item) => (
                        <motion.a
                            key={item.href}
                            href={item.href}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`text-sm font-medium transition-colors ${isDark ? 'text-white/80 hover:text-accent' : 'text-slate-600 hover:text-accent'}`}
                        >
                            {item.name}
                        </motion.a>
                    ))}

                    <div className="flex items-center gap-2 border-l border-foreground/10 pl-6 ml-2">
                        <button
                            onClick={toggleLang}
                            className="flex items-center gap-1.5 px-3 py-1.5 glass-card text-xs font-bold hover:bg-white/10 transition-colors uppercase"
                        >
                            <Languages size={14} />
                            {lang}
                        </button>
                        <button
                            onClick={toggleTheme}
                            className="p-2 glass-card hover:bg-white/10 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                    <button
                        onClick={toggleLang}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors uppercase ${isDark ? 'text-white hover:bg-white/10' : 'text-oxford-gray hover:bg-black/5'}`}
                    >
                        {lang}
                    </button>
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-colors ${isDark ? 'text-white hover:bg-white/10' : 'text-oxford-gray hover:bg-black/5'}`}
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-2 rounded-lg transition-colors ${isDark ? 'text-white hover:bg-white/10' : 'text-oxford-gray hover:bg-black/5'}`}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-foreground/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-medium transition-colors ${isDark ? 'text-white hover:text-accent' : 'text-oxford-gray hover:text-accent'}`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
