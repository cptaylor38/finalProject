import React from 'react';
import TrackModal from '../Modal/Modal';
import useModal from '../hooks/useModal';
import './TrackItem.css'

const TrackItem = props => {
    const { isShowing, toggle } = useModal();

    const refreshModals = () => {
        document.getElementsByClassName('modalSection').empty();
    }

    return (
        <React.Fragment>
            <div className='row'>
                <div className='container trackContainer'>
                    <img src={props.data.imageURL} alt={`Album Image`} ></img>
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
                                refresh={refreshModals}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TrackItem;