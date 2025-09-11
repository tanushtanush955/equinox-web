import "../Styles/Home.css";

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

export default Home;