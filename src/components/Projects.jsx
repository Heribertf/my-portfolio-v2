import { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, Image as ImageIcon, Mail, MapPin, Users, CreditCard, Bell, Shield, Truck, ClipboardList, Mic, CalendarCheck, Sparkles, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from './SectionHeader'

export default function Projects({ setActiveSection }) {
    const projects = [
        {
            id: 1,
            title: "SheltarHub Rental Property Platform",
            description: "An intelligent property listing and rental platform with agent and admin dashboards, payment gateway integration, and real-time notifications",
            technologies: ["PHP", "MySQL", "JavaScript", "RabbitMQ", "Bootstrap"],
            features: [
                "Agent & admin dashboards",
                "Intasend payment integration",
                "Google Maps API",
                "OAuth 2.0 authentication",
                "RabbitMQ email notifications"
            ],
            image: "/images/sheltar-hub.png",
            github: "https://github.com/Heribertf/sheltar-main",
            liveDemo: "https://sheltarhub.com",
            metrics: [
                { icon: <Users className="w-4 h-4" />, value: "120+", label: "Agent signups" },
                { icon: <MapPin className="w-4 h-4" />, value: "300+", label: "Listings" },
                { icon: <CreditCard className="w-4 h-4" />, value: "Intasend", label: "Payments" }
            ],
            highlights: [
                { icon: <Shield className="w-4 h-4" />, text: "Secure OAuth 2.0 login" },
                { icon: <Bell className="w-4 h-4" />, text: "Real-time notifications" }
            ]
        },
        {
            id: 2,
            title: "Women in Mining Kenya Website",
            description: "A custom-built website for Women in Mining Kenya (WIMKe), a grassroots organization and social impact enterprise",
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            features: [
                "Custom CMS for content management",
                "News and publication system",
                "Photo gallery",
                "Responsive design",
                "Role-based access control"
            ],
            image: "/images/women-in-mining-kenya.png",
            github: "https://github.com/Heribertf/Women-in-Mining-Kenya",
            liveDemo: "https://wimkemya.co.ke",
            metrics: [
                { icon: <Users className="w-4 h-4" />, value: "50+", label: "Publications" },
                { icon: <Mail className="w-4 h-4" />, value: "2x", label: "Engagement" }
            ],
            highlights: [
                { icon: <ImageIcon className="w-4 h-4" />, text: "Custom gallery system" },
                { icon: <Users className="w-4 h-4" />, text: "Non-technical admin interface" }
            ]
        },
        {
            id: 3,
            title: "MWAS Movers & Logistics Website",
            description: "A professional moving company platform with instant quotes, online bookings, dispatch management, and real-time tracking.",
            technologies: ["Node.js", "MongoDB", "JavaScript", "Tailwind CSS", "Google Maps API"],
            features: [
                "Instant quote calculator",
                "Online booking & payments",
                "Dispatch management dashboard",
                "Inventory tracking system",
                "SMS & email notifications"
            ],
            image: "/images/mwasmovers.png",
            github: "https://github.com/Heribertf/movers-company",
            liveDemo: "https://movers-company.vercel.app/",
            metrics: [
                { icon: <Users className="w-4 h-4" />, value: "65%", label: "Online bookings" },
                { icon: <CreditCard className="w-4 h-4" />, value: "30%", label: "Admin workload reduced" },
                { icon: <MapPin className="w-4 h-4" />, value: "85%", label: "Booking growth" }
            ],
            highlights: [
                { icon: <Truck className="w-4 h-4" />, text: "Real-time move tracking" },
                { icon: <ClipboardList className="w-4 h-4" />, text: "Smart dispatch & scheduling" }
            ]
        },
        {
            id: 4,
            title: "Youth Tank - Church Youth Platform",
            description: "A youth-focused church platform for talent showcases, spiritual growth, and event coordination with modern UI and engagement tools.",
            technologies: ["Next.js", "Firebase", "Tailwind CSS", "React", "Node.js"],
            features: [
                "Talent profiles & media galleries",
                "Event calendar & volunteer coordination",
                "Prayer request & devotional library",
                "Testimony sharing tools",
                "Mobile-first spiritual resources"
            ],
            image: "/images/youth-tank.png",
            github: "https://github.com/Heribertf/youth-organization",
            liveDemo: "https://youth-tank.vercel.app",
            metrics: [
                { icon: <Users className="w-4 h-4" />, value: "85%", label: "Youth engagement" },
                { icon: <CalendarCheck className="w-4 h-4" />, value: "60%", label: "Event participation rise" },
                { icon: <Mic className="w-4 h-4" />, value: "+15", label: "New talents discovered" }
            ],
            highlights: [
                { icon: <Sparkles className="w-4 h-4" />, text: "Virtual talent shows" },
                { icon: <Heart className="w-4 h-4" />, text: "Devotional & prayer system" }
            ]
        }


        // {
        //     id: 3,
        //     title: "Service Management System",
        //     description: "High-performance Laravel-based system replacing slow ERPNext solution",
        //     technologies: ["Laravel 11", "MSSQL", "PHP 8.2", "Livewire", "jQuery", "Bootstrap"],
        //     impact: "300% performance improvement, 2-second page load times",
        //     features: ["Real-time updates", "Multi-database integration", "Automated reporting"],
        //     image: "/images/project1.jpg",
        //     github: "https://github.com/yourusername/project1",
        //     liveDemo: "https://project1-demo.com",
        //     metrics: [
        //         { value: "300%", label: "Performance improvement" },
        //         { value: "2s", label: "Page load time" }
        //     ]
        // },
        // {
        //     id: 4,
        //     title: "Inventory Management System",
        //     description: "Asset lifecycle management for computers, printers, and accessories",
        //     technologies: ["Laravel", "PHP", "MSSQL", "Blade", "AJAX", "Bootstrap"],
        //     impact: "Streamlined asset tracking and reporting",
        //     features: ["Role-based access control", "Advanced search", "Sage integration"],
        //     image: "/images/project1.jpg",
        //     github: "https://github.com/yourusername/project1",
        //     liveDemo: "https://project1-demo.com",
        //     metrics: [
        //         { value: "300%", label: "Performance improvement" },
        //         { value: "2s", label: "Page load time" }
        //     ]
        // }
    ]

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const scrollContainer = useRef(null);

    const scrollLeft = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    const scrollToProject = (index) => {
        if (scrollContainer.current) {
            const container = scrollContainer.current;
            const projectWidth = container.children[0]?.offsetWidth || 0;
            container.scrollTo({
                left: projectWidth * index,
                behavior: 'smooth'
            });
            setCurrentProjectIndex(index);
        }
    };

    // Update current index on scroll
    useEffect(() => {
        const container = scrollContainer.current;
        if (!container) return;

        const handleScroll = () => {
            const projectWidth = container.children[0]?.offsetWidth || 0;
            const newIndex = Math.round(container.scrollLeft / projectWidth);
            setCurrentProjectIndex(newIndex);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id="projects"
            className="section py-20 bg-dark-700 dark:bg-dark-700 light:bg-light-bg"
            onMouseEnter={() => setActiveSection('projects')}
        >
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="My Projects"
                    subtitle="Some of my recent work and contributions"
                />
                <div className="relative group">
                    {/* Navigation Arrows */}
                    <button
                        onClick={scrollLeft}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-dark-800/80 hover:bg-primary-500/20 rounded-full p-3 transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div
                        ref={scrollContainer}
                        className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory gap-6"
                    >
                        {projects.map(project => (
                            <div
                                key={project.id}
                                className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] xl:w-[30vw] snap-start"
                            >
                                <div className="card-hover glass-card rounded-xl overflow-hidden flex flex-col h-full mx-2">
                                    {/* Project Image */}
                                    <div className="relative h-48 bg-dark-600 overflow-hidden group">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-dark-600">
                                                <ImageIcon className="w-12 h-12 text-dark-400" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent flex items-end p-4">
                                            <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-grow">
                                        <p className="text-dark-300 mb-4 line-clamp-3">{project.description}</p>

                                        {/* Metrics */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.metrics.map((metric, i) => (
                                                <div key={i} className="flex items-center gap-1 bg-primary-500/10 px-2 py-1 rounded-full text-sm">
                                                    <span className="text-primary-500">{metric.icon}</span>
                                                    <span className="font-medium">
                                                        <span className="gradient-text">{metric.value}</span> {metric.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Technologies */}
                                        <div className="mb-4">
                                            <h4 className="font-medium mb-2">Technologies:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, i) => (
                                                    <span key={i} className="px-2 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="mb-4">
                                            <h4 className="font-medium mb-2">Key Features:</h4>
                                            <ul className="space-y-1">
                                                {project.features.slice(0, 3).map((feature, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-primary-500 mr-1 text-xs mt-1">•</span>
                                                        <span className="text-sm">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="p-4 bg-dark-700/50 flex justify-between border-t border-dark-600">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-dark-300 hover:text-primary-500 transition-colors text-sm"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span>Code</span>
                                            </a>
                                        )}
                                        {project.liveDemo && (
                                            <a
                                                href={project.liveDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-dark-300 hover:text-primary-500 transition-colors text-sm"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span>Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={scrollRight}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-dark-800/80 hover:bg-primary-500/20 rounded-full p-3 transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile Indicators */}
                <div className="flex justify-center gap-2 mt-6 md:hidden">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToProject(index)}
                            className={`w-2 h-2 rounded-full transition-all ${currentProjectIndex === index ? 'bg-primary-500 w-4' : 'bg-dark-500'}`}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}