// Card.jsx
import React from 'react';
import './StarWarsTheme.css';

const Card = (props) => {
    return (
        <div className="star-wars-card">
            <div className="card-header">
                <div className="card-header-lights">
                    <div className="light"></div>
                    <div className="light"></div>
                    <div className="light"></div>
                </div>
                <h2 className="character-name">{props.name}</h2>
            </div>
            <div className="card-content">
                <div className="hologram-effect"></div>
                <div className="character-stats">
                    <div className="stat-group">
                        <div className="stat-item">
                            <span className="stat-label">Height</span>
                            <span className="stat-value">{props.height} cm</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Mass</span>
                            <span className="stat-value">{props.mass} kg</span>
                        </div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="character-details">
                        <div className="detail-item">
                            <i className="detail-icon hair-icon"></i>
                            <span className="detail-label">Hair Color:</span>
                            <span className="detail-value">{props.hairColor}</span>
                        </div>
                        <div className="detail-item">
                            <i className="detail-icon birth-icon"></i>
                            <span className="detail-label">Birth Year:</span>
                            <span className="detail-value">{props.birthYear}</span>
                        </div>
                        <div className="detail-item">
                            <i className="detail-icon gender-icon"></i>
                            <span className="detail-label">Gender:</span>
                            <span className="detail-value">{props.gender}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
