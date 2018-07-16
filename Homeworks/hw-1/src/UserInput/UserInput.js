import React from 'react';

const userInput = (props) => {
    const style = {
        border: `3px solid green`,
        borderRadius: `5px`,
        padding: `5px`,
        fontStyle: `italic`,
        fontSize: `16px`,
        backgroundColor: `#eeeeee`
    }
    return <input type="text" onChange={props.changed} value={props.value} className="UserInput" style={style}/>
};

export default userInput;