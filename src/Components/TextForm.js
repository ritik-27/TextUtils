import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    // text="new Text" Wrong way to assign new value to text variable, this can only be done through setText()

    const handleSeClick=()=> { 
        let newText = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) { return c.toUpperCase() });
        setText(newText)
        props.showAlert("Converted to SENTENCE CASE", "success");
    }

    const handleUpClick = () => {
        // console.log("Uppercase button is triggered");
        if (text.length != 0) {
            let uppText = text.toUpperCase()
            setText(uppText);
            props.showAlert("Converted to UPPERCASE", "success"); //***Note: we are calling showAlert function which is declared in App.js So to ude here, we have to use props.showAlert()            
        }
        else {
            window.alert("Please add text first !!!")
        }
    }
    const handleLowClick = () => {
        if (text.length != 0) {
            let lowText = text.toLowerCase();
            setText(lowText)
            props.showAlert("Converted to LOWERCASE", "success"); //Alert
        }
        else {
            window.alert("Please add text first !!!")
        }
    }
    const handleTitleClick = () => {
        if (text.length != 0) {
            let newtext = text.toLowerCase().split(' ');
            for (let i = 0; i < newtext.length; i++) {
                newtext[i] = newtext[i].charAt(0).toUpperCase() + newtext[i].slice(1);
            }
            setText(newtext.join(' '))
            props.showAlert("Converted to TITLE CASE", "success"); //Alert
        }
        else {
            window.alert("Please add text first !!!")
        }
    }

    // const handleInvertClick = () => {
    //     if (text.length != 0) {
    //         let newtext = text.split('').map((c) =>c === c.toUpperCase()
    //                     ? c.toLowerCase()
    //                     : c.toUpperCase()).join('');
    //         setText(newtext)
    //         props.showAlert("Converted to INVERT CASE", "success"); //Alert
    //     }
    //     else {
    //         window.alert("Please add text first !!!")
    //     }
    // }
    const handleClearClick = () => {
        if (text.length != 0) {
            let newText = ""
            setText(newText);
            props.showAlert("Text cleared successfully", "success"); //Alert
        }
        else {
            window.alert("Text field is already EMPTY !!")
        }
    }
    const handleCopyClick = () => {
        document.querySelector('textarea').select();
        document.execCommand('copy');
    }
    const handleDummyClick = () => {
        let newText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat, nisl sit amet egestas euismod, mi urna lobortis diam, eget ullamcorper sapien ipsum eu massa. Maecenas vitae porttitor magna. Curabitur ultricies dui tellus, nec hendrerit purus facilisis id. Nulla molestie dui ac eros vehicula, id dictum nisl eleifend. Sed at justo magna. Nullam dignissim lectus vel tempus pretium. Duis tincidunt ultrices neque non pharetra. Nunc aliquam mattis sem, non laoreet sem laoreet sit amet. Morbi rutrum gravida libero non ultricies.
        Etiam accumsan tellus eu ex aliquet porttitor. Ut id lacus eget mi finibus scelerisque sed nec est. Maecenas suscipit diam eros, in commodo lorem aliquam pharetra. Suspendisse at dictum est, id semper turpis. Nullam imperdiet nunc sollicitudin ornare cursus. Curabitur vel augue at diam porta tempus.usce id diam dapibus, varius libero ut, sodales sem. Fusce eros ipsum, maximus in imperdiet id, fringilla vitae est. Maecenas at lectus vel sem pretium viverra. Suspendisse tempor, odio eget lacinia auctor, libero risus varius enim, a mattis nunc dolor ut nisi.`
        setText(newText);
    }
    const handleOnChange = (event) => {   //Note thisss ofor onchange we have to take event as parameter
        // console.log("handleonchange is triggered");
        setText(event.target.value);
    }
    return (
        <div className="container" >
            <div className={`container text-${props.mode}`}>
                <h3 style={{ color: (props.mode === 'light' ? 'black' : 'white') }}>Enter Your text below to analyze</h3>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} style={{ background: (props.mode === 'light' ? 'white' : '#292929c9'), color: (props.mode === 'light' ? 'black' : 'white') }} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn mx-1 my-1 btn-info" onClick={handleSeClick}>Convert to Sentence Case</button>
                <button className="btn mx-1 my-1 " onClick={handleUpClick} style={{ backgroundColor: '#ff6f61' }}>Convert to UPPERCASE</button>
                <button className="btn mx-1 my-1 btn-warning" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn mx-1 my-1 btn-dark" onClick={handleTitleClick} style={{ backgroundColor: '#7e849a', }}>Convert to Titlecase</button>
                {/* <button className="btn mx-1 my-1 btn-dark" onClick={handleInvertClick}>Convert to Invertcase</button> */}
                <button className="btn mx-1 my-1 btn-danger" onClick={handleClearClick}>Clear Text</button>
                <button className="btn mx-1 my-1 btn-primary" onClick={handleDummyClick}>Dummy Text</button>
                <button className="btn mx-1 my-1 btn-light" onClick={handleCopyClick} style={{ backgroundColor: '#F7CAC9' }}>Copy to clipboard</button>
            </div>
            <div className="container my-3">
                <h3 style={{ color: (props.mode === 'light' ? 'black' : 'white') }}>Your Text Summary</h3>
                <div className="card">
                    <ul className="list-group" >
                        <li className="list-group-item" style={{ background: (props.mode === 'light' ? 'white' : '#483d3dc9'), color: (props.mode === 'light' ? 'black' : 'white') }}>Number of Words : {text.split(' ').filter((element) => { return element.length !== 0 }).length}</li>
                        <li className="list-group-item" style={{ background: (props.mode === 'light' ? 'white' : '#483d3dc9'), color: (props.mode === 'light' ? 'black' : 'white') }}>Number of Characters (with spaces) : {text.length} </li>
                        <li className="list-group-item" style={{ background: (props.mode === 'light' ? 'white' : '#483d3dc9'), color: (props.mode === 'light' ? 'black' : 'white') }}>Number of Characters (without spaces) : {text.replace(/ /g, "").length} </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <h3 style={{ color: (props.mode === 'light' ? 'black' : 'white') }}>Preview of Your Text</h3>
                <div className="card" style={{ background: (props.mode === 'light' ? 'white' : '#292929c9'), color: (props.mode === 'light' ? 'black' : 'white'), width: 'fit-content' }}>
                    <div className="card-body">
                        {text.length > 1 ? text : `"Preview of Your Text"`}
                    </div>
                </div>
            </div>

        </div>
    )
}
