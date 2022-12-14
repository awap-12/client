import React from "react";
import UserPanel from "./userpanel";
import './step.css'


export default function StepThree() {

    
    return (
        <>
        <UserPanel />
        <br/>
        <div className="form-container">
                <form>

            
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Chart Title</label>
                        <input type="title" class="form-control" id="chartTitle"  />
                    </div>
                    <div className="select">
                        Chart Type
                    <select class="form-select" aria-label="Default select example"  >
                        <option selected>Line chart</option>
                        <option value="1">Bar chart</option>
                        <option value="2">Horizontal bar chart</option>
                        <option value="3">Pie chart</option>
                    </select><br />
                    </div>
                    <div className="select">
                        File list
                    <select class="form-select" aria-label="Default select example"  >
                        <option selected>file</option>
                        
                    </select><br />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Data Sources</label>
                        <input type="source" class="form-control" id="data-source"  />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description Text</label>
                        <textarea class="form-control" id="chartText" rows="3"></textarea>
                    </div>
                    <input type="submit" class="submit submit-file" value="submit"></input>
                 
                </form>
            </div>
            

        </>
    )

}