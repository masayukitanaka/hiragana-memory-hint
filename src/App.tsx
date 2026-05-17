import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">ひらがな Memory Hint</h1>
        <p className="subtitle">Learn Hiragana with Visual Memory Aids</p>
      </header>

      <main className="main-content">
        <section className="cta-section">
          <h2>Ready to Start?</h2>
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
