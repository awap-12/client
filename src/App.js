import "./App.css";

import { Route, Routes } from "react-router";
import Home from "./components/home";
import Navbar from './components/Navbar';
import MyChart from './components/MyChart';
import StepOne from './components/step1';
import StepThree from './components/step3';
import Detail from './components/detail';
import SignIn from './components/SignIn';
import SignUp from "./components/SignUp";
import V1 from "v1";
import V2 from "v2";
import V3 from "v3";
import V4 from "v4";
import V5 from "v5";
import V6 from "v6";
import V7 from "v7";
import V8 from "v8";
import V9 from "v9";
import V10 from "v10";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/mychart" element={<MyChart />} />
        <Route path="/SignIn/*" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path ="/step1" element={<StepOne />} />
        <Route path ="/step3" element={<StepThree />} />
        <Route path ="/detail" element={<Detail />} />
        <Route path="/artifact/v1" element={<V1 />} />
        <Route path="/artifact/v2" element={<V2 />} />
        <Route path="/artifact/v3" element={<V3 />} />
        <Route path="/artifact/v4" element={<V4 />} />
        <Route path="/artifact/v5" element={<V5 />} />
        <Route path="/artifact/v6" element={<V6 />} />
        <Route path="/artifact/v7" element={<V7 />} />
        <Route path="/artifact/v8" element={<V8 />} />
        <Route path="/artifact/v9" element={<V9 />} />
        <Route path="/artifact/v10" element={<V10 />}/>
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </>
  );
}

export default App;
