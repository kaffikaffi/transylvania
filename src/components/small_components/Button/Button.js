import React from "react";
import "./button_style.scss";

const STYLES = [
    "btn--primary--style",
];

const SIZES = ["btn--small","btn--medium"];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <button className onClick = {onClick} type = {type}>
            {children}
        </button>
    )
};