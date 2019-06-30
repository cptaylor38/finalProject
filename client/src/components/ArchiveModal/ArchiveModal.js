import React from 'react';
import ReactDOM from 'react-dom';
import './ArchiveModal.css';


const ArchiveModal = ({ isShowing, hide, modalData, deleteButton }) => isShowing ? ReactDOM.createPortal(

    <>
        <div className='archiveModal' />
        <div className="archivedWrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal-content aboveBody archiveObject" style={{ position: 'absolute', top: '30%', left: '10%', width: 'auto' }}>
                <div className='bodyDiv'>
                    <div className="container archiveObject">
                        <div className="notepad">
                            <div className="notepad-bar">
                                <div className="notepad-icon">
                                    <img src="http://www.milk.com.hk/sites/default/files/imagecache/largebanner/sites/default/files/notepad_1.png" alt="notepad icon"></img>
                                </div>
                                <div className="notepad-title">{modalData.title} - {modalData.date}</div>
                                <div className="notepad-exit" type='button' data-dismiss="archiveModal" onClick={hide}>
                                    <div className="button-exit">&#10060;</div>
                                </div>
                                <div className="notepad-maximize">
                                    <div className="button-maximize">
                                        <div className="icon-maximize"></div>
                                    </div>
                                </div>
                                <div className="notepad-minimize">
                                    <div className="button-minimize">
                                        <div className="icon-minimize"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="notepad-settings">
                                <div className="settings-text"><span className="underline">F</span>ile</div>
                                <div className="settings-text"><span className="underline">E</span>dit</div>
                                <div className="settings-text"><span className="underline">S</span>earch</div>
                                <div className="settings-text"><span className="underline">H</span>elp</div>
                                <div className="settings-text deleteThisArchive" type='button'
                                    onClick={(id) => deleteButton(modalData.id)}>
                                    <span className="underline">D</span>elete</div>
                            </div>
                            <div className="notepad-content">
                                <p>{modalData.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>, document.body
) : null;

export default ArchiveModal;



