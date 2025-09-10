import React, { useState } from 'react';

const Header = ({ setCurrentPage, toggleTheme, theme }) => {
    return (
        <header className="header">
            <div className="header-left">
                <h1 className="logo-text">Equinox</h1>
                <nav className="nav-menu">
                    <a href="#" className="nav-link" onClick={() => setCurrentPage('home')}>Home</a>
                    <a href="#" className="nav-link" onClick={() => setCurrentPage('events')}>Events</a>
                    <a href="#" className="nav-link" onClick={() => setCurrentPage('about')}>About</a>
                    <a href="#" className="nav-link" onClick={() => setCurrentPage('help')}>Help</a>
                </nav>
            </div>
            <div className="header-right">
                <a href="#" className="contact-button" onClick={() => setCurrentPage('contact')}>
                    Contact Us
                </a>
                <button
                    onClick={toggleTheme}
                    className="theme-toggle-button"
                    aria-label="Toggle theme"
                >
                    {theme === 'gold' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="5"/>
                          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                        </svg>
                    )}
                </button>
            </div>
        </header>
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
        </footer>
    );
};

const Home = ({ setCurrentPage, theme }) => {
    const titleGradient = theme === 'gold' ? 'linear-gradient(45deg, #facc15, #b45f06)' : 'linear-gradient(45deg, #ef4444, #7f1d1d)';
    const exploreButtonColor = theme === 'gold' ? '#facc15' : '#ef4444';

    return (
        <div className="main-content home-content">
            <h2 className="title-text animate-fade-in-up" style={{ backgroundImage: titleGradient }}>
                EQUINOX
            </h2>
            <p className="subtitle-text animate-fade-in-up delay-200" style={{ color: exploreButtonColor }}>
                2025
            </p>
            <a href="#" className="explore-button animate-fade-in-up delay-400" onClick={() => setCurrentPage('events')} style={{ borderColor: exploreButtonColor, color: exploreButtonColor }}>
                Explore
            </a>
        </div>
    );
};

const Events = ({ showMessage, setCurrentPage, theme }) => {
    const eventsData = [
        {
            title: "Event A: 1",
            date: "March 15, 2025",
            description: "...",
            image: "https://placehold.co/600x400/1e293b/94a3b8?text=Event+A"
        },
        {
            title: "Event B: 2",
            date: "April 22, 2025",
            description: "...",
            image: "https://placehold.co/600x400/1e293b/94a3b8?text=Event+B"
        },
        {
            title: "Event C: 3",
            date: "May 10, 2025",
            description: "...",
            image: "https://placehold.co/600x400/1e293b/94a3b8?text=Event+C"
        },
        {
            title: "Event D: 4",
            date: "June 5, 2025",
            description: "...",
            image: "https://placehold.co/600x400/1e293b/94a3b8?text=Event+D"
        },
        {
            title: "Event E: 5",
            date: "July 12, 2025",
            description: "...",
            image: "https://placehold.co/600x400/1e293b/94a3b8?text=Event+E"
        }
    ];

    const viewMoreButtonColor = theme === 'gold' ? '#facc15' : '#ef4444';
    const eventTitleColor = theme === 'gold' ? '#facc15' : '#ef4444';

    return (
        <>
            <div className="main-content">
                <h2 className="title-text">Upcoming Events</h2>
                <p className="description-text">
                    ...
                </p>

                <div className="events-grid">
                    {eventsData.map((event, index) => (
                        <div key={index} className="event-card">
                            <img src={event.image} alt={event.title} className="event-image" />
                            <div className="event-info">
                                <h3 className="event-title" style={{ color: eventTitleColor }}>{event.title}</h3>
                                <p className="event-date">{event.date}</p>
                                <p className="event-description">{event.description}</p>
                                <button
                                    className="view-more-button"
                                    onClick={() => showMessage(`Viewing more details for: ${event.title}!`)}
                                    style={{ borderColor: viewMoreButtonColor, color: viewMoreButtonColor }}
                                >
                                    View More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="sticky-bar">
                <button
                    id="registerButton"
                    className="register-button"
                    onClick={() => setCurrentPage('registration')}
                >
                    Register Now
                </button>
            </div>
        </>
    );
};

const About = () => {
    return (
        <div className="main-content about-content">
            <h2 className="title-text">About Equinox</h2>
            <p className="description-text">
                ...
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
                You are a helpful assistant for the Equinox website.
                Your goal is to provide concise and helpful answers to user questions.

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
                ...
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

const Contact = () => {
    return (
        <div className="main-content contact-content">
            <h2 className="title-text">Contact Us</h2>
            <p className="description-text">
                ...
            </p>
        </div>
    );
};

const Registration = ({ showMessage, setCurrentPage, theme }) => {
    const handleRegister = (type) => {
        showMessage(`You chose to register as a/an ${type}.`);
        setCurrentPage('events'); // Return to events page after a selection is made
    };
    
    const institutionButtonBg = theme === 'gold' ? '#facc15' : '#ef4444';
    const institutionButtonHoverBg = theme === 'gold' ? '#eab308' : '#dc2626';

    const individualButtonBg = theme === 'gold' ? 'white' : '#e5e7eb';
    const individualButtonHoverBg = theme === 'gold' ? '#e5e7eb' : '#d1d5db';
    const individualButtonText = theme === 'gold' ? 'black' : 'black';

    return (
        <div className="main-content registration-content">
            <h2 className="title-text">Register</h2>
            <p className="description-text">Are you registering on behalf of an institution or as an individual?</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8 w-full max-w-sm">
                <button
                    className="w-full text-black font-bold py-3 rounded-full transition-colors"
                    style={{ backgroundColor: institutionButtonBg, '--hover-bg': institutionButtonHoverBg }}
                    onClick={() => handleRegister('Institution')}
                >
                    Institution
                </button>
                <button
                    className="w-full text-black font-bold py-3 rounded-full transition-colors"
                    style={{ backgroundColor: individualButtonBg, color: individualButtonText, '--hover-bg': individualButtonHoverBg }}
                    onClick={() => handleRegister('Individual')}
                >
                    Individual
                </button>
            </div>
        </div>
    );
};

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [theme, setTheme] = useState('gold');
    const [message, setMessage] = useState('');
    const [isMessageVisible, setIsMessageVisible] = useState(false);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'gold' ? 'red' : 'gold');
    };

    const showMessage = (msg) => {
        setMessage(msg);
        setIsMessageVisible(true);
        setTimeout(() => {
            setIsMessageVisible(false);
        }, 3000);
    };

    const renderContent = () => {
        switch (currentPage) {
            case 'home':
                return <Home setCurrentPage={setCurrentPage} theme={theme} />;
            case 'events':
                return <Events showMessage={showMessage} setCurrentPage={setCurrentPage} theme={theme} />;
            case 'registration':
                return <Registration showMessage={showMessage} setCurrentPage={setCurrentPage} theme={theme} />;
            case 'about':
                return <About />;
            case 'help':
                return <Help />;
            case 'contact':
                return <Contact />;
            default:
                return null;
        }
    };

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;600;700;800;900&display=swap');

                    html, body {
                        margin: 0;
                        padding: 0;
                        min-height: 100vh;
                        background-color: #000;
                    }

                    .app-container {
                        position: relative;
                        min-height: 100vh;
                        color: #fff;
                        font-family: 'Inter', sans-serif;
                        background-color: #000;
                    }
                    
                    /* Theme-specific styles using a CSS variable for the active color */
                    .theme-gold .nav-link:hover, .theme-gold .social-icon:hover {
                        color: #facc15;
                    }
                    
                    .theme-red .nav-link:hover, .theme-red .social-icon:hover {
                        color: #ef4444;
                    }
                    
                    .theme-red .logo-text,
                    .theme-red .title-text {
                        background: linear-gradient(45deg, #ef4444, #7f1d1d);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                    .theme-red .explore-button,
                    .theme-red .contact-button,
                    .theme-red .view-more-button {
                        border-color: #ef4444;
                        color: #ef4444;
                    }

                    .theme-red .explore-button:hover,
                    .theme-red .contact-button:hover,
                    .theme-red .view-more-button:hover {
                        background-color: #ef4444;
                        color: #000;
                    }

                    .theme-red .register-button {
                        background-color: #ef4444;
                        color: #000;
                    }
                    
                    .theme-red .register-button:hover {
                        background-color: #dc2626;
                    }
                    
                    .theme-red .view-more-button {
                        box-shadow: 0 2px 5px rgba(239, 68, 68, 0.3);
                    }

                    .theme-red .view-more-button:hover {
                        box-shadow: 0 5px 15px rgba(239, 68, 68, 0.5);
                    }
                    .theme-red .register-button {
                        box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
                    }
                    .theme-red .register-button:hover {
                        box-shadow: 0 6px 20px rgba(239, 68, 68, 0.6);
                    }
                    .theme-red .contact-button:hover {
                        box-shadow: 0 0 15px rgba(239, 68, 68, 0.6);
                    }

                    .theme-red .subtitle-text,
                    .theme-red .event-title,
                    .theme-red .social-icon,
                    .theme-red .background-light {
                        color: #ef4444;
                    }
                    
                    .theme-red .background-light {
                        background-color: #ef4444;
                    }
                    
                    .theme-toggle-button {
                        background: none;
                        border: none;
                        cursor: pointer;
                        color: #facc15;
                        transition: color 0.3s ease;
                        margin-left: 1rem;
                    }

                    .theme-toggle-button:hover {
                        color: white;
                    }

                    .message-box {
                        position: fixed;
                        top: 20px;
                        left: 50%;
                        transform: translateX(-50%);
                        padding: 12px 24px;
                        border-radius: 9999px;
                        background-color: #333;
                        color: white;
                        font-size: 0.875rem;
                        font-weight: 500;
                        z-index: 1000;
                        opacity: 0;
                        transition: opacity 0.3s ease-in-out;
                        pointer-events: none;
                    }
                    .message-box.show {
                        opacity: 1;
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
                        animation: slide-down 0.5s ease-out forwards;
                    }

                    .header-left {
                        display: flex;
                        align-items: center;
                        gap: 2rem;
                    }

                    .logo-text {
                        font-family: 'Anton', sans-serif;
                        font-size: 1.5rem;
                        font-weight: 700;
                        background: linear-gradient(45deg, #facc15, #b45f06);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        line-height: 1.2;
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
                        box-shadow: 0 0 15px rgba(250, 204, 21, 0.6);
                        animation: button-pulse 1s infinite;
                    }
                    
                    @keyframes button-pulse {
                      0% { box-shadow: 0 0 10px rgba(250, 204, 21, 0.6); }
                      50% { box-shadow: 0 0 20px rgba(250, 204, 21, 0.8); }
                      100% { box-shadow: 0 0 10px rgba(250, 204, 21, 0.6); }
                    }

                    .main-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        padding: 3rem 0;
                        animation: fade-in 1s ease-out forwards;
                    }
                    
                    /* Specific styles for the events page */
                    .events-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                        gap: 2rem;
                        margin-top: 3rem;
                        max-width: 60rem;
                        width: 100%;
                    }

                    .event-card {
                        background-color: #111827;
                        border-radius: 1rem;
                        overflow: hidden;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
                    }

                    .event-card:hover {
                        transform: translateY(-5px) scale(1.02);
                        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
                        background-color: #1f2937;
                    }

                    .event-image {
                        width: 100%;
                        height: 200px;
                        object-fit: cover;
                    }

                    .event-info {
                        padding: 1.5rem;
                        text-align: left;
                    }

                    .event-title {
                        font-size: 1.5rem;
                        font-weight: 700;
                        color: #facc15;
                        margin-bottom: 0.5rem;
                    }

                    .event-date {
                        font-size: 0.875rem;
                        color: #9ca3af;
                        margin-bottom: 1rem;
                    }

                    .event-description {
                        font-size: 1rem;
                        color: #e5e7eb;
                    }

                    .view-more-button {
                        width: 100%;
                        padding: 0.75rem 2rem;
                        background-color: transparent;
                        color: #facc15;
                        font-weight: 700;
                        border: 2px solid #facc15;
                        border-radius: 9999px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        margin-top: 1rem;
                        box-shadow: 0 2px 5px rgba(250, 204, 21, 0.3);
                    }

                    .view-more-button:hover {
                        background-color: #facc15;
                        color: #000;
                        transform: scale(1.05);
                        box-shadow: 0 5px 15px rgba(250, 204, 21, 0.5);
                    }
                    
                    .sticky-bar {
                        position: fixed;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        background-color: rgba(0, 0, 0, 0.8);
                        backdrop-filter: blur(10px);
                        padding: 1rem 2rem;
                        display: flex;
                        justify-content: center;
                        box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
                        z-index: 100;
                        animation: slide-up 0.5s ease-out forwards;
                    }

                    .register-button {
                        padding: 0.75rem 2rem;
                        background-color: #facc15;
                        color: #000;
                        font-weight: 700;
                        border: none;
                        border-radius: 9999px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        width: 100%;
                        max-width: 400px;
                        box-shadow: 0 4px 15px rgba(250, 204, 21, 0.4);
                        animation: button-shimmer 2s infinite linear;
                    }
                    
                    @keyframes button-shimmer {
                        0% { background-position: -200% 0; }
                        100% { background-position: 200% 0; }
                    }

                    .register-button:hover {
                        background-color: #eab308;
                        transform: scale(1.02);
                        box-shadow: 0 6px 20px rgba(250, 204, 21, 0.6);
                    }

                    /* End of specific events styles */

                    .home-content, .about-content, .help-content, .contact-content, .registration-content {
                        min-height: 80vh;
                    }

                    .title-text {
                        font-family: 'Anton', sans-serif;
                        font-size: 6rem;
                        font-weight: 900;
                        background: linear-gradient(45deg, #facc15, #b45f06);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        letter-spacing: 0.025em;
                        line-height: 1;
                    }

                    .subtitle-text {
                        font-family: 'Anton', sans-serif;
                        font-size: 4rem;
                        font-weight: 300;
                        color: #9ca3af;
                        margin-top: -2.5rem;
                        letter-spacing: 0.05em;
                    }
                    
                    @keyframes fade-in-up {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .animate-fade-in-up {
                        animation: fade-in-up 0.6s ease-out forwards;
                    }

                    .delay-200 {
                        animation-delay: 0.2s;
                    }

                    .delay-400 {
                        animation-delay: 0.4s;
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
                        box-shadow: 0 4px 10px rgba(250, 204, 21, 0.3);
                    }

                    .explore-button:hover {
                        background-color: #facc15;
                        color: #000;
                        transform: translateY(-3px);
                        box-shadow: 0 8px 20px rgba(250, 204, 21, 0.5);
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
                        box-shadow: 0 4px 10px rgba(250, 204, 21, 0.3);
                    }

                    .query-button:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }

                    .query-button:hover:not(:disabled) {
                        background-color: #facc15;
                        color: #000;
                        transform: translateY(-3px);
                        box-shadow: 0 8px 20px rgba(250, 204, 21, 0.5);
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
                        animation: slide-up 0.5s ease-out forwards;
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
                    
                    @keyframes slide-down {
                        from { transform: translateY(-100%); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }

                    @keyframes slide-up {
                        from { transform: translateY(100%); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }

                    @keyframes fade-in {
                      from { opacity: 0; }
                      to { opacity: 1; }
                    }
                    
                    /* Theme-specific styles using a CSS variable for the active color */
                    .theme-gold .nav-link:hover, .theme-gold .social-icon:hover {
                        color: #facc15;
                    }
                    
                    .theme-red .nav-link:hover, .theme-red .social-icon:hover {
                        color: #ef4444;
                    }
                    
                    .theme-red .logo-text,
                    .theme-red .title-text {
                        background: linear-gradient(45deg, #ef4444, #7f1d1d);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                    .theme-red .explore-button,
                    .theme-red .contact-button,
                    .theme-red .view-more-button {
                        border-color: #ef4444;
                        color: #ef4444;
                    }

                    .theme-red .explore-button:hover,
                    .theme-red .contact-button:hover,
                    .theme-red .view-more-button:hover {
                        background-color: #ef4444;
                        color: #000;
                    }

                    .theme-red .register-button {
                        background-color: #ef4444;
                        color: #000;
                    }
                    
                    .theme-red .register-button:hover {
                        background-color: #dc2626;
                    }
                    
                    .theme-red .view-more-button {
                        box-shadow: 0 2px 5px rgba(239, 68, 68, 0.3);
                    }

                    .theme-red .view-more-button:hover {
                        box-shadow: 0 5px 15px rgba(239, 68, 68, 0.5);
                    }
                    .theme-red .register-button {
                        box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
                    }
                    .theme-red .register-button:hover {
                        box-shadow: 0 6px 20px rgba(239, 68, 68, 0.6);
                    }
                    .theme-red .contact-button:hover {
                        box-shadow: 0 0 15px rgba(239, 68, 68, 0.6);
                    }

                    .theme-red .subtitle-text,
                    .theme-red .event-title,
                    .theme-red .social-icon,
                    .theme-red .background-light {
                        color: #ef4444;
                    }
                    
                    .theme-red .background-light {
                        background-color: #ef4444;
                    }
                    
                    .theme-toggle-button {
                        background: none;
                        border: none;
                        cursor: pointer;
                        color: #facc15;
                        transition: color 0.3s ease;
                        margin-left: 1rem;
                    }

                    .theme-toggle-button:hover {
                        color: white;
                    }

                    .message-box {
                        position: fixed;
                        top: 20px;
                        left: 50%;
                        transform: translateX(-50%);
                        padding: 12px 24px;
                        border-radius: 9999px;
                        background-color: #333;
                        color: white;
                        font-size: 0.875rem;
                        font-weight: 500;
                        z-index: 1000;
                        opacity: 0;
                        transition: opacity 0.3s ease-in-out;
                        pointer-events: none;
                    }
                    .message-box.show {
                        opacity: 1;
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
                        animation: slide-down 0.5s ease-out forwards;
                    }

                    .header-left {
                        display: flex;
                        align-items: center;
                        gap: 2rem;
                    }

                    .logo-text {
                        font-family: 'Anton', sans-serif;
                        font-size: 1.5rem;
                        font-weight: 700;
                        background: linear-gradient(45deg, #facc15, #b45f06);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        line-height: 1.2;
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
                        box-shadow: 0 0 15px rgba(250, 204, 21, 0.6);
                        animation: button-pulse 1s infinite;
                    }
                    
                    @keyframes button-pulse {
                      0% { box-shadow: 0 0 10px rgba(250, 204, 21, 0.6); }
                      50% { box-shadow: 0 0 20px rgba(250, 204, 21, 0.8); }
                      100% { box-shadow: 0 0 10px rgba(250, 204, 21, 0.6); }
                    }

                    .main-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        padding: 3rem 0;
                        animation: fade-in 1s ease-out forwards;
                    }
                    
                    /* Specific styles for the events page */
                    .events-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                        gap: 2rem;
                        margin-top: 3rem;
                        max-width: 60rem;
                        width: 100%;
                    }

                    .event-card {
                        background-color: #111827;
                        border-radius: 1rem;
                        overflow: hidden;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
                    }

                    .event-card:hover {
                        transform: translateY(-5px) scale(1.02);
                        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
                        background-color: #1f2937;
                    }

                    .event-image {
                        width: 100%;
                        height: 200px;
                        object-fit: cover;
                    }

                    .event-info {
                        padding: 1.5rem;
                        text-align: left;
                    }

                    .event-title {
                        font-size: 1.5rem;
                        font-weight: 700;
                        color: #facc15;
                        margin-bottom: 0.5rem;
                    }

                    .event-date {
                        font-size: 0.875rem;
                        color: #9ca3af;
                        margin-bottom: 1rem;
                    }

                    .event-description {
                        font-size: 1rem;
                        color: #e5e7eb;
                    }

                    .view-more-button {
                        width: 100%;
                        padding: 0.75rem 2rem;
                        background-color: transparent;
                        color: #facc15;
                        font-weight: 700;
                        border: 2px solid #facc15;
                        border-radius: 9999px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        margin-top: 1rem;
                        box-shadow: 0 2px 5px rgba(250, 204, 21, 0.3);
                    }

                    .view-more-button:hover {
                        background-color: #facc15;
                        color: #000;
                        transform: scale(1.05);
                        box-shadow: 0 5px 15px rgba(250, 204, 21, 0.5);
                    }
                    
                    .sticky-bar {
                        position: fixed;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        background-color: rgba(0, 0, 0, 0.8);
                        backdrop-filter: blur(10px);
                        padding: 1rem 2rem;
                        display: flex;
                        justify-content: center;
                        box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
                        z-index: 100;
                        animation: slide-up 0.5s ease-out forwards;
                    }

                    .register-button {
                        padding: 0.75rem 2rem;
                        background-color: #facc15;
                        color: #000;
                        font-weight: 700;
                        border: none;
                        border-radius: 9999px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        width: 100%;
                        max-width: 400px;
                        box-shadow: 0 4px 15px rgba(250, 204, 21, 0.4);
                        animation: button-shimmer 2s infinite linear;
                    }
                    
                    @keyframes button-shimmer {
                        0% { background-position: -200% 0; }
                        100% { background-position: 200% 0; }
                    }

                    .register-button:hover {
                        background-color: #eab308;
                        transform: scale(1.02);
                        box-shadow: 0 6px 20px rgba(250, 204, 21, 0.6);
                    }

                    /* End of specific events styles */

                    .home-content, .about-content, .help-content, .contact-content, .registration-content {
                        min-height: 80vh;
                    }

                    .title-text {
                        font-family: 'Anton', sans-serif;
                        font-size: 6rem;
                        font-weight: 900;
                        background: linear-gradient(45deg, #facc15, #b45f06);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        letter-spacing: 0.025em;
                        line-height: 1;
                    }

                    .subtitle-text {
                        font-family: 'Anton', sans-serif;
                        font-size: 4rem;
                        font-weight: 300;
                        color: #9ca3af;
                        margin-top: -2.5rem;
                        letter-spacing: 0.05em;
                    }
                    
                    @keyframes fade-in-up {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .animate-fade-in-up {
                        animation: fade-in-up 0.6s ease-out forwards;
                    }

                    .delay-200 {
                        animation-delay: 0.2s;
                    }

                    .delay-400 {
                        animation-delay: 0.4s;
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
                        box-shadow: 0 4px 10px rgba(250, 204, 21, 0.3);
                    }

                    .explore-button:hover {
                        background-color: #facc15;
                        color: #000;
                        transform: translateY(-3px);
                        box-shadow: 0 8px 20px rgba(250, 204, 21, 0.5);
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
                        box-shadow: 0 4px 10px rgba(250, 204, 21, 0.3);
                    }

                    .query-button:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }

                    .query-button:hover:not(:disabled) {
                        background-color: #facc15;
                        color: #000;
                        transform: translateY(-3px);
                        box-shadow: 0 8px 20px rgba(250, 204, 21, 0.5);
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
                        animation: slide-up 0.5s ease-out forwards;
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
                    
                    @keyframes slide-down {
                        from { transform: translateY(-100%); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }

                    @keyframes slide-up {
                        from { transform: translateY(100%); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }

                    @keyframes fade-in {
                      from { opacity: 0; }
                      to { opacity: 1; }
                    }
                    
                    /* Theme-specific styles using a CSS variable for the active color */
                    .theme-gold .nav-link:hover, .theme-gold .social-icon:hover {
                        color: #facc15;
                    }
                    
                    .theme-red .nav-link:hover, .theme-red .social-icon:hover {
                        color: #ef4444;
                    }
                    
                    .theme-red .logo-text,
                    .theme-red .title-text {
                        background: linear-gradient(45deg, #ef4444, #7f1d1d);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                    .theme-red .explore-button,
                    .theme-red .contact-button,
                    .theme-red .view-more-button {
                        border-color: #ef4444;
                        color: #ef4444;
                    }

                    .theme-red .explore-button:hover,
                    .theme-red .contact-button:hover,
                    .theme-red .view-more-button:hover {
                        background-color: #ef4444;
                        color: #000;
                    }

                    .theme-red .register-button {
                        background-color: #ef4444;
                        color: #000;
                    }
                    
                    .theme-red .register-button:hover {
                        background-color: #dc2626;
                    }
                    
                    .theme-red .view-more-button {
                        box-shadow: 0 2px 5px rgba(239, 68, 68, 0.3);
                    }

                    .theme-red .view-more-button:hover {
                        box-shadow: 0 5px 15px rgba(239, 68, 68, 0.5);
                    }
                    .theme-red .register-button {
                        box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
                    }
                    .theme-red .register-button:hover {
                        box-shadow: 0 6px 20px rgba(239, 68, 68, 0.6);
                    }
                    .theme-red .contact-button:hover {
                        box-shadow: 0 0 15px rgba(239, 68, 68, 0.6);
                    }

                    .theme-red .subtitle-text,
                    .theme-red .event-title,
                    .theme-red .social-icon,
                    .theme-red .background-light {
                        color: #ef4444;
                    }
                    
                    .theme-red .background-light {
                        background-color: #ef4444;
                    }
                    
                    .theme-toggle-button {
                        background: none;
                        border: none;
                        cursor: pointer;
                        color: #facc15;
                        transition: color 0.3s ease;
                        margin-left: 1rem;
                    }

                    .theme-toggle-button:hover {
                        color: white;
                    }

                    .message-box {
                        position: fixed;
                        top: 20px;
                        left: 50%;
                        transform: translateX(-50%);
                        padding: 12px 24px;
                        border-radius: 9999px;
                        background-color: #333;
                        color: white;
                        font-size: 0.875rem;
                        font-weight: 500;
                        z-index: 1000;
                        opacity: 0;
                        transition: opacity 0.3s ease-in-out;
                        pointer-events: none;
                    }
                    .message-box.show {
                        opacity: 1;
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
                        animation: slide-down 0.5s ease-out forwards;
                    }

                    .header-left {
                        display: flex;
                        align-items: center;
                        gap: 2rem;
                    }

                    .logo-text {
                        font-family: 'Anton', sans-serif;
                        font-size: 1.5rem;
                        font-weight: 700;
                        background: linear-gradient(45deg, #facc15, #b45f06);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        line-height: 1.2;
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
                        box-shadow: 0 0 15px rgba(250, 204, 21, 0.6);
                        animation: button-pulse 1s infinite;
                    }
                    
                    @keyframes button-pulse {
                      0% { box-shadow: 0 0 10px rgba(250, 204, 21, 0.6); }
                      50% { box-shadow: 0 0 20px rgba(250, 204, 21, 0.8); }
                      100% { box-shadow: 0 0 10px rgba(250, 204, 21, 0.6); }
                    }

                    .main-content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        padding: 3rem 0;
                        animation: fade-in 1s ease-out forwards;
                    }
                    
                    /* Specific styles for the events page */
                    .events-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                        gap: 2rem;
                        margin-top: 3rem;
                        max-width: 60rem;
                        width: 100%;
                    }

                    .event-card {
                        background-color: #111827;
                        border-radius: 1rem;
                        overflow: hidden;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
                    }

                    .event-card:hover {
                        transform: translateY(-5px) scale(1.02);
                        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
                        background-color: #1f2937;
                    }

                    .event-image {
                        width: 100%;
                        height: 200px;
                        object-fit: cover;
                    }

                    .event-info {
                        padding: 1.5rem;
                        text-align: left;
                    }

                    .event-title {
                        font-size: 1.5rem;
                        font-weight: 700;
                        color: #facc15;
                        margin-bottom: 0.5rem;
                    }

                    .event-date {
                        font-size: 0.875rem;
                        color: #9ca3af;
                        margin-bottom: 1rem;
                    }

                    .event-description {
                        font-size: 1rem;
                        color: #e5e7eb;
                    }

                    .view-more-button {
                        width: 100%;
                        padding: 0.75rem 2rem;
                        background-color: transparent;
                        color: #facc15;
                        font-weight: 700;
                        border: 2px solid #facc15;
                        border-radius: 9999px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        margin-top: 1rem;
                        box-shadow: 0 2px 5px rgba(250, 204, 21, 0.3);
                    }

                    .view-more-button:hover {
                        background-color: #facc15;
                        color: #000;
                        transform: scale(1.05);
                        box-shadow: 0 5px 15px rgba(250, 204, 21, 0.5);
                    }
                    
                    .sticky-bar {
                        position: fixed;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        background-color: rgba(0, 0, 0, 0.8);
                        backdrop-filter: blur(10px);
                        padding: 1rem 2rem;
                        display: flex;
                        justify-content: center;
                        box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
                        z-index: 100;
                        animation: slide-up 0.5s ease-out forwards;
                    }

                    .register-button {
                        padding: 0.75rem 2rem;
                        background-color: #facc15;
                        color: #000;
                        font-weight: 700;
                        border: none;
                        border-radius: 9999px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        width: 100%;
                        max-width: 400px;
                        box-shadow: 0 4px 15px rgba(250, 204, 21, 0.4);
                        animation: button-shimmer 2s infinite linear;
                    }
                    
                    @keyframes button-shimmer {
                        0% { background-position: -200% 0; }
                        100% { background-position: 200% 0; }
                    }

                    .register-button:hover {
                        background-color: #eab308;
                        transform: scale(1.02);
                        box-shadow: 0 6px 20px rgba(250, 204, 21, 0.6);
                    }

                    /* End of specific events styles */

                    .home-content, .about-content, .help-content, .contact-content, .registration-content {
                        min-height: 80vh;
                    }

                    .title-text {
                        font-family: 'Anton', sans-serif;
                        font-size: 6rem;
                        font-weight: 900;
                        background: linear-gradient(45deg, #facc15, #b45f06);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        letter-spacing: 0.025em;
                        line-height: 1;
                    }

                    .subtitle-text {
                        font-family: 'Anton', sans-serif;
                        font-size: 4rem;
                        font-weight: 300;
                        color: #9ca3af;
                        margin-top: -2.5rem;
                        letter-spacing: 0.05em;
                    }
                    
                    @keyframes fade-in-up {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .animate-fade-in-up {
                        animation: fade-in-up 0.6s ease-out forwards;
                    }

                    .delay-200 {
                        animation-delay: 0.2s;
                    }

                    .delay-400 {
                        animation-delay: 0.4s;
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
                        box-shadow: 0 4px 10px rgba(250, 204, 21, 0.3);
                    }

                    .explore-button:hover {
                        background-color: #facc15;
                        color: #000;
                        transform: translateY(-3px);
                        box-shadow: 0 8px 20px rgba(250, 204, 21, 0.5);
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
                        box-shadow: 0 4px 10px rgba(250, 204, 21, 0.3);
                    }

                    .query-button:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }

                    .query-button:hover:not(:disabled) {
                        background-color: #facc15;
                        color: #000;
                        transform: translateY(-3px);
                        box-shadow: 0 8px 20px rgba(250, 204, 21, 0.5);
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
                        animation: slide-up 0.5s ease-out forwards;
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
                    
                    @keyframes slide-down {
                        from { transform: translateY(-100%); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }

                    @keyframes slide-up {
                        from { transform: translateY(100%); opacity: 0; }
                        to { transform: translateY(0); opacity: 1; }
                    }

                    @keyframes fade-in {
                      from { opacity: 0; }
                      to { opacity: 1; }
                    }
                    
                    /* Theme-specific styles using a CSS variable for the active color */
                    .theme-gold .nav-link:hover, .theme-gold .social-icon:hover {
                        color: #facc15;
                    }
                    
                    .theme-red .nav-link:hover, .theme-red .social-icon:hover {
                        color: #ef4444;
                    }
                    
                    .theme-red .logo-text,
                    .theme-red .title-text {
                        background: linear-gradient(45deg, #ef4444, #7f1d1d);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                    .theme-red .explore-button,
                    .theme-red .contact-button,
                    .theme-red .view-more-button {
                        border-color: #ef4444;
                        color: #ef4444;
                    }

                    .theme-red .explore-button:hover,
                    .theme-red .contact-button:hover,
                    .theme-red .view-more-button:hover {
                        background-color: #ef4444;
                        color: #000;
                    }

                    .theme-red .register-button {
                        background-color: #ef4444;
                        color: #000;
                    }
                    
                    .theme-red .register-button:hover {
                        background-color: #dc2626;
                    }
                    
                    .theme-red .view-more-button {
                        box-shadow: 0 2px 5px rgba(239, 68, 68, 0.3);
                    }

                    .theme-red .view-more-button:hover {
                        box-shadow: 0 5px 15px rgba(239, 68, 68, 0.5);
                    }
                    .theme-red .register-button {
                        box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
                    }
                    .theme-red .register-button:hover {
                        box-shadow: 0 6px 20px rgba(239, 68, 68, 0.6);
                    }
                    .theme-red .contact-button:hover {
                        box-shadow: 0 0 15px rgba(239, 68, 68, 0.6);
                    }

                    .theme-red .subtitle-text,
                    .theme-red .event-title,
                    .theme-red .social-icon,
                    .theme-red .background-light {
                        color: #ef4444;
                    }
                    
                    .theme-red .background-light {
                        background-color: #ef4444;
                    }
                    
                    .theme-toggle-button {
                        background: none;
                        border: none;
                        cursor: pointer;
                        color: #facc15;
                        transition: color 0.3s ease;
                        margin-left: 1rem;
                    }

                    .theme-toggle-button:hover {
                        color: white;
                    }

                    .message-box {
                        position: fixed;
                        top: 20px;
                        left: 50%;
                        transform: translateX(-50%);
                        padding: 12px 24px;
                        border-radius: 9999px;
                        background-color: #333;
                        color: white;
                        font-size: 0.875rem;
                        font-weight: 500;
                        z-index: 1000;
                        opacity: 0;
                        transition: opacity 0.3s ease-in-out;
                        pointer-events: none;
                    }
                    .message-box.show {
                        opacity: 1;
                    }
                `}
            </style>
            <div className={`app-container theme-${theme}`}>
                <div className={`message-box ${isMessageVisible ? 'show' : ''}`} id="messageBox">
                    {message}
                </div>
                <main className="main-wrapper">
                    <Header setCurrentPage={setCurrentPage} toggleTheme={toggleTheme} theme={theme} />
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
