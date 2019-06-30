import React from 'react';
import TrackModal from '../Modal/Modal';
import useModal from '../hooks/useModal';
import './TrackItem.css'

const TrackItem = props => {
    const { isShowing, toggle } = useModal();

    return (
        <React.Fragment>
            <div className='row trackContainerRow'>
                <div className='container trackContainer'>
                    <img src={props.data.imageURL} alt='Album' ></img>
                    <div className='info'>
                        <h4>{props.data.name}</h4>
                        <h5>{props.data.artist}</h5>
                        <a href={props.data.albumURL} target='_blank'>Find this on spotify.</a>
                        <button className="button-default" onClick={toggle} >Preview Song</button>
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