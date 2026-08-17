import type { HiraganaData } from '../data/hiraganaData'
import './HiraganaSidebar.css'

interface HiraganaSidebarProps {
  hiraganaData: HiraganaData[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onCharacterClick: (index: number) => void
}

function HiraganaSidebar({
  hiraganaData,
  currentIndex,
  isOpen,
  onClose,
  onCharacterClick
}: HiraganaSidebarProps) {
  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <h2>Hiragana Table</h2>
          <div className="hiragana-grid">
            {hiraganaData.map((item, index) => {
              const previous = hiraganaData[index - 1]
              const startsNewRow = previous?.hiragana === 'よ' || previous?.hiragana === 'ヨ'
              return (
                <button
                  key={index}
                  className={`hiragana-item ${index === currentIndex ? 'current' : ''}`}
                  style={startsNewRow ? { gridColumnStart: 1 } : undefined}
                  onClick={() => onCharacterClick(index)}
                >
                  <span className="hiragana-char">{item.hiragana}</span>
                  <span className="romaji-char">{item.romaji}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
        />
      )}
    </>
  )
}

export default HiraganaSidebar
