import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const ProjectGrid = ({ t }) => {
    const getLinkIcon = (url, size = 14) => {
        if (url && url.includes('github.com')) {
            return <Github size={size} />;
        }
        return <ExternalLink size={size} />;
    };

    const [activeCategory, setActiveCategory] = useState('all');
    const projectStaticData = [
        {
            tags: ['.NET 10', 'Blazor', 'Clean Architecture', 'SQLite', 'C#'],
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
            category: 'net'
        },
        {
            tags: ['React Native', 'Firebase', 'Maps API', 'TypeScript'],
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop',
            category: 'react'
        },
        {
            tags: ['Python', 'Docker', 'Ollama', 'Groq / Gemini'],
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
            category: 'agents'
        },
        {
            tags: ['React', 'JavaScript', 'Tailwind', 'Frontend'],
            image: `${import.meta.env.BASE_URL}carpentry.png`,
            category: 'react'
        },
        {
            tags: ['.NET 9', 'Blazor 10', 'Redis', 'Docker', 'JWT', 'SOLID'],
            image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800&auto=format&fit=crop',
            category: 'net'
        },
        {
            tags: ['React', 'IA-Powered', 'Tailwind', 'Framer Motion', 'Vite'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
            category: 'react'
        },
        {
            tags: ['C#', 'WPF', '.NET 10', 'SQLite'],
            image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop',
            category: 'net'
        },
        {
            tags: ['.NET 10', 'Llama 3', 'Groq API', 'RAG'],
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
            category: 'agents'
        },
        {
            tags: ['.NET 10', 'LLMs', 'Prompt Engineering', 'Mermaid'],
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
            category: 'agents'
        }
    ];

    const projects = t.items.map((item, index) => ({
        ...item,
        ...projectStaticData[index]
    }));

    const visibleProjects = activeCategory === 'all' 
        ? projects 
        : projects.filter(p => p.category === activeCategory);

    const categories = [
        { id: 'all', label: t.categories?.all || 'Todos' },
        { id: 'net', label: t.categories?.net || '.NET' },
        { id: 'react', label: t.categories?.react || 'React / Mobile' },
        { id: 'agents', label: t.categories?.agents || 'Agentes / IA' }
    ];

    return (
        <section id="proyectos" className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.title}</h2>
                <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
            </div>

            <div className="flex flex-wrap justify-center gap-4 py-4">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-6 py-2 rounded-full transition-all border text-sm font-medium ${
                            activeCategory === cat.id 
                                ? 'bg-accent text-background border-accent' 
                                : 'bg-transparent text-accent border-accent/30 hover:border-accent hover:bg-accent/10'
                        }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={project.title || index}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.4 }}
                            className="glass-card group flex flex-col h-full"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-accent/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4">
                                    {project.links ? (
                                        project.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex flex-col items-center gap-1 p-3 bg-card text-accent rounded-xl hover:scale-110 transition-transform shadow-md font-semibold text-xs min-w-[75px]"
                                            >
                                                {getLinkIcon(link.url, 20)}
                                                <span>{link.label}</span>
                                            </a>
                                        ))
                                    ) : (
                                        <a
                                            href={project.href || "https://github.com/lucasludu"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-col items-center gap-1 p-3 bg-card text-accent rounded-xl hover:scale-110 transition-transform shadow-md font-semibold text-xs min-w-[75px]"
                                        >
                                            {getLinkIcon(project.href || "https://github.com/lucasludu", 20)}
                                            <span>{t.code || "Code"}</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 space-y-4 flex-1 flex flex-col">
                                <h3 className="text-lg md:text-xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-muted text-sm leading-relaxed flex-1 text-left">{project.description}</p>

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded border border-accent/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4 pt-4 border-t border-foreground/10 text-xs text-muted">
                                    {project.links ? (
                                        project.links.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 hover:text-accent transition-colors"
                                            >
                                                {getLinkIcon(link.url, 14)} {link.label}
                                            </a>
                                        ))
                                    ) : (
                                        <a href={project.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent transition-colors">
                                            {getLinkIcon(project.href || "https://github.com/lucasludu", 14)} {t.code}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

        </section>
    );
};

export default ProjectGrid;
