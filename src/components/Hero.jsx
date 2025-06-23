import { useEffect, useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero({ setActiveSection }) {
    const [particles, setParticles] = useState([])
    const heroRef = useRef(null)

    // Create particles
    useEffect(() => {
        const createParticles = () => {
            const particleCount = window.innerWidth < 768 ? 30 : 50
            const newParticles = []

            for (let i = 0; i < particleCount; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 3 + 1,
                    speedX: (Math.random() - 0.5) * 0.2,
                    speedY: (Math.random() - 0.5) * 0.2,
                    opacity: Math.random() * 0.5 + 0.1
                })
            }

            setParticles(newParticles)
        }

        createParticles()

        const handleResize = () => {
            createParticles()
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Animate particles
    useEffect(() => {
        if (!heroRef.current) return

        const animateParticles = () => {
            setParticles(prevParticles =>
                prevParticles.map(particle => {
                    let newX = particle.x + particle.speedX
                    let newY = particle.y + particle.speedY

                    // Wrap around edges
                    if (newX > 100) newX = 0
                    if (newX < 0) newX = 100
                    if (newY > 100) newY = 0
                    if (newY < 0) newY = 100

                    return {
                        ...particle,
                        x: newX,
                        y: newY
                    }
                })
            )

            requestAnimationFrame(animateParticles)
        }

        const animationId = requestAnimationFrame(animateParticles)
        return () => cancelAnimationFrame(animationId)
    }, [])

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: 'smooth'
            })
            setActiveSection(sectionId)
        }
    }

    return (
        <section
            id="home"
            ref={heroRef}
            className="section min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Particles */}
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="particle absolute bg-primary-500 rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        opacity: particle.opacity
                    }}
                ></div>
            ))}

            <div className="container mx-auto px-4 py-20 text-center relative z-10">
                <div className="max-w-3xl mx-auto">
                    <p className="text-primary-500 mb-4 font-medium">Hello, I'm</p>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text">Felix Muimi</span>
                    </h1>

                    <RotatingWords />

                    <p className="text-lg md:text-xl text-dark-300 dark:text-dark-300 light:text-light-secondary mb-8 max-w-2xl mx-auto">
                        Building scalable, high-performance web applications
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="btn-hover-effect px-8 py-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium transition-all hover:shadow-lg"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-hover-effect px-8 py-3 rounded-full border-2 border-primary-500 text-primary-500 dark:text-primary-500 light:text-primary-500 font-medium transition-all hover:bg-primary-500/10"
                        >
                            Contact Me
                        </button>
                    </div>

                    <div className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2">
                        <button
                            onClick={() => scrollToSection('about')}
                            aria-label="Scroll down"
                            className="animate-bounce p-2"
                        >
                            <ChevronDown className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

function RotatingWords() {
    return (
        <div className="relative h-12 md:h-16 mb-6">
            <div className="rotate-words text-2xl md:text-3xl font-semibold">
                <span className="absolute left-1/2 transform -translate-x-1/2 opacity-0 animate-rotateWord">
                    Software Developer
                </span>
                <span className="absolute left-1/2 transform -translate-x-1/2 opacity-0 animate-rotateWord animation-delay-3000">
                    Full Stack Developer
                </span>
                <span className="absolute left-1/2 transform -translate-x-1/2 opacity-0 animate-rotateWord animation-delay-6000">
                    Laravel Specialist
                </span>
                <span className="absolute left-1/2 transform -translate-x-1/2 opacity-0 animate-rotateWord animation-delay-9000">
                    System Integrator
                </span>
            </div>
        </div>
    )
}