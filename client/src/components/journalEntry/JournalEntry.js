import React from 'react';
import './JournalEntry.css';

const Entry = ({ data, deleteButton }) => {

    console.log(data);
    const id = data._id;
    const date = new Date(data.date).toUTCString();

    return (
        <>
            <p>{date}</p>
            <p>{data.body}</p>
            <button type='button' onClick={event => deleteButton(id)}>Delete this entry.</button>
        </>

    )
}

export default Entry;