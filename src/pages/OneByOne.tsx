import { useState } from 'react'
import { hiraganaData } from '../data/hiraganaData'
import HiraganaDisplay from '../components/HiraganaDisplay'
import HiraganaSidebar from '../components/HiraganaSidebar'
import './OneByOne.css'

function OneByOne() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const currentData = hiraganaData[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % hiraganaData.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + hiraganaData.length) % hiraganaData.length)
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

export default OneByOne
