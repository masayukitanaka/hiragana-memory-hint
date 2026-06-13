import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { katakanaData } from '../data/katakanaData'
import type { HiraganaData } from '../data/hiraganaData'
import HiraganaDisplay from '../components/HiraganaDisplay'
import HiraganaSidebar from '../components/HiraganaSidebar'
import './Custom.css'

const katakanaByChar = new Map<string, HiraganaData>(
  katakanaData.map((item) => [item.hiragana, item])
)

function KCustom() {
  const [searchParams] = useSearchParams()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const customData = useMemo(() => {
    const source = searchParams.get('s') ?? ''
    return Array.from(source)
      .map((char) => katakanaByChar.get(char))
      .filter((item): item is HiraganaData => item !== undefined)
  }, [searchParams])

  if (customData.length === 0) {
    return (
      <div className="custom-container">
        <div className="custom-empty">
          <h2>No katakana to display</h2>
          <p>
            Add a <code>?s=</code> parameter with katakana characters, e.g.{' '}
            <code>/k_custom?s=アイウエオ</code>
          </p>
        </div>
      </div>
    )
  }

  const safeIndex = Math.min(currentIndex, customData.length - 1)
  const currentData = customData[safeIndex]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % customData.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + customData.length) % customData.length)
  }

  const handleCharacterClick = (index: number) => {
    setCurrentIndex(index)
    setSidebarOpen(false)
  }

  return (
    <div className="custom-container">
      <header className="custom-header">
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
        hiraganaData={customData}
        currentIndex={safeIndex}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onCharacterClick={handleCharacterClick}
      />

      <HiraganaDisplay
        currentData={currentData}
        currentIndex={safeIndex}
        totalCount={customData.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  )
}

export default KCustom
