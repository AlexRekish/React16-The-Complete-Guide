import React from 'react';

const validationComponent = (props) => {
    const output = props.length >= 5 ? 'Text long enough' : 'Text too short';
    return (
        <p>{output}</p>
    );
}

export default validationComponent;