import { Linkedin, Github, Mail, Heart } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-dark-900 dark:bg-dark-900 light:bg-light-bg py-12 border-t border-dark-800 dark:border-dark-800 light:border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <span className="text-xl font-bold gradient-text">Felix Muimi</span>
                        <p className="text-dark-300 dark:text-dark-300 light:text-gray-600 mt-2">
                            Fullstack Developer & System Integrator
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
                        <a href="#home" className="text-dark-300 dark:text-dark-300 light:text-gray-600 hover:text-primary-500 transition-colors">Home</a>
                        <a href="#about" className="text-dark-300 dark:text-dark-300 light:text-gray-600 hover:text-primary-500 transition-colors">About</a>
                        <a href="#skills" className="text-dark-300 dark:text-dark-300 light:text-gray-600 hover:text-primary-500 transition-colors">Skills</a>
                        <a href="#experience" className="text-dark-300 dark:text-dark-300 light:text-gray-600 hover:text-primary-500 transition-colors">Experience</a>
                        <a href="#projects" className="text-dark-300 dark:text-dark-300 light:text-gray-600 hover:text-primary-500 transition-colors">Projects</a>
                        <a href="#contact" className="text-dark-300 dark:text-dark-300 light:text-gray-600 hover:text-primary-500 transition-colors">Contact</a>
                    </div>

                    <div className="flex space-x-4">
                        <a
                            href="https://www.linkedin.com/in/felix-muimi-354485218/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-primary-500/10 hover:bg-primary-500/20 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5 text-primary-500" />
                        </a>
                        <a
                            href="https://github.com/Heribertf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-primary-500/10 hover:bg-primary-500/20 transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5 text-primary-500" />
                        </a>
                        <a
                            href="mailto:felixprogrammer76@gmail.com"
                            className="p-2 rounded-full bg-primary-500/10 hover:bg-primary-500/20 transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5 text-primary-500" />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-dark-800 dark:border-dark-800 light:border-gray-200 text-center text-dark-300 dark:text-dark-300 light:text-gray-600">
                    <p>© {new Date().getFullYear()} Felix Muimi. All rights reserved.</p>
                    <p className="mt-2">Made with <Heart className="inline w-4 h-4 text-red-500" /> and React</p>
                </div>
            </div>
        </footer>
    )
}