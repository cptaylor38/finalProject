import React from 'react';
import Iframe from 'react-iframe';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'antd';

const root = document.getElementById('root');

const TrackModal = props => {
    const el = document.createElement('div');

    return ReactDOM.createPortal(
        <div>
            <Modal
                visible={props.visible}
                onOk={props.onOk}
                style={props.style}
                onCancel={props.onCancel}
                url={props.url}
                okButtonProps={props.okButtonProps}
                cancelButtonProps={props.cancelButtonProps}
            >
                <Iframe url={props.url}
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" />
            </Modal>
        </div>,
        el
    );
}

export default TrackModal;