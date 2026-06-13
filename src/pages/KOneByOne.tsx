import { useState } from 'react'
import { katakanaData } from '../data/katakanaData'
import HiraganaDisplay from '../components/HiraganaDisplay'
import HiraganaSidebar from '../components/HiraganaSidebar'
import './OneByOne.css'

function KOneByOne() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const currentData = katakanaData[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % katakanaData.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + katakanaData.length) % katakanaData.length)
  }

  const handleCharacterClick = (index: number) => {
    setCurrentIndex(index)
    setSidebarOpen(false)
  }

  return (
    <div className="one-by-one-container">
      <header className="one-by-one-header">
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

export default KOneByOne
