import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { hiraganaData } from '../data/hiraganaData'
import type { HiraganaData } from '../data/hiraganaData'
import HiraganaDisplay from '../components/HiraganaDisplay'
import HiraganaSidebar from '../components/HiraganaSidebar'
import './Custom.css'

// Map each hiragana character to its data entry for quick lookup.
const hiraganaByChar = new Map<string, HiraganaData>(
  hiraganaData.map((item) => [item.hiragana, item])
)

function Custom() {
  const [searchParams] = useSearchParams()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Build the ordered list from ?s=... — each matching hiragana in order.
  const customData = useMemo(() => {
    const source = searchParams.get('s') ?? ''
    return Array.from(source)
      .map((char) => hiraganaByChar.get(char))
      .filter((item): item is HiraganaData => item !== undefined)
  }, [searchParams])

  if (customData.length === 0) {
    return (
      <div className="custom-container">
        <div className="custom-empty">
          <h2>No hiragana to display</h2>
          <p>
            Add a <code>?s=</code> parameter with hiragana characters, e.g.{' '}
            <code>/custom?s=あいうえお</code>
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

export default Custom
