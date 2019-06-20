import React, { useEffect } from 'react';


const ModalButton = props => {


    return (
        <button onClick={() => props.onClick(props.url)}>{props.id}</button>
    )
}

export default ModalButton