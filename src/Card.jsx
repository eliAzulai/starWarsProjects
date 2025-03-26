import React from 'react';
import './StarWarsTheme.css';

const Card = (props) => {
    return (
        <div className="star-wars-card">
            <div className="card-content">
                <h2 className="character-name">{props.name}</h2>
                <div className="character-details">
                    <p><span className="detail-label">Height:</span> {props.height} cm</p>
                    <p><span className="detail-label">Mass:</span> {props.mass} kg</p>
                    <p><span className="detail-label">Hair:</span> {props.hairColor}</p>
                    <p><span className="detail-label">Birth Year:</span> {props.birthYear}</p>
                    <p><span className="detail-label">Gender:</span> {props.gender}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
