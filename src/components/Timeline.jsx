import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Timeline = ({ t }) => {
    const [isExpanded, setIsExpanded] = useState(false);

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

    const initialCount = 2;
    const isExpandable = experiences.length > initialCount;
    const visibleExperiences = isExpanded ? experiences : experiences.slice(0, initialCount);

    return (
        <section id="experiencia" className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">{t.title}</h2>
                <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 md:px-0 overflow-hidden">
                {/* Vertical Line */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-foreground/10 -translate-x-1/2" />

                <div className="space-y-12">
                    <AnimatePresence mode="popLayout">
                        {visibleExperiences.map((exp, index) => (
                            <motion.div
                                layout
                                key={exp.company || index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Dot */}
                                <div className="absolute left-[4px] md:left-1/2 top-1.5 w-4 h-4 bg-accent border-[3px] border-background rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(124,58,237,0.5)]" />

                                <div className="flex-1 w-full md:w-1/2 pl-10 md:pl-0">
                                    <div className="glass-card p-6 md:p-8 hover:border-accent/50 transition-colors group">
                                        <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-md mb-4 uppercase tracking-wider">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors">{exp.title}</h3>
                                        <p className="text-muted text-sm mb-4">{exp.company}</p>
                                        <p className="text-muted mb-6 leading-relaxed">{exp.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-xs font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {isExpandable && (
                <motion.div
                    layout
                    className="flex justify-center relative z-20"
                >
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="group flex items-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent/20 text-accent font-medium rounded-full transition-all border border-accent/20 hover:border-accent/40"
                    >
                        {isExpanded ? (
                            <>
                                {t.showLess}
                                <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                            </>
                        ) : (
                            <>
                                {t.showMore}
                                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                            </>
                        )}
                    </button>
                </motion.div>
            )}
        </section>
    );
};

export default Timeline;
