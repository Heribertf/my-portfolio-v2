import { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'
import { Check } from 'lucide-react'

export default function Skills({ setActiveSection }) {
  const skills = {
    'Programming & Development': [
      { name: 'PHP (Laravel)', level: 95 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'ASP.NET', level: 65 },
      { name: 'SQL', level: 90 },
      { name: 'HTML5 & CSS3', level: 90 }
    ],
    'Databases & Servers': [
      { name: 'MSSQL', level: 90 },
      { name: 'MySQL', level: 90 },
      { name: 'Windows Server', level: 80 },
      { name: 'Linux', level: 80 },
      { name: 'SQL Server Administration', level: 85 }
    ]
  }

  const [animatedSkills, setAnimatedSkills] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const newAnimatedSkills = {}
          Object.keys(skills).forEach(category => {
            newAnimatedSkills[category] = true
          })
          setAnimatedSkills(newAnimatedSkills)
        }
      })
    }, { threshold: 0.1 })

    const section = document.getElementById('skills')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section
      id="skills"
      className="section py-20 bg-dark-700 dark:bg-dark-700 light:bg-light-bg"
      onMouseEnter={() => setActiveSection('skills')}
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          title="My Skills"
          subtitle="Technologies I work with and my proficiency levels"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillsList]) => (
            <div key={category} className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-6 gradient-text">{category}</h3>
              <div className="space-y-4">
                {skillsList.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span>{animatedSkills[category] ? skill.level : 0}%</span>
                    </div>
                    <div className="skill-bar rounded-full overflow-hidden h-2 bg-dark-600/20">
                      <div
                        className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-1000 ease-out"
                        style={{ width: animatedSkills[category] ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}