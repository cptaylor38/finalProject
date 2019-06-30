import React, { useState, useEffect } from 'react';
import './JournalEntry.css';
import useModal from '../hooks/useModal';
import ArchiveModal from '../ArchiveModal/ArchiveModal';

const Entry = ({ data, deleteButton }) => {

    const [modalData, setModalData] = useState({
        id: null,
        title: null,
        body: null,
        date: null
    });

    const [modalLoaded, setModalLoaded] = useState(false);

    const checkData = () => {
        if (data._id && data.date && data.title && data.body) {
            setModalData({
                id: data._id,
                title: data.title,
                body: data.body,
                date: new Date(data.date).toUTCString()
            });
            setModalLoaded(true);
        }
    }

    useEffect(checkData, [data._id, data.date, data.title, data.body]);

    const { isShowing, toggle } = useModal(modalData);

    return (
        <React.Fragment>
            <div className='archiveFileContainer'>
                <div className='entryFileContainer container'>
                    <img src='https://win98icons.alexmeub.com/icons/png/html-5.png' alt='file icon' className='fileImgBtn' type='button' onClick={toggle} id='archiveItemButton'></img>
                    <p>{data.title}</p>
                </div>

            </div>
            <div className='modalSection'>
                {modalLoaded ? (<ArchiveModal
                    isShowing={isShowing}
                    hide={toggle}
                    modalData={modalData}
                    deleteButton={deleteButton}
                />) : ''}
            </div>
        </React.Fragment>
    )
}

export default Entry;