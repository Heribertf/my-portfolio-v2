import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X, ChevronDown, Linkedin, Github, Mail } from 'lucide-react'

const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
]

export default function Header({
    darkMode = true,
    toggleTheme = () => { },
    mobileMenuOpen = false,
    toggleMobileMenu = () => { },
    closeMobileMenu = () => { },
    activeSection = 'home',
    setActiveSection = () => { }
}) {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 80,
                behavior: 'smooth'
            })
            setActiveSection(sectionId)
            closeMobileMenu()
        }
    }

    return (
        <>

            <header className="fixed w-full z-50 bg-gray-900/90 light:bg-light-bg backdrop-blur-md shadow-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <span className="text-2xl font-bold gradient-text">Felix Muimi</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`nav-link ${activeSection === link.id
                                    ? 'active font-medium text-blue-400'
                                    : 'text-gray-300 hover:text-blue-400'
                                    } transition-colors`}
                            >
                                {link.label}
                            </button>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {darkMode ? (
                                <Sun className="w-5 h-5 text-yellow-400" />
                            ) : (
                                <Moon className="w-5 h-5 text-indigo-700" />
                            )}
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {darkMode ? (
                                <Sun className="w-5 h-5 text-yellow-400" />
                            ) : (
                                <Moon className="w-5 h-5 text-indigo-700" />
                            )}
                        </button>

                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-full hover:bg-gray-800 transition-colors text-white"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu md:hidden fixed inset-0 left-auto w-64 bg-dark-800/95 backdrop-blur-lg z-50 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col h-full p-6">
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={toggleMobileMenu}
                                className="p-2 rounded-full hover:bg-gray-800 transition-colors text-white"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <nav className="flex flex-col space-y-2">
                            {navLinks.map(link => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={`text-xl ${activeSection === link.id
                                        ? 'active font-medium'
                                        : 'text-gray-300 hover:text-blue-400'
                                        } transition-colors`}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>

                        <div className="mt-auto pt-8 border-t border-gray-700">
                            <div className="flex justify-center space-x-6">
                                <a
                                    href="https://www.linkedin.com/in/felix-muimi-354485218/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-blue-400 transition-colors"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a
                                    href="https://github.com/Heribertf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-blue-400 transition-colors"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                                <a
                                    href="mailto:felixprogrammer76@gmail.com"
                                    className="text-gray-300 hover:text-blue-400 transition-colors"
                                >
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay - Click outside to close */}
                {/* {mobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        onClick={closeMobileMenu}
                        onTouchStart={closeMobileMenu}
                    />
                )} */}
                {mobileMenuOpen && (
                    <div
                        className="mobile-menu-overlay md:hidden"
                        onClick={closeMobileMenu}
                    />
                )}
            </header>
        </>
    )
}