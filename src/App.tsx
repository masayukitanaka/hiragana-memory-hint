import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate()
  const [customText, setCustomText] = useState('')
  const [kCustomText, setKCustomText] = useState('')

  const handleCustomStart = () => {
    const trimmed = customText.trim()
    if (!trimmed) return
    navigate(`/custom?s=${encodeURIComponent(trimmed)}`)
  }

  const handleKCustomStart = () => {
    const trimmed = kCustomText.trim()
    if (!trimmed) return
    navigate(`/k_custom?s=${encodeURIComponent(trimmed)}`)
  }

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">ひらがな・カタカナ Memory Hint</h1>
        <p className="subtitle">Learn Hiragana & Katakana with Visual Memory Aids</p>
      </header>

      <main className="main-content">
        <section className="cta-section">
          <h2>ひらがな</h2>
          <p>Choose your learning mode:</p>

          <div className="learning-modes">
            <Link to="/one-by-one" className="mode-card">
              <div className="mode-icon">📚</div>
              <h3>One by One</h3>
              <p>Learn hiragana in order from あ to ん. Perfect for beginners who want a structured approach.</p>
            </Link>

            <Link to="/random" className="mode-card">
              <div className="mode-icon">🎲</div>
              <h3>Random Practice</h3>
              <p>Practice with random characters to test your memory and keep things interesting!</p>
            </Link>

            <div className="mode-card custom-card">
              <div className="mode-icon">✏️</div>
              <h3>Custom</h3>
              <textarea
                className="custom-textarea"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Type the hiragana you want to practice (e.g. あいうえお). They appear in the order you enter them. Unsupported characters are skipped automatically."
                rows={4}
              />
              <button
                type="button"
                className="custom-button"
                onClick={handleCustomStart}
                disabled={!customText.trim()}
              >
                Start →
              </button>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>カタカナ</h2>
          <p>Choose your learning mode:</p>

          <div className="learning-modes">
            <Link to="/k_one_by_one" className="mode-card">
              <div className="mode-icon">📚</div>
              <h3>One by One</h3>
              <p>Learn katakana in order from ア to ン. Perfect for beginners who want a structured approach.</p>
            </Link>

            <Link to="/k_random" className="mode-card">
              <div className="mode-icon">🎲</div>
              <h3>Random Practice</h3>
              <p>Practice with random characters to test your memory and keep things interesting!</p>
            </Link>

            <div className="mode-card custom-card">
              <div className="mode-icon">✏️</div>
              <h3>Custom</h3>
              <textarea
                className="custom-textarea"
                value={kCustomText}
                onChange={(e) => setKCustomText(e.target.value)}
                placeholder="Type the katakana you want to practice (e.g. アイウエオ). They appear in the order you enter them. Unsupported characters are skipped automatically."
                rows={4}
              />
              <button
                type="button"
                className="custom-button"
                onClick={handleKCustomStart}
                disabled={!kCustomText.trim()}
              >
                Start →
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Learn Japanese step by step | がんばって!</p>
        <p className="credit">
          Images and materials from{' '}
          <a
            href="https://apps.apple.com/jp/app/hiragana-memory-hint-english/id1023654862"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hiragana Memory Hint (iOS App)
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
