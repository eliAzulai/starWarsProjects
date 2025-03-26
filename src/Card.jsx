import React from 'react';

const Card = (props) => {
    return (
        <div className="bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${props.name}?set=set5&size=200x200`} alt={props.name} />
            <div>
                <h2>{props.name}</h2>
                <p>Height: {props.height}</p>
                <p>Mass: {props.mass}</p>
                <p>Hair Color: {props.hairColor}</p>
                <p>Birth Year: {props.birthYear}</p>
                <p>Gender: {props.gender}</p>
            </div>
        </div>
    );
}

export default Card;
