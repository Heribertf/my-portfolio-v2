export default function SectionHeader({ title, subtitle }) {
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