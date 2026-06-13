import { useState, useEffect } from 'react'
import { katakanaData } from '../data/katakanaData'
import HiraganaDisplay from '../components/HiraganaDisplay'
import HiraganaSidebar from '../components/HiraganaSidebar'
import './Random.css'

function KRandom() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * katakanaData.length))
  }, [])

  const currentData = katakanaData[currentIndex]

  const handleNext = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * katakanaData.length)
    } while (newIndex === currentIndex && katakanaData.length > 1)
    setCurrentIndex(newIndex)
  }

  const handlePrevious = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * katakanaData.length)
    } while (newIndex === currentIndex && katakanaData.length > 1)
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
        hiraganaData={katakanaData}
        currentIndex={currentIndex}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onCharacterClick={handleCharacterClick}
      />

      <HiraganaDisplay
        currentData={currentData}
        currentIndex={currentIndex}
        totalCount={katakanaData.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  )
}

export default KRandom
