import React, { useState, useEffect } from 'react';
import TrackModal from '../Modal/Modal';
import useModal from '../hooks/useModal';

const TrackItem = props => {
    const { isShowing, toggle } = useModal();

    return (
        <React.Fragment>
            <div className='row'>
                <div className='container'>
                    <div className='col-lg-4 col-md-4 col-lg-12'>
                        <img src={props.data.imageURL} alt={`Album Image`} style={{ maxHeight: '100px', maxWidth: '100px' }}></img>
                    </div>
                    <div className='col-lg-8 col-md-8 col-lg-12'>
                        <h4>{props.data.name}</h4>
                        <h5>{props.data.artist}</h5>
                        <a href={props.data.albumURL} target='_blank'>Find this on spotify.</a>
                        <button className="button-default" onClick={toggle}>Preview Song</button>
                        <div className='modalSection'>
                            <TrackModal
                                isShowing={isShowing}
                                hide={toggle}
                                url={props.data.url}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TrackItem;