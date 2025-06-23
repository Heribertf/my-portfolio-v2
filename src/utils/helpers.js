export const scrollToSection = (sectionId, setActiveSection) => {
  const section = document.getElementById(sectionId)
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: 'smooth'
    })
    setActiveSection(sectionId)
  }
}

export const animateCounters = (metrics, setCounters) => {
  const duration = 2000
  const startTime = Date.now()

  const animate = () => {
    const now = Date.now()
    const progress = Math.min(1, (now - startTime) / duration)

    setCounters(metrics.map(metric => {
      return Math.floor(progress * metric.value)
    }))

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  animate()
}