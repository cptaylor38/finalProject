import React, { useEffect } from 'react';
// const jQuery = require('jquery');
// import colorbox from 'jquery-colorbox';


const ModalButton = props => {


    return (
        <button onClick={() => props.onClick(props.url)}>{props.id}</button>
    )
}

export default ModalButton