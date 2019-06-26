import React from 'react';
import API from '../../utils/API';
import './Journal.css';

const Journal = ({ userId, setNewEntry, setJournalState }) => {
    console.log(userId);

    const submitEntry = event => {
        event.preventDefault();
        const entry = event.target.elements.entry.value;
        archiveEntry(entry);
        setNewEntry(true);
    }


    const archiveEntry = entry => {
        const newEntry = {
            id: userId,
            entry: entry
        }

        API.createEntry(newEntry).then(res => setJournalState(false));
    }

    return (
        <form onSubmit={event => submitEntry(event)}>
            <div className="form-group shadow-textarea">
                <textarea className="form-control z-depth-1" id="exampleFormControlTextarea6" name='entry' rows='20' placeholder="Write something here..."></textarea>
                <button type="submit" style={{ marginTop: '20px' }}>Sign In</button>
            </div>
        </form>
    )
}

export default Journal;