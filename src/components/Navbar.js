import React from "react";


export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
    <svg xmlns="http://www.w3.org/2000/svg"  width="40px" height="40px" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16" color="#1168D9" font-size="80px">
  <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
</svg>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link home-login" href=":;">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./about">About Us</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )

}