import React, { useState } from 'react';
import SquareCSS from './Square.module.css';



const Square = () => {
    const [color, setColor] = useState('rgb(220, 224, 224)');
    const GetRandomRGB = () => {
        setColor(`RGB(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);
    };
    return (
        <button
            onClick={GetRandomRGB}
            className={SquareCSS.btn}
            style={{ backgroundColor: color }}
        ><b>{color}</b></button>
    );
};

export default Square;
