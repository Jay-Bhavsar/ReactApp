import React, { useState } from 'react';

export default function Text(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        settext(newText);
    }

    const handlelowClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        settext(newText);
    }
    const handlecleartext = () => {
        // console.log("uppercase was clicked" + text);
        let newText = '';
        settext(newText);
    }

    const handleOnChange = (event) => {
        // console.log("On CHange");
        settext(event.target.value);
    }
    const [text, settext] = useState('enter your text here');

    return <div>
        <>
            <div className="mb-3 my-3">
                <h1 >{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="5"></textarea>


            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handlecleartext}>Clear the text</button>





            <div className="container my-4">
                <h1>This is the summary</h1>
                <p>this text contains {text.split(" ").length} words , {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read </p>
                <h3>Preview:</h3>
                <p>{text}</p>
            </div>
        </>
    </div>;
}
