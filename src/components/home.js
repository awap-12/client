import React from "react";
import { Route, Routes } from "react-router";
import Header from "./Header";






export default function Home() {

  
    
    return (
        <>
        <Header />
        <div className="home-container">
          <div className="home-center">
            <div className="home-content">
              <Routes>
                <Route path="/" element={
              [1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
              <>
            <div class="card">
            <div className="card-img">
              <img src={require(`../artifacts/v${value}/docs/img.png`)} alt=""/>
            </div>

            <div className="card-btn">
              <a class="btn btn-primary" href={`https://awap-12.github.io/client/#/artifact/v${value}`} role="button">Detail</a>
            </div>


            <p className="card-text" >
              
            
            </p>
          </div>
              </>
              ))}>
                </Route>
              </Routes>
            </div>
          </div>
      
          <div className="home-left"></div>
          <div className="home-right"></div>
         
       
        </div>
      </>
  );
    

}
