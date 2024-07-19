import React,{useState} from 'react'

import PropTypes from 'prop-types'

export default function TextForm(props) {
  const uppertext=()=>{
    console.log("clicked");
    let newText = text.toUpperCase();
    settext(newText);
    props.showAlert("conveted to upper case!!","success");
  }
  const lowertext=()=>{
    console.log("clicked");
    let newText = text.toLowerCase();
    settext(newText);
    props.showAlert("conveted to Lower case!!","success");
  }
  const cleartext =()=>{
    let newText = "";
    settext(newText);
    props.showAlert("clear!!","success");
  }
  const remspaces=()=>{
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "));
  }
  const handleonchange = (event)=>{
    console.log("on change");
    settext(event.target.value)
  }
  const [text,settext] = useState("enter the text");
  return (
    <>
    <div className='container'>
      
      <div className="mb-3" >
        <label for="mybox" class="form-label">{props.heading}</label>
        <textarea class="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'grey':'white'}} onChange={handleonchange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={uppertext}>lower to upper</button>
      <button className="btn btn-primary mx-3" onClick={lowertext}>upper to lower</button>
      <button className="btn btn-primary mx-3" onClick={remspaces}>remove extra spaces</button>
      <button className="btn btn-primary mx-3" onClick={cleartext}>clear</button>
    </div>

    <div className="container my-3"style={{backgroundColor: props.mode === 'dark'?'grey':'white'}}>
      <h3>SUMMARY OF THE TEXT</h3>
      <p>word count :{text.split(" ").length} character count :{text.length}</p>
      <h3>PREVIEW</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
TextForm.prototype={
  heading: PropTypes.string.isRequired
}
TextForm.defaultProps={
  
}

