import { useState, useEffect } from 'react'
import Card from './Card.jsx'
import "tachyons";
import './StarWarsTheme.css'; // We'll create this CSS file

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStarWarsCharacters();
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
      
      <div className="content-container tc pa4">
      <div className="logo-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" 
         alt="Star Wars Logo" 
       className="star-wars-logo" />
      </div>
        <h1 className="star-wars-title">Characters</h1>
        

        
        {loading && <p className="loading-text">Loading characters from a galaxy far, far away...</p>}
        
        {error && <p className="error-text">{error}</p>}
        
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
      </div>
    </div>
  );
}

export default App
