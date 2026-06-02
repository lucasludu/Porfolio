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
            description: 'Técnico Universitario en Programación (UTN) especializado en el desarrollo backend con .NET Core. Diseño soluciones web de alto rendimiento bajo arquitecturas modernas (Onion/Clean Architecture) y bases de datos relacionales, optimizando la confiabilidad de sistemas mediante patrones de diseño y herramientas de automatización.',
            downloadCv: 'Descargar CV',
            cvFile: 'Lucas_Luduena_CV_ESP.pdf'
        },
        techStack: {
            title: 'Stack Tecnológico',
            subtitle: 'Especializado en el ecosistema Microsoft con un enfoque en arquitecturas modernas y herramientas de última generación.',
            categories: {
                backend: 'Backend & Architecture',
                frontend: 'Frontend & Mobile',
                data: 'Data & Optimization',
                tools: 'Tools & AI',
                authentication: 'Autenticación',
                orm: 'ORM',
                testing: 'Testing',
                logging: 'Logging',
                platforms: 'Plataformas',
                background: 'Background Tasks',
                reporting: 'Reporting',
                frontend_ui: 'Frontend UI'
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
                    description: 'Especializado en desarrollo Full-Stack con .NET Core (6, 8 y 9) y Blazor. Lideré la migración de aplicaciones legacy (VB y .NET Framework), optimicé flujos asíncronos mediante WebHooks, e integré generación dinámica de PDFs con QuestPDF y lógica de resiliencia para pasarelas de pago usando Polly.'
                },
                {
                    title: 'Desarrollador de .NET',
                    company: 'EDSA',
                    period: 'nov. 2023 - sept. 2024',
                    description: 'Mantenimiento y gestión avanzada de bases de datos SQL Server mediante Stored Procedures, Triggers e Índices optimizados. Desarrollé aplicaciones web en ASP.NET Framework enfocadas en brindar una experiencia de usuario fluida y de alta escalabilidad.'
                },
                {
                    title: 'Desarrollador de .NET',
                    company: 'Supermercados Toledo',
                    period: 'oct. 2022 - nov. 2023',
                    description: 'Desarrollé APIs robustas y aplicaciones de escritorio utilizando .NET Core 6 y .NET Framework (4.2 a 4.7.2). Administré bases de datos de alta transaccionalidad SQL Server e Informix, implementando integraciones eficientes entre sistemas internos y externos.'
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
                    title: 'Split Money',
                    description: 'Plataforma para gestión de gastos. Backend desarrollado con .NET Core 10 bajo Clean Architecture y base de datos SQLite, conectado a un frontend interactivo en Blazor.',
                    links: [
                        { label: 'API', url: 'https://github.com/lucasludu/Api_SplitMoney' },
                        { label: 'Front', url: 'https://github.com/lucasludu/View_SplitMoney' }
                    ]
                },
                {
                    title: 'TripPicture',
                    description: 'Aplicación móvil en React Native y Firebase. Permite documentar viajes, almacenar fotos (ibbimage) y visualizar en un mapa interactivo las ciudades, países y kilómetros recorridos.',
                    links: [{ label: 'GitHub', url: 'https://github.com/lucasludu/TripPicture' }]
                },
                {
                    title: 'AgenteDocumentador',
                    description: 'Orquestador IA en Python. Utiliza Ollama (Docker), Groq y Gemini para analizar proyectos, generar documentación, diagramas UML y mejoras, con visor de logs paso a paso en terminal.',
                    links: [{ label: 'GitHub', url: 'https://github.com/lucasludu/AgenteDocumentador' }]
                },
                {
                    title: 'Carpintería Web',
                    description: 'Portfolio interactivo puro frontend construido con React. Muestra de forma elegante los trabajos realizados, descripción de servicios y vías de contacto para un negocio de carpintería.',
                    links: [
                        { label: 'GitHub', url: 'https://github.com/lucasludu/Carpinteria-Web' },
                        { label: 'Web', url: 'https://lucasludu.github.io/Carpinteria-Web/' }
                    ]
                },
                {
                    title: 'Sistema de Gestión de Cocheras',
                    description: 'Arquitectura escalable para la gestión de estacionamientos en tiempo real. Implementa WebAPI con .NET Core 9, Frontend en Blazor .NET 10 y sistemas de caché distribuida.',
                    links: [
                        { label: 'API', url: 'https://github.com/lucasludu/API_Parcking' },
                        { label: 'Front', url: 'https://github.com/lucasludu/ParkingClient' }
                    ]
                },
                {
                    title: 'Portfolio Pro & Áspero',
                    description: 'Landing page de alto impacto diseñada con un enfoque moderno. Desarrollada mediante flujos de trabajo avanzados de IA para maximizar la eficiencia, performance y estética.',
                    links: [{ label: 'Front', url: 'https://github.com/lucasludu/Portfolio' }]
                },
                {
                    title: 'Libreta Digital',
                    description: 'Aplicación de escritorio en C# con WPF y .NET 10 para la gestión académica, utilizando SQLite. Permite administrar alumnos, cursos, materias y calificaciones de manera eficiente.',
                    links: [{ label: 'WPF', url: 'https://github.com/lucasludu/EscuelaGestion' }]
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
            description: '.NET Developer & University Technician in Programming. I design high-performance backend solutions using modern architectures (Onion/Clean Architecture) and relational databases, focused on system reliability through robust design patterns and automation tools.',
            downloadCv: 'Download CV',
            cvFile: 'Lucas_Luduena_CV_ENG.pdf'
        },
        techStack: {
            title: 'Tech Stack',
            subtitle: 'Specialized in the Microsoft ecosystem with a focus on modern architectures and cutting-edge tools.',
            categories: {
                backend: 'Backend & Architecture',
                frontend: 'Frontend & Mobile',
                data: 'Data & Optimization',
                tools: 'Tools & AI',
                authentication: 'Authentication',
                orm: 'ORM',
                testing: 'Testing',
                logging: 'Logging',
                platforms: 'Platforms',
                background: 'Background Tasks',
                reporting: 'Reporting',
                frontend_ui: 'Frontend UI'
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
                    description: 'Specialized in Full-Stack development with .NET Core (6, 8, and 9) and Blazor. Successfully led the migration of legacy applications (VB and .NET Framework), optimized asynchronous workflows via WebHooks, and implemented dynamic PDF generation with QuestPDF and payment system resilience using Polly.'
                },
                {
                    title: '.NET Developer',
                    company: 'EDSA',
                    period: 'Nov. 2023 - Sep. 2024',
                    description: 'Advanced maintenance and management of SQL Server databases using optimized Stored Procedures, Triggers, and Indexes. Developed web applications in ASP.NET Framework with a strong focus on user experience and scalability.'
                },
                {
                    title: '.NET Developer',
                    company: 'Toledo Supermarkets',
                    period: 'Oct. 2022 - Nov. 2023',
                    description: 'Developed robust APIs and desktop applications using .NET Core 6 and .NET Framework (4.2 to 4.7.2). Administered high-volume SQL Server and Informix databases, implementing seamless integrations between internal and external systems.'
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
                    title: 'Split Money',
                    description: 'Expense management platform. Backend built with .NET Core 10 following Clean Architecture and SQLite database, connected to an interactive frontend developed in Blazor.',
                    links: [
                        { label: 'API', url: 'https://github.com/lucasludu/Api_SplitMoney' },
                        { label: 'Front', url: 'https://github.com/lucasludu/View_SplitMoney' }
                    ]
                },
                {
                    title: 'TripPicture',
                    description: 'Mobile application in React Native and Firebase. Allows tracking travel history, storing photos (ibbimage), and visualizing visited cities, countries, and traveled kilometers on an interactive map.',
                    links: [{ label: 'GitHub', url: 'https://github.com/lucasludu/TripPicture' }]
                },
                {
                    title: 'AgenteDocumentador',
                    description: 'AI Orchestrator in Python. Leverages Ollama (Docker), Groq, and Gemini to analyze and generate project documentation, UML diagrams, featuring a terminal log viewer.',
                    links: [{ label: 'GitHub', url: 'https://github.com/lucasludu/AgenteDocumentador' }]
                },
                {
                    title: 'Carpintería Web',
                    description: 'Interactive pure frontend portfolio built with React. Elegantly showcases projects, service descriptions, and contact methods for a carpentry business.',
                    links: [
                        { label: 'GitHub', url: 'https://github.com/lucasludu/Carpinteria-Web' },
                        { label: 'Web', url: 'https://lucasludu.github.io/Carpinteria-Web/' }
                    ]
                },
                {
                    title: 'Garage Management System',
                    description: 'Scalable architecture for real-time parking management. Implements WebAPI with .NET Core 9, Frontend in Blazor .NET 10, and distributed caching systems.',
                    links: [
                        { label: 'API', url: 'https://github.com/lucasludu/API_Parcking' },
                        { label: 'Front', url: 'https://github.com/lucasludu/ParkingClient' }
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
