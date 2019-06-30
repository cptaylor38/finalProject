import React from 'react';
import API from '../../utils/API';
import './Archives.css';
import JournalEntry from '../journalEntry/JournalEntry';

const Archives = ({ userId, entries, retrieveProfile }) => {

    const deleteButton = id => {
        API.deleteEntry(id);
        retrieveProfile();
    }

    return (
        <>
            {userId && entries.length > 0 ? entries.map(item => <JournalEntry key={item._id} data={item} deleteButton={deleteButton} />) : 'No journal entries.'}
        </>
    );
}

export default Archives;