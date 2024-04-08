import react, { useState } from 'react'



export default function Textform(props) {
    const [text, setText] = useState("Enter the text here")
    const handleOnChange = (e) => {
        console.log("On change")
        setText(e.target.value)
    }
    const handleUpperOnClick = () => {
        console.log("on Click")
        setText(text.toUpperCase())
    }
    const handleLowerOnClick = () => {
        console.log("lower onClick")
        setText(text.toLowerCase())
    }

    return (
        <div>

            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="TextBox" rows="5"></textarea>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type='button' className="btn btn-primary" onClick={handleUpperOnClick}>Convert to Uppercase</button>
                <button type='button' className="btn btn-primary" onClick={handleLowerOnClick}>Convert to Lowercase</button>
            </div>
        </div>
    )
}

