import { useState, useEffect } from 'react'
import { Mail, Phone, Linkedin, Github, Twitter, MapPin, Send, Loader, CheckCircle } from 'lucide-react'
import SectionHeader from './SectionHeader'
import emailjs from '@emailjs/browser'

export default function Contact({ setActiveSection }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [formErrors, setFormErrors] = useState({})
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formSubmitting, setFormSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState('')

    const contactMethods = [
        {
            icon: Mail,
            title: "Email",
            value: "felixprogrammer76@gmail.com",
            link: "mailto:felixprogrammer76@gmail.com"
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+254768850167",
            link: "tel:+254768850167"
        },
        {
            icon: Linkedin,
            title: "LinkedIn",
            value: "linkedin.com/in/felix-muimi-354485218",
            link: "https://www.linkedin.com/in/felix-muimi-354485218/"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Nairobi, Kenya",
            link: "https://www.google.com/maps/place/Nairobi"
        }
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })

        if (formErrors[name]) {
            setFormErrors({
                ...formErrors,
                [name]: ''
            })
        }
    }

    const validateForm = () => {
        const errors = {}
        let isValid = true

        if (!formData.name.trim()) {
            errors.name = 'Name is required'
            isValid = false
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required'
            isValid = false
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email'
            isValid = false
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required'
            isValid = false
        }

        setFormErrors(errors)
        return isValid
    }

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitError('')

        if (!validateForm()) {
            return
        }

        setFormSubmitting(true)

        try {

            // Send the email using EmailJS
            const response = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: "Felix Muimi"
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )


            if (response.status === 200) {
                setFormSubmitted(true)
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                })
                setTimeout(() => {
                    setFormSubmitted(false)
                }, 5000)
            } else {
                throw new Error('Failed to send message')
            }
        } catch (error) {
            console.error('Error sending email:', error)
            setSubmitError('Failed to send message. Please try again later or contact me directly at felixprogrammer76@gmail.com')
        } finally {
            setFormSubmitting(false)
        }
    }

    return (
        <section
            id="contact"
            className="section py-20 bg-dark-800 dark:bg-dark-800 light:bg-light-surface"
            onMouseEnter={() => setActiveSection('contact')}
        >
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Get In Touch"
                    subtitle="Have a project in mind or want to discuss opportunities? Feel free to reach out!"
                />

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon
                                return (
                                    <a
                                        key={index}
                                        href={method.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start group"
                                    >
                                        <div className="p-3 rounded-full bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors mr-4">
                                            <Icon className="w-5 h-5 text-primary-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">{method.title}</h4>
                                            <p className="text-dark-300 dark:text-dark-300 light:text-light-secondary group-hover:text-primary-500 transition-colors">
                                                {method.value}
                                            </p>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>

                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/in/felix-muimi-354485218/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-primary-500/10 hover:bg-primary-500/20 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-6 h-6 text-primary-500" />
                                </a>
                                <a
                                    href="https://github.com/Heribertf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-primary-500/10 hover:bg-primary-500/20 transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-6 h-6 text-primary-500" />
                                </a>
                                <a
                                    href="https://twitter.com/muimi_f"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-primary-500/10 hover:bg-primary-500/20 transition-colors"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-6 h-6 text-primary-500" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {formSubmitted ? (
                                <div className="p-6 bg-success/10 border border-success rounded-lg text-center">
                                    <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
                                    <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                                    <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                                </div>
                            ) : (
                                <>
                                    {submitError && (
                                        <div className="p-4 bg-error/10 border border-error rounded-lg">
                                            <p className="text-error">{submitError}</p>
                                        </div>
                                    )}

                                    <div>
                                        <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-lg contact-input ${formErrors.name ? 'border-red-500' : 'border-dark-700 dark:border-dark-700 light:border-light-secondary'}`}
                                            placeholder="John Doe"
                                        />
                                        {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-lg contact-input ${formErrors.email ? 'border-red-500' : 'border-dark-700 dark:border-dark-700 light:border-light-secondary'}`}
                                            placeholder="john@example.com"
                                        />
                                        {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows="5"
                                            className={`w-full px-4 py-3 rounded-lg contact-input ${formErrors.message ? 'border-red-500' : 'border-dark-700 dark:border-dark-700 light:border-light-secondary'}`}
                                            placeholder="Hello Felix, I'd like to discuss..."
                                        ></textarea>
                                        {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formSubmitting}
                                        className="btn-hover-effect w-full px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium transition-all hover:shadow-lg flex items-center justify-center gap-2"
                                    >
                                        {formSubmitting ? (
                                            <>
                                                <Loader className="w-5 h-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}