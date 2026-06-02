import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Database,
    Layout,
    Server,
    Terminal,
    Cpu,
    Cloud,
    Code2,
    Layers,
    ShieldCheck,
    FlaskConical,
    FileText,
    Globe,
    Clock,
    FileBarChart,
    Palette,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const TechStack = ({ t }) => {
    const carouselRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const skillCategories = [
        {
            title: t.categories.backend,
            icon: <Server className="text-accent" size={24} strokeWidth={1.5} />,
            skills: [
                { name: '.NET Core/10', featured: true },
                { name: 'Clean Architecture', featured: true },
                { name: 'SOLID', featured: true },
                { name: 'CQRS & MediatR', featured: true },
                { name: 'Python', featured: false },
                { name: 'Web API', featured: true }
            ]
        },
        {
            title: t.categories.frontend,
            icon: <Layout className="text-accent" size={24} strokeWidth={1.5} />,
            skills: [
                { name: 'Blazor WASM', featured: true },
                { name: 'React', featured: false },
                { name: 'React Native', featured: false },
                { name: 'JavaScript', featured: false },
                { name: 'Tailwind CSS', featured: false }
            ]
        },
        {
            title: t.categories.authentication,
            icon: <ShieldCheck className="text-accent" size={24} strokeWidth={1.5} />,
            skills: [
                { name: 'JWT', featured: true },
                { name: 'IdentityServer', featured: true },
                { name: 'Duende', featured: true },
                { name: 'OAuth', featured: true }
            ]
        },
        {
            title: t.categories.orm,
            icon: <Layers className="text-accent" size={24} strokeWidth={1.5} />,
            skills: [
                { name: 'EF Core', featured: true },
                { name: 'Dapper', featured: true }
            ]
        },
        {
            title: t.categories.testing,
            icon: <FlaskConical className="text-accent" size={24} strokeWidth={1.5} />,
            skills: [
                { name: 'xUnit', featured: true },
                { name: 'NUnit', featured: true },
                { name: 'Moq', featured: true }
            ]
        },
        {
            title: t.categories.logging,
            icon: <FileText className="text-accent" size={24} strokeWidth={1.5} />,
            skills: [
                { name: 'Serilog', featured: true },
                { name: 'log4net', featured: true }
            ]
        },
        {
            title: t.categories.platforms,
            icon: <Globe className="text-accent" size={24} strokeWidth={1.5} />,
            skills: [
                { name: 'ASP.NET Core', featured: true },
                { name: 'Blazor', featured: true },
                { name: 'MAUI', featured: true },
                { name: 'gRPC', featured: true }
            ]
        },
        {
            title: t.categories.background,
            icon: <Clock className="text-accent" size={24} strokeWidth={1.5} />,
            skills: [
                { name: 'Hangfire', featured: true },
                { name: 'Quartz.NET', featured: true },
                { name: 'RabbitMQ', featured: true }
            ]
        },
        {
            title: t.categories.reporting,
            icon: <FileBarChart className="text-accent" size={24} strokeWidth={1.5} />,
            skills: [
                { name: 'QuestPDF', featured: true },
                { name: 'iText7', featured: true }
            ]
        },
        {
            title: t.categories.frontend_ui,
            icon: <Palette className="text-accent" size={24} strokeWidth={1.5} />,
            skills: [
                { name: 'MudBlazor', featured: true }
            ]
        },
        {
            title: t.categories.data,
            icon: <Database className="text-accent" size={24} strokeWidth={1.5} />,
            skills: [
                { name: 'SQL Server (T-SQL)', featured: true },
                { name: 'SQLite', featured: true },
                { name: 'PostgreSQL', featured: false },
                { name: 'Redis', featured: false }
            ]
        },
        {
            title: t.categories.tools,
            icon: <Cpu className="text-accent" size={24} strokeWidth={1.5} />,
            skills: [
                { name: 'Ollama / IA', featured: true },
                { name: 'Gemini / Groq', featured: true },
                { name: 'Polly', featured: true },
                { name: 'Docker', featured: false },
                { name: '.NET Aspire', featured: false },
                { name: 'Git', featured: true }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 10 },
        visible: { opacity: 1, scale: 1, y: 0 }
    };

    return (
        <section id="habilidades" className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.title}</h2>
                <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
                <p className="text-muted max-w-2xl mx-auto">
                    {t.subtitle}
                </p>
            </div>

            <div className="relative group/carousel max-w-[100vw] overflow-hidden px-4 md:px-12">
                {/* Fade Gradients for edge indicating scroll */}
                <div className={`absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`} />
                <div className={`absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`} />

                {/* Left Navigation Button */}
                <button
                    onClick={() => scroll('left')}
                    className={`absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center p-3 rounded-full bg-black/60 border border-white/10 text-white backdrop-blur-md hover:bg-accent hover:text-black hover:border-accent hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] ${canScrollLeft ? 'opacity-0 md:group-hover/carousel:opacity-100 translate-x-4 md:group-hover/carousel:translate-x-0' : 'opacity-0 pointer-events-none'}`}
                    aria-label="Scroll Left"
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Right Navigation Button */}
                <button
                    onClick={() => scroll('right')}
                    className={`absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center p-3 rounded-full bg-black/60 border border-white/10 text-white backdrop-blur-md hover:bg-accent hover:text-black hover:border-accent hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] ${canScrollRight ? 'opacity-0 md:group-hover/carousel:opacity-100 -translate-x-4 md:group-hover/carousel:translate-x-0' : 'opacity-0 pointer-events-none'}`}
                    aria-label="Scroll Right"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Carousel Track */}
                <div
                    ref={carouselRef}
                    onScroll={checkScroll}
                    className="flex overflow-x-auto py-8 gap-6 scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="glass-card relative group p-6 min-w-[280px] md:min-w-[320px] flex-shrink-0 snap-center border border-white/5 bg-[#0a0a0a]/50 hover:bg-[#0a0a0a]/80 transition-all rounded-2xl"
                        >
                            {/* Subtle glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                            <div className="relative z-10 flex items-center gap-3 mb-6">
                                <div className="p-2 bg-accent/5 border border-accent/10 rounded-lg">
                                    {category.icon}
                                </div>
                                <h3 className="font-bold text-lg text-foreground/90">{category.title}</h3>
                            </div>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="relative z-10 flex flex-col gap-3"
                            >
                                {category.skills.map((skill) => (
                                    <motion.button
                                        key={skill.name}
                                        variants={itemVariants}
                                        whileHover={{ y: -2, scale: 1.02 }}
                                        whileTap={{ y: -2, scale: 1.02 }}
                                        className={`w-full px-4 py-2 text-sm rounded-xl border transition-all duration-300 flex items-center justify-center ${
                                            skill.featured
                                                ? 'bg-accent/10 border-accent/30 text-accent font-semibold shadow-sm hover:shadow-md hover:shadow-accent/40 hover:bg-accent/20 hover:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent'
                                                : 'bg-foreground/5 border-foreground/10 font-medium text-muted hover:text-accent hover:border-accent/40 hover:shadow-sm hover:shadow-accent/30 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent'
                                        }`}
                                    >
                                        {skill.name}
                                    </motion.button>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
