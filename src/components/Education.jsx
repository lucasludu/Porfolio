import { motion } from 'framer-motion';

const Education = ({ t }) => {
    return (
        <section id="educación" className="space-y-12 overflow-hidden px-4 md:px-0">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.title}</h2>
                <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {t.items.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 flex flex-col justify-between hover:border-accent/30 transition-colors"
                    >
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2">{edu.degree}</h3>
                            <p className="text-muted mb-6">{edu.institution}</p>
                        </div>
                        <p className="text-accent font-semibold text-sm tracking-wider uppercase">{edu.period}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
