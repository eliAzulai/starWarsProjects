import { useState, useEffect } from 'react'
import Card from './Card.jsx'
import "tachyons";

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
    <div className="tc pa4">
      <h1 className="f1">Star Wars Characters</h1>
      
      {loading && <p className="f3">Loading characters...</p>}
      
      {error && <p className="f3 dark-red">{error}</p>}
      
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
  );
}

export default App
