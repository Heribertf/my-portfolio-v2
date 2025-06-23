export const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
]

export const metrics = [
    { id: 1, value: 2, suffix: '+', label: 'Years Experience' },
    { id: 2, value: 300, suffix: '%', label: 'Performance Improvement' },
    { id: 3, value: 50, suffix: '+', label: 'Database Optimizations' },
    { id: 4, value: 10, suffix: '+', label: 'System Integrations' }
]

export const skills = {
    'Programming & Development': [
        { name: 'PHP (Laravel 11)', level: 95 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'ASP.NET', level: 65 },
        { name: 'SQL', level: 90 },
        { name: 'HTML5 & CSS3', level: 90 }
    ],
    // ... other skill categories
}

export const experiences = [
    {
        id: 1,
        position: "Junior Software Developer",
        company: "MFI Document Solutions Limited",
        period: "July 2024 – Present",
        achievements: [
            "300% faster system performance by replacing ERPNext with Laravel 11 & MSSQL",
            // ... other achievements
        ]
    },
    // ... other experiences
]

export const projects = [
    {
        id: 1,
        title: "Service Management System",
        description: "High-performance Laravel-based system replacing slow ERPNext solution",
        technologies: ["Laravel 11", "MSSQL", "PHP 8.2", "Livewire", "jQuery", "Bootstrap"],
        impact: "300% performance improvement, 2-second page load times",
        features: ["Real-time updates", "Multi-database integration", "Automated reporting"]
    },
    // ... other projects
]

export const contactMethods = [
    {
        icon: "Mail",
        title: "Email",
        value: "felixprogrammer76@gmail.com",
        link: "mailto:felixprogrammer76@gmail.com"
    },
    // ... other contact methods
]