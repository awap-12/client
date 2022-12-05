import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Navbar from './Components/Navbar';
import Creates from './Components/Creates';
import MyChart from './Components/MyChart';
import SignIn from './Components/SignIn';
import SignUp from "./Components/SignUp";
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
        <Route path="/Creates" element={<Creates />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path ="/MyChart" element={<MyChart />} />
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
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
