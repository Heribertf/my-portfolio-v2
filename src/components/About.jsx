import { useEffect, useState } from 'react'
import { User, Download, MapPin } from 'lucide-react'

export default function About({ setActiveSection }) {
    const metrics = [
        { id: 1, value: 2, suffix: '+', label: 'Years Experience' },
        { id: 2, value: 300, suffix: '%', label: 'Performance Improvement' },
        { id: 3, value: 50, suffix: '+', label: 'Database Optimizations' },
        { id: 4, value: 10, suffix: '+', label: 'System Integrations' }
    ]

    const [counters, setCounters] = useState(metrics.map(m => 0))

    useEffect(() => {
        const duration = 2000
        const startTime = Date.now()

        const animate = () => {
            const now = Date.now()
            const progress = Math.min(1, (now - startTime) / duration)

            setCounters(metrics.map((metric, index) => {
                return Math.floor(progress * metric.value)
            }))

            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }

        animate()
    }, [])

    return (
        <section
            id="about"
            className="section py-20 bg-dark-800 dark:bg-dark-800 light:bg-light-surface"
            onMouseEnter={() => setActiveSection('about')}
        >
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="About Me"
                    subtitle="Get to know me better"
                />

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/3 flex justify-center">
                        <div className="relative group">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-500/20 relative">
                                <div className="w-full h-full bg-dark-700 dark:bg-dark-700 light:bg-light-surface flex items-center justify-center">
                                    <User className="w-32 h-32 text-primary-500" />
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-primary-500/50 transition-all duration-300"></div>
                            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-primary-500/30 transition-all duration-500"></div>
                        </div>
                    </div>

                    <div className="lg:w-2/3">
                        <h3 className="text-2xl font-bold mb-6">Who am I?</h3>

                        <p className="text-lg mb-6">
                            Results-driven Software Developer with expertise in PHP (Laravel), API integrations, and database management. Skilled in designing and developing scalable, high-performance web applications that streamline business processes and enhance user experience. Passionate about building innovative, secure, and user-centric applications.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            {metrics.map((metric, index) => (
                                <div key={metric.id} className="text-center p-4 glass-card rounded-lg">
                                    <div className="text-3xl font-bold gradient-text mb-2">
                                        {counters[index]}{metric.suffix}
                                    </div>
                                    <div className="text-sm text-dark-300 dark:text-dark-300 light:text-light-secondary">
                                        {metric.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#"
                                className="btn-hover-effect px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium transition-all hover:shadow-lg flex items-center gap-2"
                            >
                                <Download className="w-5 h-5" />
                                Download CV
                            </a>
                            <div className="flex items-center text-dark-300 dark:text-dark-300 light:text-light-secondary">
                                <MapPin className="w-5 h-5 mr-2" />
                                Nairobi, Kenya
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function SectionHeader({ title, subtitle }) {
    return (
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">{title}</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
            <p className="text-dark-300 dark:text-dark-300 light:text-light-secondary max-w-3xl mx-auto">
                {subtitle}
            </p>
        </div>
    )
}