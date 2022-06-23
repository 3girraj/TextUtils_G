import React, { useState } from 'react'


export default function TextForm (props) {
const handleUpclick=()=>{
    //console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to upperCase!", "success");
}

const handleLoclick=()=>{
  //console.log("Uppercase was clicked"+text);
  let newText=text.toLowerCase();
  setText(newText);
  props.showAlert("Coverted to lowerCase!","success");
}

const handleCopyText=()=>{
  var text =document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copied to Clipboard!","success");
}

const handleExtraSpace=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra spaces removed!","success");
}

const handleClearclick=()=>{
  //console.log("Uppercase was clicked"+text);
  let newText='';
  setText(newText);
}

const handleonChange=(event)=>{
    //console.log("On Change");
    setText(event.target.value);
}

    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1 >{props.heading}</h1>  
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'grey':'light' , color: props.mode==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
    </div>

    <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to UpperCase</button>  
    <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to LowerCase</button>  
    <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>  
    <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>  
    <button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear Text</button>  
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} world and {text.length} character</p>
      <p>{0.008 *text.split(" ").length} mintutes read </p>
      <h2>Preview</h2>
      <p>{text.length>0? text:"Enter Something in the textbox above to priview it here"}</p>
    </div>

    </>
  )
}
