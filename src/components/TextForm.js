import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log("uppercase clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }


    const handleLoClick = ()=>{
        //console.log("lowercase clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }

    const handleReverseClick = ()=>{
        //console.log("trim clicked");
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Reversed the string!","success");
    }

    const handleClearClick = ()=>{
        //console.log("clear clicked");
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!","success");
    }

    const handleOnchange = (event)=>{
        //console.log("onChange clicked");
        setText(event.target.value);
    }

    const [text,setText] = useState("");
   
  return (
    
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} onChange={handleOnchange} id="myBox" rows="8"></textarea>
    </div>

    <button className={`btn btn-${props.btnType} mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
    
    <button className={`btn btn-${props.btnType} mx-1`} onClick={handleLoClick}>Convert to Lowercase</button>

    <button className={`btn btn-${props.btnType} mx-1`} onClick={handleReverseClick}>Reverse</button>

    <button className={`btn btn-${props.btnType} mx-1`} onClick={handleClearClick}>Clear</button>

    <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{text.trim().split(/\s+/).length} words. {text.length} characters.</p>
        <p>{0.033 * text.split(" ").length} minutes read.</p>

    </div>

    <div className="container my-3">
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in textbox above to preview here.'}</p>

    </div>
    </div>
  )
}
