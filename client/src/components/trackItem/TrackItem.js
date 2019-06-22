import React, { useState, useEffect } from 'react';
import Button from '../buttons/modalButton';


const Listing = props => {

    const id = props.data.id;
    const key = props.data.id;


    return (
        <div>
            <div className='row'>
                <div className='container'>
                    <div className='col-lg-4 col-md-4 col-lg-12'>
                        <img src={props.data.imageURL} alt={`Album Image`} style={{ maxHeight: '100px', maxWidth: '100px' }}></img>
                    </div>
                    <div className='col-lg-8 col-md-8 col-lg-12'>
                        <h4>{props.data.name}</h4>
                        <h5>{props.data.artist}</h5>
                        <a href={props.data.albumURL} target='_blank'>Find this on spotify.</a>
                        <Button url={props.data.url} key={key} id={id} onClick={props.showModal} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listing;