import { motion } from 'framer-motion';
import {
    Database,
    Layout,
    Server,
    Terminal,
    Cpu,
    Cloud,
    Code2,
    Layers
} from 'lucide-react';

const TechStack = ({ t }) => {
    const skillCategories = [
        {
            title: t.categories.backend,
            icon: <Server className="text-accent" size={24} />,
            skills: ['C#', '.NET Core', 'ASP.NET WebAPI', 'SOLID', 'Patrones de Diseño', 'Clean Architecture']
        },
        {
            title: t.categories.frontend,
            icon: <Layout className="text-accent" size={24} />,
            skills: ['Blazor', 'React', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3', 'Framer Motion']
        },
        {
            title: t.categories.data,
            icon: <Database className="text-accent" size={24} />,
            skills: ['SQL Server', 'PostgreSQL', 'MySql', 'SQLite', 'Redis', 'Informix', 'Docker', 'Azure DevOps', 'GitHub Actions']
        },
        {
            title: t.categories.tools,
            icon: <Cpu className="text-accent" size={24} />,
            skills: ['Git / GitHub', 'IA Prompting', 'JIRA / Asana', 'Unit Testing', 'QuestPDF', 'Polly']
        }
    ];

    return (
        <section id="habilidades" className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.title}</h2>
                <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
                <p className="text-muted max-w-2xl mx-auto">
                    {t.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card p-6 h-full border border-foreground/5 hover:border-accent/30 transition-colors"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-accent/10 rounded-lg">
                                {category.icon}
                            </div>
                            <h3 className="font-bold text-lg">{category.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-foreground/5 text-xs font-medium rounded-md border border-foreground/10"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
