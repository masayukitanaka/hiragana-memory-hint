import { useState } from 'react'
import type { HiraganaData } from '../data/hiraganaData'
import './HiraganaDisplay.css'

interface HiraganaDisplayProps {
  currentData: HiraganaData
  currentIndex: number
  totalCount: number
  onNext: () => void
  onPrevious: () => void
}

function HiraganaDisplay({
  currentData,
  currentIndex,
  totalCount,
  onNext,
  onPrevious
}: HiraganaDisplayProps) {
  const [showPronunciation, setShowPronunciation] = useState(false)
  const [showPhrase, setShowPhrase] = useState(false)

  const handleNext = () => {
    setShowPronunciation(false)
    setShowPhrase(false)
    onNext()
  }

  const handlePrevious = () => {
    setShowPronunciation(false)
    setShowPhrase(false)
    onPrevious()
  }

  return (
    <main className="hiragana-display-main">
      <div className="image-display">
        <img
          src={`/image/${currentData.filename}`}
          alt={`Memory hint for ${currentData.hiragana}`}
          className="hiragana-image"
        />
      </div>

      <div className="info-cards">
        <div
          className={`info-card ${showPronunciation ? 'revealed' : ''}`}
          onClick={() => setShowPronunciation(!showPronunciation)}
        >
          <div className="card-front">
            <span className="card-label">Pronunciation</span>
            <span className="card-icon">👂</span>
          </div>
          <div className="card-back">
            <span className="pronunciation">{currentData.romaji}</span>
            <span className="pronunciation-hiragana">{currentData.hiragana}</span>
          </div>
        </div>

        <div
          className={`info-card ${showPhrase ? 'revealed' : ''}`}
          onClick={() => setShowPhrase(!showPhrase)}
        >
          <div className="card-front">
            <span className="card-label">Memory Hint</span>
            <span className="card-icon">💡</span>
          </div>
          <div className="card-back">
            <span className="phrase">{currentData.phrase}</span>
          </div>
        </div>
      </div>

      <div className="navigation-controls">
        <button
          className="nav-button prev-button"
          onClick={handlePrevious}
        >
          ← Previous
        </button>
        <span className="progress-indicator">
          {currentIndex + 1} / {totalCount}
        </span>
        <button
          className="nav-button next-button"
          onClick={handleNext}
        >
          Next →
        </button>
      </div>
    </main>
  )
}

export default HiraganaDisplay
