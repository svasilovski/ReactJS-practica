import { React, useState} from 'react';
import ObjComponent from '../pure/objComponent';

const ObjContainer = ({msChange}) => {
    const [color, setColor] = useState('rgb(0,0,0)');

    const [loopColorChange, setLoopColorChange] = useState(0);

    const getRandomColor = () => Math.floor(Math.random() * 256);
    
    const generateRGBColor = () => {
        const rgb = {
            r: getRandomColor(),
            g: getRandomColor(),
            b: getRandomColor()
        };
        return setColor(`rgb(${rgb.r},${rgb.g},${rgb.b})`);
    };

    const changeColor = () => {
        return setLoopColorChange(setInterval(generateRGBColor, msChange));
    };

    const stopChangeColor = () => {
        return clearInterval(loopColorChange);
    };

    const dblClickChangeColor = () => {
        return clearInterval(loopColorChange);
    };

    return (
        <div>
            <ObjComponent
                propbackgroundColor={color}
                onChangeColor={changeColor}
                onStopChangeColor={stopChangeColor}
                onClickChangeColor={dblClickChangeColor}
            ></ObjComponent>
        </div>
    );
}

export default ObjContainer;
