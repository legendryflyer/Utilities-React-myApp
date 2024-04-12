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
    const sentanceCase = () => {
        console.log("Sentance case")
        setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())
    }



    const capitalizeCase = () => {
        console.log("Capitalize Case")
        let newText = text.split(' ')
        newText = newText.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        setText(newText.join(' '))

    }


    const alternateCase = () => {
        let alterCase = ''
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                alterCase += text.charAt(i).toUpperCase()
            } else {
                alterCase += text.charAt(i).toLowerCase()
            }
        }
        setText(alterCase)
    }
    const copyToClipBoard = () => {
        const tempTextarea = document.createElement('textarea')
        tempTextarea.value = text
        document.body.appendChild(tempTextarea)
        tempTextarea.select()
        document.execCommand('copy')
        document.body.removeChild(tempTextarea)
        
    }
    const removeExtraSpaces = () => {
        console.log("Remove extra spaces")
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
    }



    const clearText = () => {
        console.log("clear")
        setText("")
    }

    return (
        <>
            <div className='container' style={{backgroundColor:props.mode==='light'?'white':'#1f1f1f', color:props.mode==='dark'?'white':'black'}}>

                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#212529':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange}  id="TextBox" rows="5"></textarea>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type='button' className="btn btn-success" onClick={handleUpperOnClick}>Convert to Uppercase</button>
                    <button type='button' className="btn btn-success" onClick={handleLowerOnClick}>Convert to Lowercase</button>
                    <button type='button' className="btn btn-success" onClick={sentanceCase}>Sentance Case</button>
                    <button type='button' className="btn btn-success" onClick={capitalizeCase}>Capitalize Case</button>
                    <button type='button' className="btn btn-success" onClick={alternateCase}>aLtErNaTiNg CaSe</button>
                    <button type='button' className="btn btn-success" onClick={copyToClipBoard}>Copy to Clipboard</button>
                    <button type='button' className="btn btn-success" onClick={removeExtraSpaces}>Remove extra spaces</button>
                    <button type='button' className="btn btn-success" onClick={clearText}>Clear</button>
                </div>
            </div>
            <div className='container' style={{backgroundColor:props.mode==='light'?'white':'#1f1f1f', color:props.mode==='dark'?'white':'black'}}>
                <h2 className="container my-3">Text Summary</h2>
                <p className="container my-4">
                    {text.split(' ').length} words and {text.length} characters.
                </p>
                <p className="container my-4">
                    You will require {0.008 * text.split(' ').length} minutes to read this in real life.
                </p>
                <h3 className="container my-3">Original Text Preview:</h3>
                <p className="container my-4">{text.length>0?text:"No text entered"}</p>


            </div>
        </>
    )
}