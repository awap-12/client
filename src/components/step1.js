import React,{useState} from "react";
import UserPanel from "./userpanel";
import './step.css'


export default function StepOne() {
    const [fileName,setFileName] = useState('');
    function handleChange(e){
        console.log(e.target.files[0].name);
       setFileName("Selected:" + e.target.files[0].name);
    }
    
    return (
        <>
        <UserPanel />
        <br/>
        <br/>
        
        <div className="upload-box">
               <div className="upload">
               <label>
               <div className="btn btn-outline-primary">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
               </svg> &nbsp;
               <span className="click-text">
                click button to upload files
                </span>
               <input type="file" className="file-btn" onChange={handleChange}></input>
                </div>
                </label><br />
                <span className="text">{fileName}</span>
                </div>

               
        </div>

        <div class="submit-box">
        <button class="submit-file"> Submit </button>
        </div>

    

        </>
    )

}