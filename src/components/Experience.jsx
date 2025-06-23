import { CheckCircle } from 'lucide-react'
import SectionHeader from './SectionHeader'

export default function Experience({ setActiveSection }) {
    const experiences = [
        {
            id: 1,
            position: "Junior Software Developer",
            company: "MFI Document Solutions Limited",
            period: "July 2024 – Present",
            achievements: [
                "300% faster system performance by replacing ERPNext with Laravel 11 & MSSQL",
                "Reduced page load times from 8+ seconds to under 2 seconds",
                "40% faster engineer response times through automated alerts",
                "30% improvement in customer satisfaction",
                "50% time reduction in report generation with automated PDF exports",
                "Implemented real-time task management with Livewire and AJAX"
            ]
        },
        // {
        //     id: 2,
        //     position: "ICT Intern",
        //     company: "National Gender and Equality Commission",
        //     period: "January 2022 – April 2022",
        //     achievements: [
        //         "Set up Windows Server 2019 and Active Directory",
        //         "Database optimization and web server troubleshooting",
        //         "Developed CRUD application using ASP.NET",
        //         "Created management reports using Crystal Reports"
        //     ]
        // },
        {
            id: 3,
            position: "Freelance Web Developer",
            company: "Self-Employed",
            period: "2022 – Present",
            achievements: [
                "Developed 10+ custom websites for clients across various industries",
                "Increased client revenue by 40% on average through improved digital presence",
                "Reduced client operational costs by automating manual processes",
                "Implemented responsive designs that improved mobile conversion rates by 35%",
                "Built custom CMS solutions for non-technical clients",
                "Integrated payment gateways and booking systems for e-commerce clients"
            ]
        }
    ]

    return (
        <section
            id="experience"
            className="section py-20 bg-dark-800 dark:bg-dark-800 light:bg-light-surface"
            onMouseEnter={() => setActiveSection('experience')}
        >
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="My Experience"
                    subtitle="Where I've worked and what I've accomplished"
                />

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`mb-12 card-hover glass-card p-6 md:p-8 rounded-xl ${index !== experiences.length - 1 ? 'border-b border-dark-700 dark:border-dark-700 light:border-light-secondary pb-12' : ''}`}
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold gradient-text">{exp.position}</h3>
                                    <p className="text-lg">{exp.company}</p>
                                </div>
                                <div className="mt-2 md:mt-0 px-4 py-2 bg-primary-500/10 rounded-full text-primary-500 text-sm font-medium">
                                    {exp.period}
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {exp.achievements.map((achievement, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}