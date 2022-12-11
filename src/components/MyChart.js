import React from "react";
import { Route, Routes } from "react-router";
import UserPanel from "./userpanel";
import $ from "jquery";
import "./mychart.css";


export default function MyChart() {
    
    
    return (
        <>
        <UserPanel />
        <div className = "list-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" onClick={()=>{
                $(".chart-content").addClass("table-box");
                $(".chart-content").removeClass("grid-box");
                }}>
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>&nbsp;|&nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16" onClick={()=>{
                $(".chart-content").addClass("grid-box");
                $(".chart-content").removeClass("table-box");
                }}>
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
            </svg>

        </div>
        <div className="clearfix"></div>

        <div className="chart-container">
          <div className="chart-center">
            <div className="chart-content table-box">
              <Routes>
                <Route path="/" element={
              [1, 2, 3, 4, 5, 6, 7, 8].map(value => (
              <>
            <div class="card">
            <div className="card-img">
              <img src={require(`../artifacts/v${value}/docs/img.png`)} alt=""/>
            </div>

            <div className="card-btn">
              <a class="btn btn-primary" href={`http://localhost:3000/client/#/artifact/v${value}`} role="button">Detail</a>
              <button type="button" class="btn btn-primary">Delete</button>
            </div>


            <p className="card-text">
              <span>title:</span><br />
              <span>V{value} brief description</span>
            </p>
          </div>
              </>
              ))}>
                </Route>
              </Routes>
            </div>
          </div>
      
          <div className="chart-left"></div>
          <div className="chart-right"></div>
         
       
        </div>
        </>
    )


}