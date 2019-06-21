import React, { useEffect } from 'react';


const ModalButton = props => {


    return (
        <button onClick={() => props.onClick(props.url)}>Preview Song</button>
    )
}

export default ModalButton