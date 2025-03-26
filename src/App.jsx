import { useState, useEffect } from 'react'
import Card from './Card.jsx'
import "tachyons";
import './StarWarsTheme.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCrawl, setShowCrawl] = useState(true);

  useEffect(() => {
    // Start fetching data immediately
    fetchStarWarsCharacters();
    
    // Hide crawl after animation
    const timer = setTimeout(() => {
      setShowCrawl(false);
    }, 15000);
    
    return () => clearTimeout(timer);
  }, []);

  const fetchStarWarsCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://swapi.dev/api/people/');
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching Star Wars characters:", err);
      setError("Failed to load characters. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="star-wars-app">
      <div className="stars"></div>
      <div className="twinkling"></div>
      
      {/* Opening Crawl - Only shown initially */}
      {showCrawl ? (
        <div className="crawl-container">
          <div className="crawl">
            <div className="title">
              <p>Episode IV</p>
              <h1>A New Hope</h1>
            </div>
            <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire...</p>
            <p>Our heroes await discovery as we load their information from the far reaches of space...</p>
          </div>
        </div>
      ) : (
        // Main content - Shown after crawl finishes
        <div className="content-container tc pa4">
          <div className="logo-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" 
                alt="Star Wars Logo" 
                className="star-wars-logo" />
          </div>
          
          <h1 className="star-wars-title">Star Wars Characters</h1>
          
          {loading ? (
            <div className="lightsaber-loader">
              <div className="lightsaber">
                <div className="hilt"></div>
                <div className="blade"></div>
              </div>
              <p className="loading-text">Loading characters from a galaxy far, far away...</p>
            </div>
          ) : error ? (
            <p className="error-text">{error}</p>
          ) : (
            <div className="flex flex-wrap justify-center">
              {characters.map((character, index) => (
                <Card 
                  key={index}
                  name={character.name}
                  height={character.height}
                  mass={character.mass}
                  hairColor={character.hair_color}
                  birthYear={character.birth_year}
                  gender={character.gender}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
