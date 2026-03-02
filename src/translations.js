export const translations = {
    es: {
        nav: {
            home: 'Inicio',
            stack: 'Stack',
            experience: 'Experiencia',
            projects: 'Proyectos',
            education: 'Educación'
        },
        hero: {
            title: 'Desarrollador .NET',
            description: 'Técnico Universitario en Programación (UTN MDP) especializado en .NET Core. Diseño soluciones escalables y robustas bajo patrones de Onion Architecture, optimizando flujos de trabajo mediante Docker, SQL Server y herramientas avanzadas de IA.',
            downloadCv: 'Descargar CV',
            cvFile: 'Lucas_Luduena_CV_ESP.pdf'
        },
        techStack: {
            title: 'Stack Tecnológico',
            subtitle: 'Especializado en el ecosistema Microsoft con un enfoque en arquitecturas modernas y herramientas de última generación.',
            categories: {
                backend: 'Backend & Architecture',
                frontend: 'Frontend',
                data: 'Data & DevOps',
                tools: 'Tools & AI'
            }
        },
        experience: {
            title: 'Experiencia Laboral',
            showMore: 'Ver más experiencia',
            showLess: 'Ver menos',
            items: [
                {
                    title: 'Desarrollador Full-Stack',
                    company: 'RIPSA',
                    period: 'nov. 2024 - actualidad',
                    description: 'Especializado en backend .NET Core (6, 8 y 9) y frontend con Blazor. Lideré la migración de aplicaciones legacy (VB y .NET Framework), implementé integraciones WebHooks, generación dinámica de PDFs con QuestPDF y sistemas de pago con Polly.'
                },
                {
                    title: 'Desarrollador de .NET',
                    company: 'EDSA',
                    period: 'nov. 2023 - sept. 2024',
                    description: 'Mantenimiento y gestión avanzada de bases de datos SQL Server (Store Procedures, Triggers, Índices). Desarrollo de aplicaciones web en ASP.NET Framework enfocadas en la experiencia de usuario y escalabilidad.'
                },
                {
                    title: 'Desarrollador de .NET',
                    company: 'Supermercados Toledo',
                    period: 'oct. 2022 - nov. 2023',
                    description: 'Desarrollo de APIs y aplicaciones de escritorio utilizando .NET Core 6 y .NET Framework (4.2 a 4.7.2). Administración de bases de datos SQL Server e Informix. Implementación de integraciones entre sistemas internos y externos.'
                }
            ]
        },
        projects: {
            title: 'Proyectos Personales',
            code: 'Código',
            showMore: 'Ver más proyectos',
            showLess: 'Ver menos',
            items: [
                {
                    title: 'Sistema de Gestión de Cocheras',
                    description: 'Arquitectura escalable para la gestión de estacionamientos en tiempo real. Implementa WebAPI con .NET Core 9, Frontend en Blazor .NET 10 y sistemas de caché distribuida.',
                    links: [
                        { label: 'API', url: 'https://github.com/lucasludu/API_Parcking' },
                        { label: 'Front', url: 'https://github.com/lucasludu/ParkingClient' }
                    ]
                },
                {
                    title: 'Portfolio Pro & Aspero',
                    description: 'Landing page de alto impacto diseñada con un enfoque moderno. Desarrollada mediante flujos de trabajo avanzados de IA para maximizar la eficiencia, performance y estética.',
                    links: [{ label: 'Front', url: 'https://github.com/lucasludu/Portfolio' }]
                },
                {
                    title: 'Libreta Digital',
                    description: 'Aplicación de escritorio en C# con WPF y .NET 10 para la gestión académica, utilizando SQLite. Permite administrar alumnos, cursos, materias y calificaciones de manera eficiente.',
                    links: [{ label: 'WPF', url: 'https://github.com/lucasludu/EscuelaGestion' }]
                },
                {
                    title: 'API de notificaciones',
                    description: 'API en .NET Core 8 con SQL Server. Sistema de WebHooks para recepción y reenvío de notificaciones a clientes con validación de IP, trazabilidad y retry automático.',
                    links: [{ label: 'API', url: 'https://github.com/lucasludu/Api-Notify' }]
                }
            ]
        },
        education: {
            title: 'Educación Académica',
            items: [
                {
                    degree: 'Curso de Perfeccionamiento de Inglés',
                    institution: 'NED College – Limerick, Irlanda (25 Semanas)',
                    period: 'Desde el 11 de Mayo, 2026'
                },
                {
                    degree: 'Técnico Universitario en Programación',
                    institution: 'Universidad Tecnológica Nacional (UTN) - Sede Mar del Plata',
                    period: '2020 - 2023'
                }
            ]
        },
        footer: {
            rights: '© 2026 Lucas David Ludueña - Todos los derechos reservados'
        }
    },
    en: {
        nav: {
            home: 'Home',
            stack: 'Stack',
            experience: 'Experience',
            projects: 'Projects',
            education: 'Education'
        },
        hero: {
            title: '.NET Developer',
            description: 'University Technician in Programming (UTN MDP) specialized in .NET Core. I design scalable and robust solutions under Onion Architecture patterns, optimizing workflows using Docker, SQL Server, and advanced AI tools.',
            downloadCv: 'Download CV',
            cvFile: 'Lucas_Luduena_CV_ENG.pdf'
        },
        techStack: {
            title: 'Tech Stack',
            subtitle: 'Specialized in the Microsoft ecosystem with a focus on modern architectures and cutting-edge tools.',
            categories: {
                backend: 'Backend & Architecture',
                frontend: 'Frontend',
                data: 'Data & DevOps',
                tools: 'Tools & AI'
            }
        },
        experience: {
            title: 'Work Experience',
            showMore: 'Show more experience',
            showLess: 'Show less',
            items: [
                {
                    title: 'Full-Stack Developer',
                    company: 'RIPSA',
                    period: 'Nov. 2024 - Present',
                    description: 'Specialized in backend .NET Core (6, 8, and 9) and frontend with Blazor. Led the migration of legacy applications (VB and .NET Framework), implemented WebHook integrations, dynamic PDF generation with QuestPDF, and payment systems with Polly.'
                },
                {
                    title: '.NET Developer',
                    company: 'EDSA',
                    period: 'Nov. 2023 - Sep. 2024',
                    description: 'Advanced maintenance and management of SQL Server databases (Store Procedures, Triggers, Indexes). Development of web applications in ASP.NET Framework focused on user experience and scalability.'
                },
                {
                    title: '.NET Developer',
                    company: 'Toledo Supermarkets',
                    period: 'Oct. 2022 - Nov. 2023',
                    description: 'Development of APIs and desktop applications using .NET Core 6 and .NET Framework (4.2 to 4.7.2). Administration of SQL Server and Informix databases. Implementation of integrations between internal and external systems.'
                }
            ]
        },
        projects: {
            title: 'Personal Projects',
            code: 'Code',
            showMore: 'Show more projects',
            showLess: 'Show less',
            items: [
                {
                    title: 'Garage Management System',
                    description: 'Scalable architecture for real-time parking management. Implements WebAPI with .NET Core 9, Frontend in Blazor .NET 10, and distributed caching systems.',
                    links: [
                        { label: 'API', url: 'https://github.com/lucasludu/API_Parcking' },
                        { label: 'Front', url: 'https://github.com/lucasludu/API_Parcking' }
                    ]
                },
                {
                    title: 'Pro & Edgy Portfolio',
                    description: 'High-impact landing page designed with a modern approach. Developed using advanced AI workflows to maximize efficiency, performance, and aesthetics.',
                    links: [{ label: 'GitHub', url: 'https://github.com/lucasludu/Portfolio' }]
                },
                {
                    title: 'Digital Gradebook',
                    description: 'Desktop application in C# with WPF and .NET 10 for academic management, using SQLite. Enables efficient administration of students, courses, subjects, and grades.',
                    links: [{ label: 'GitHub', url: 'https://github.com/lucasludu/EscuelaGestion' }]
                },
                {
                    title: 'Notification API',
                    description: '.NET Core 8 API with SQL Server. WebHook system for receiving and forwarding notifications to clients with IP validation, traceability, and automatic retry.',
                    links: [{ label: 'GitHub', url: 'https://github.com/lucasludu/Api-Notify' }]
                }
            ]
        },
        education: {
            title: 'Academic Education',
            items: [
                {
                    degree: 'English Language Improvement Course',
                    institution: 'NED College – Limerick, Ireland (25 Weeks)',
                    period: 'Starting May 11, 2026'
                },
                {
                    degree: 'University Technician in Programming',
                    institution: 'National Technological University (UTN) - Mar del Plata Branch',
                    period: '2020 - 2023'
                }
            ]
        },
        footer: {
            rights: '© 2026 Lucas David Ludueña - All rights reserved'
        }
    }
};
