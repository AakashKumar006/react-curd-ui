import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './component/Sidebar';
import NavigationBar from "./component/NavigationBar";
import Home from "./component/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Project from "./component/Projects";
import DepartmentList from "./pages/department/component/DepartmentList";
import Location from "./pages/location/component/Location";
import Department from "./pages/department/component/Department";

const  App = () => {
    return (
       <BrowserRouter>
           <NavigationBar />
           <Sidebar>
           <Routes>
               <Route path="/location" element={<Location/>}/>
               <Route path="/department" element={<Department/>}/>
               <Route path="/" element={<Home/>}/>
               <Route path="/project" element={<Project/>}/>
           </Routes>
           </Sidebar>
       </BrowserRouter>
    );
}

export default App;