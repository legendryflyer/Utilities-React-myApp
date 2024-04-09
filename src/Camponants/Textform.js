import react, { useState } from 'react'



export default function Textform(props) {
    const [text, setText] = useState("")
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
        <>
        <div>

            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="TextBox" rows="5"></textarea>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type='button' className="btn btn-success" onClick={handleUpperOnClick}>Convert to Uppercase</button>
                <button type='button' className="btn btn-success" onClick={handleLowerOnClick}>Convert to Lowercase</button>
            </div>
        </div>
        <div>
            <h2 className="container my-3">Text Summary</h2>
            <p className="container my-4">
                {text.split(' ').length} words and {text.length} characters.
            </p>           
            <p className="container my-4">
                You will require {0.008*text.split(' ').length} minutes to read this in real life.
            </p>
            <h3 className="container my-3">Original Text Preview:</h3>
            <p className="container my-4">{text}</p>
            

        </div>
        </>
    )
}

