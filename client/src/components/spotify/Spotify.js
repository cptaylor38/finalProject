import React, { useState, useEffect } from 'react';
import Button from '../buttons/modalButton';


const Listing = props => {

    const id = props.data.id;
    const key = props.data.id;


    return (
        <div>
            <h5>{props.data.title}</h5>
            <p>
                <a href={props.data.url} target='_blank'>Link</a>
                <Button url={props.data.url} key={key} id={id} onClick={props.showModal} />
            </p>

        </div>
    )
}

export default Listing;