import React from 'react';
import API from '../../utils/API';
import './Journal.css';

const Journal = ({ userId, setNewEntry, setJournalState }) => {
    console.log(userId);

    const submitEntry = event => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const noteBody = event.target.elements.body.value;

        const entryData = { title: title, body: noteBody };
        if (entryData.title && entryData.body) {
            archiveEntry(entryData);
            setNewEntry(true);
        }
    }


    const archiveEntry = entryData => {
        const newEntry = {
            id: userId,
            title: entryData.title,
            body: entryData.body
        }

        API.createEntry(newEntry).then(res => setJournalState(false));
    }

    return (
        <form id='journalForm' onSubmit={event => submitEntry(event)}>
            <div className='note'>
                <div className="form-group shadow-textarea note_cnt">
                    <textarea className="title" id="exampleFormControlTextarea6" name='title' placeholder="Note title"></textarea>
                    <textarea className="cnt" placeholder="Dear Diary," name='body' row='20'></textarea>
                </div>
            </div>
            <button type="submit" id='noteSubmit'><img src='https://i.gifer.com/origin/c6/c6afab251a20e6d0eb80b983450bc66e_w200.gif' alt='Clippy' id='pinImg'></img></button>
        </form>
    )
}

export default Journal;