import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Timeline = ({ t }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const experiences = t.items.map((item, index) => {
        const originalTags = [
            ['.NET Core', 'Blazor', 'WebHooks', 'QuestPDF', 'Polly', 'MAUI', 'Azure DevOps'],
            ['SQL Server', 'ASP.NET Framework', 'Agile'],
            ['.NET Core 6', '.NET Framework', 'SQL Server', 'Informix', 'JIRA', 'Asana']
        ];

        return {
            ...item,
            tags: originalTags[index] || []
        };
    });

    const initialCount = 3; // Mostrar todos por defecto ahora que ocupan menos espacio
    const visibleExperiences = isExpanded ? experiences : experiences.slice(0, initialCount);

    const toggleExperience = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="experiencia" className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">{t.title}</h2>
                <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 md:px-0">
                {/* Vertical Line */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-foreground/10 -translate-x-1/2" />

                <div className="space-y-8">
                    <AnimatePresence mode="popLayout">
                        {visibleExperiences.map((exp, index) => {
                            const isOpen = activeIndex === index;
                            return (
                                <motion.div
                                    layout
                                    key={exp.company || index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-[4px] md:left-1/2 top-6 w-4 h-4 bg-accent border-[3px] border-background rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(124,58,237,0.5)]" />

                                    <div className="flex-1 w-full md:w-1/2 pl-12 md:pl-0">
                                        <motion.div 
                                            layout
                                            onClick={() => toggleExperience(index)}
                                            className={`glass-card p-6 cursor-pointer transition-all duration-300 hover:border-accent/40 ${isOpen ? 'border-accent/60 shadow-lg shadow-accent/5' : ''}`}
                                        >
                                            <div className="flex justify-between items-start gap-4">
                                                <div>
                                                    <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold rounded mb-2 uppercase tracking-widest">
                                                        {exp.period}
                                                    </span>
                                                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{exp.title}</h3>
                                                    <p className="text-muted text-xs">{exp.company}</p>
                                                </div>
                                                <motion.div
                                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                                    className="p-1.5 bg-foreground/5 rounded-full text-muted"
                                                >
                                                    <ChevronDown size={16} />
                                                </motion.div>
                                            </div>

                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pt-6 mt-4 border-t border-foreground/5 space-y-4">
                                                            <p className="text-muted text-sm leading-relaxed text-left">
                                                                {exp.description}
                                                            </p>
                                                            <div className="flex flex-wrap gap-2 pt-2">
                                                                {exp.tags.map(tag => (
                                                                    <span key={tag} className="px-2 py-1 bg-accent/5 text-accent text-[10px] font-medium rounded border border-accent/10">
                                                                        {tag}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    </div>
                                    <div className="hidden md:block flex-1" />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
