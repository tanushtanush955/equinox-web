import "../Styles/Header.css";

const Header = ({ setCurrentPage, toggleTheme, theme }) => {
    return (
        <header className="header">
            <div className="header-left">
                <h1 className="logo-text">Equinox</h1>
                <nav className="nav-menu">
                    <a href="#" className="nav-link" onClick={() => setCurrentPage('home')}>Home</a>
                    <a href="#" className="nav-link" onClick={() => setCurrentPage('events')}>Events</a>
                    <a href="#" className="nav-link" onClick={() => setCurrentPage('about')}>About</a>
                    <a href="#" className="nav-link" onClick={() => setCurrentPage('registration')}>Register</a>
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

export default Header;