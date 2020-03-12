import React, {useState} from "react"
import colors from "../../../style/colors.js"
import styled from "styled-components"

let i = 0
const InputField = ({type, placeholder}) => 
{
    const [colorCode, setColorCode] = useState("000000")
    const [borderR, setBorderR] = useState(0)
    const [borderB, setBorderB] = useState(0)
    const [rotate, setRotate] = useState(0)

    let StyledInputField = styled.input`
        width: 80%;

        background-color: #${colorCode};
        color: white;
        
        padding: 12px 20px;
        margin: 8px 0;
        
        border: none;
        border-bottom: ${borderB}px solid ${colors.blue};
        border-radius: ${borderR}px;
    `

    let StyledDiv = styled.div`
        position: absolute;
        width: 80%;
        -webkit-transform: rotate(-${rotate}deg);
    `

    const handleOnChange = (event) =>
    {
        const colors = ["0000FF", "00FF00", "FF0000"]
        const sizes = [2, 4, 13, 0, 9, 13, 20, 5, 100]
        i++
        setColorCode(colors[i%3])
        setBorderR(borderR + 1)
        setBorderB(sizes[i%9])
        setRotate(i*10)
    }

    return (
        <StyledDiv>
            <StyledInputField
                type={type} 
                placeholder={placeholder} 
                onChange={event => handleOnChange(event)}
                autoFocus={true}
            />
        </StyledDiv>
    )
}

export default InputField;