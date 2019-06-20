import React from 'react';
import './searchCard.css';

const SearchCard = props => {



    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.city}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.state}</h6>
                    <p>{props.zipcode}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchCard;