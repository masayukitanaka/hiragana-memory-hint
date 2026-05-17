import { useState, useEffect } from 'react'
import { hiraganaData } from '../data/hiraganaData'
import HiraganaDisplay from '../components/HiraganaDisplay'
import HiraganaSidebar from '../components/HiraganaSidebar'
import './Random.css'

function Random() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Initialize with random index
  useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * hiraganaData.length))
  }, [])

  const currentData = hiraganaData[currentIndex]

  const handleNext = () => {
    // Get random index different from current
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * hiraganaData.length)
    } while (newIndex === currentIndex && hiraganaData.length > 1)
    setCurrentIndex(newIndex)
  }

  const handlePrevious = () => {
    // Get random index different from current
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * hiraganaData.length)
    } while (newIndex === currentIndex && hiraganaData.length > 1)
    setCurrentIndex(newIndex)
  }

  const handleCharacterClick = (index: number) => {
    setCurrentIndex(index)
    setSidebarOpen(false)
  }

  return (
    <div className="random-container">
      <header className="random-header">
        <button
          className="hamburger-menu"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <HiraganaSidebar
        hiraganaData={hiraganaData}
        currentIndex={currentIndex}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onCharacterClick={handleCharacterClick}
      />

      <HiraganaDisplay
        currentData={currentData}
        currentIndex={currentIndex}
        totalCount={hiraganaData.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  )
}

export default Random
