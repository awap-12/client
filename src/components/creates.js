import React from "react";

import "../creates.css";


export default function Creates() {


    
    return (
        <>
        <div class="creates-container">
            <div class="upload-box">
               <div class="upload">
               <span>Drag and drop or click button to upload files</span><br />
               <button type="button" class="btn btn-outline-primary">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
               </svg> &nbsp;
                upload files</button>
                </div>

            </div>

            <div class="select-box">
                <div className="form-container">
                <form>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">Line Chart</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
                        <label class="form-check-label" for="flexRadioDefault2">Pie Chart</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"  />
                        <label class="form-check-label" for="flexRadioDefault3">Hist Chart</label>
                    </div><br />

                    <div className="upload-btn">
                   Data: &nbsp;&nbsp;&nbsp;
                   <button type="button" class="btn btn-outline-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                    </svg> &nbsp;upload files</button> 
                   
                </div><br />
            
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Chart title</label>
                        <input type="title" class="form-control" id="chartTitle" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description text</label>
                        <textarea class="form-control" id="chartText" rows="3"></textarea>
                    </div>
                    <input type="submit" class="submit" value="submit"></input>
                 
                </form>
            </div>

            </div>        
        </div>

        </>
    )

}