import React, { useState, useEffect } from 'react';
import Button from '../../components/buttons/modalButton';

const Listing = props => {

    const pid = props.data.pid;
    const key = props.data.pid;


    return (
        <div>
            <h5>{props.data.title}</h5>
            <p>
                <a href={props.data.url} target='_blank'>Link</a>
                <Button url={props.data.url} key={key} id={pid} onClick={props.generateModal} />
            </p>

        </div>
    )
}

export default Listing;