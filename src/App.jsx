import React, { useState } from 'react';

const Header = ({ setCurrentPage }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo-text">Equinox</h1>
        <nav className="nav-menu">
          <a href="#" className="nav-link" onClick={() => setCurrentPage('home')}>Home</a>
          <a href="#" className="nav-link" onClick={() => setCurrentPage('about')}>About</a>
          <a href="#" className="nav-link" onClick={() => setCurrentPage('help')}>Help</a>
        </nav>
      </div>
      <div className="header-right">
        <a href="#" className="contact-button" onClick={() => setCurrentPage('contact')}>
          Contact Us
        </a>
      </div>
    </header>
  );
};

const Home = () => {
  return (
    <div className="main-content home-content">
      <h2 className="title-text">
        EQUINOX
      </h2>
      <p className="subtitle-text">
        2025
      </p>
      <a href="#" className="explore-button">
        Explore
      </a>
    </div>
  );
};

const About = () => {
  return (
    <div className="main-content about-content">
      <h2 className="title-text">About Equinox</h2>
      <p className="description-text">
        Equinox is a company that is leading the way in robotic automation. We provide innovative solutions to improve efficiency and productivity for businesses of all sizes. Our mission is to harness the power of AI and robotics to create a better future.
      </p>
    </div>
  );
};

const Help = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGeminiQuery = async () => {
    setLoading(true);
    setAnswer('');
    try {
      const userPrompt = `
        You are a helpful assistant for the Equinox website, which is a fictional company.
        Your goal is to provide concise and helpful answers to user questions.
        The website has three main sections: Home, About, and Help.

        ---

        Here is the user's question:
        ${query}

        ---

        Answer the question based on the context of the Equinox website.
        If the question is not related to the website, politely explain that you can only answer questions about Equinox.
      `;

      const payload = {
          contents: [{ parts: [{ text: userPrompt }] }],
      };

      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`API call failed with status: ${response.status}`);
      }

      const result = await response.json();
      const candidate = result.candidates?.[0];
      const generatedText = candidate?.content?.parts?.[0]?.text;

      if (generatedText) {
        setAnswer(generatedText);
      } else {
        setAnswer("Sorry, I couldn't get a response from the API. Please try again later.");
      }

    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setAnswer("Sorry, there was an error processing your request. Please check the console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-content help-content">
      <h2 className="title-text">Help Center</h2>
      <p className="description-text">
        Ask a question about the Equinox website.
      </p>
      <div className="query-section">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., What are your products?"
          className="query-input"
        />
        <button
          onClick={handleGeminiQuery}
          className="query-button"
          disabled={loading}
        >
          {loading ? 'Thinking...' : 'Get an answer ✨'}
        </button>
        {answer && (
          <div className="answer-box">
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-left">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
      </div>
      <div className="footer-right">
        <button className="nav-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>
          </svg>
        </button>
        <button className="nav-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </button>
      </div>
    </footer>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'help':
        return <Help />;
      default:
        return null;
    }
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap');

          html, body {
              margin: 0;
              padding: 0;
              min-height: 100vh;
              /* overflow: hidden; */
          }

          .app-container {
              position: relative;
              min-height: 100vh;
              background-color: #000;
              color: #fff;
              font-family: 'Inter', sans-serif;
              /* overflow-y: auto; */
          }

          .main-wrapper {
              position: relative;
              z-index: 10;
              padding: 1.5rem 2.5rem;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              min-height: 100vh;
          }

          .header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 1rem 0;
          }

          .header-left {
              display: flex;
              align-items: center;
              gap: 2rem;
          }

          .logo-text {
              font-size: 2.25rem;
              font-weight: 700;
              background: linear-gradient(45deg, #facc15, #b45f06);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
          }

          .nav-menu {
              display: none;
              gap: 1.5rem;
              font-size: 1.25rem;
          }

          .nav-link {
              color: #fff;
              text-decoration: none;
              transition: color 0.3s ease;
          }

          .nav-link:hover {
              color: #facc15;
          }

          .contact-button {
              display: none;
              padding: 0.75rem 1.5rem;
              border: 2px solid #facc15;
              color: #facc15;
              font-weight: 600;
              text-decoration: none;
              border-radius: 9999px;
              transition: all 0.3s ease;
          }

          .contact-button:hover {
              background-color: #facc15;
              color: #000;
          }

          .main-content {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
              padding: 3rem 0;
          }

          .home-content {
              min-height: 80vh;
          }

          .title-text {
              font-size: 6rem;
              font-weight: 900;
              background: linear-gradient(45deg, #facc15, #b45f06);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              letter-spacing: 0.025em;
              line-height: 1;
          }

          .subtitle-text {
              margin-top: 1rem;
              font-size: 1.875rem;
              font-weight: 300;
              color: #9ca3af;
          }

          .explore-button {
              margin-top: 2rem;
              padding: 1rem 2.5rem;
              border: 2px solid #facc15;
              color: #facc15;
              font-weight: 600;
              text-decoration: none;
              border-radius: 9999px;
              transition: all 0.3s ease;
          }

          .explore-button:hover {
              background-color: #facc15;
              color: #000;
          }

          .about-content, .help-content {
              min-height: 80vh;
          }

          .description-text {
              margin-top: 1.5rem;
              font-size: 1.25rem;
              color: #9ca3af;
              max-width: 42rem;
              margin-left: auto;
              margin-right: auto;
          }

          .query-section {
              margin-top: 2rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 100%;
              max-width: 32rem;
          }

          .query-input {
              width: 100%;
              padding: 0.75rem 1.5rem;
              border-radius: 9999px;
              background-color: #1f2937;
              color: #e5e7eb;
              border: 1px solid #4b5563;
              outline: none;
              transition: all 0.3s ease;
          }

          .query-input:focus {
              border-color: #facc15;
              box-shadow: 0 0 0 2px #facc15;
          }

          .query-button {
              margin-top: 1rem;
              padding: 1rem 2.5rem;
              border: 2px solid #facc15;
              color: #facc15;
              font-weight: 600;
              border-radius: 9999px;
              background: none;
              cursor: pointer;
              transition: all 0.3s ease;
          }

          .query-button:disabled {
              opacity: 0.5;
              cursor: not-allowed;
          }

          .query-button:hover:not(:disabled) {
              background-color: #facc15;
              color: #000;
          }

          .answer-box {
              margin-top: 2rem;
              padding: 1.5rem;
              background-color: #111827;
              border-radius: 1rem;
              width: 100%;
              text-align: left;
              color: #e5e7eb;
          }

          .footer-section {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              padding: 1rem 0;
              width: 100%;
          }

          .footer-left {
              display: flex;
              gap: 1.5rem;
              margin-bottom: 1rem;
          }

          .social-icon {
              color: #facc15;
              transition: color 0.3s ease;
          }

          .social-icon:hover {
              color: #fff;
          }

          .footer-right {
              display: flex;
              gap: 1rem;
          }

          .nav-arrow {
              background: none;
              border: none;
              cursor: pointer;
              color: #9ca3af;
              transition: color 0.3s ease;
          }

          .nav-arrow:hover {
              color: #facc15;
          }

          @media (min-width: 640px) {
              .nav-menu {
                  display: flex;
              }
              .contact-button {
                  display: inline-block;
              }
              .title-text {
                  font-size: 8rem;
              }
              .footer-section {
                  flex-direction: row;
                  margin-bottom: 0;
              }
              .footer-left {
                  margin-bottom: 0;
              }
          }

          @media (min-width: 1024px) {
              .main-wrapper {
                  padding: 3rem;
              }
              .logo-text {
                  font-size: 3rem;
              }
              .title-text {
                  font-size: 10rem;
              }
          }

          .background-wrapper {
              position: absolute;
              inset: 0;
              z-index: 0;
          }

          .background-svg {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 100%;
              height: 100%;
              max-width: 56rem;
              max-height: 56rem;
              opacity: 0.5;
              filter: blur(4px);
          }

          .background-light {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 12rem;
              height: 12rem;
              background-color: #facc15;
              border-radius: 9999px;
              filter: blur(40px);
              opacity: 0.3;
              animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          @keyframes pulse {
              50% {
                  opacity: .5;
              }
          }
        `}
      </style>
      <div className="app-container">
        <main className="main-wrapper">
          <Header setCurrentPage={setCurrentPage} />
          {renderContent()}
          {currentPage === 'home' && <Footer />}
        </main>
        <div className="background-wrapper">
          <div className="background-light"></div>
        </div>
      </div>
    </>
  );
};

export default App;
