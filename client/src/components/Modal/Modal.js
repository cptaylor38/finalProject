import React from 'react';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import './Modal.css';

const Modal = ({ isShowing, hide, url }) => isShowing ? ReactDOM.createPortal(

    < React.Fragment >
        <div className="modal" />
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal-header" style={{ padding: 0, borderBottom: 'none' }}>
                <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                    <span aria-hidden="true">X</span>
                </button>
            </div>
            <div className="modal-content" style={{ border: 'none', backgroundColor: 'transparent' }}>
                <Iframe url={url}
                    width="100px"
                    height="100px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" />
            </div>
        </div>
    </React.Fragment >, document.body
) : null;

export default Modal;