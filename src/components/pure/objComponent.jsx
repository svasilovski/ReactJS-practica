import React from 'react';

const ObjComponent = ({propbackgroundColor, onChangeColor, onStopChangeColor, onClickChangeColor}) => {
    
    const sizeObject = {
        width:'255px',
        height: '255px',
        margin: 'auto',
        backgroundColor: propbackgroundColor
    }
    

    return (
        <div 
            id="square"
            onMouseOver={onChangeColor}
            onMouseLeave={onStopChangeColor}
            onDoubleClick={onClickChangeColor}
            style={sizeObject}
        ></div>
    );
}

export default ObjComponent;
