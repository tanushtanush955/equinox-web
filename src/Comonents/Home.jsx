import "../Styles/Home.css";

const Home = ({ setCurrentPage, theme }) => {
    const exploreButtonColor = theme === 'gold' ? '#facc15' : '#ef4444';

    return (
        <div className="main-content home-content">
            <h2 className="title-text animate-fade-in-up" >
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