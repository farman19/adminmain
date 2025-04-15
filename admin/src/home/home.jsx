import React, { createContext,useState } from "react"; 
import {  Outlet,  } from "react-router-dom";
import './home.css'
import Header from "../component/header/header";
import Sidebar from "../component/sidebar/sidebar";

const MyContext = createContext();
const Home = ()=>{
    const [sidebardrop, setSidebardrop] = useState(false)

    const values = {
        sidebardrop,
        setSidebardrop
    }

    return(
        <>
        <MyContext.Provider value={values}>
        
          <Header/>
          <div className="mid-section">
            <div className={`sidebar ${sidebardrop === true ? 'toggle' : ''}`}>
                <Sidebar/>
            </div>
            <div className={`pages ${sidebardrop === true ? 'toggle' : ''}`}>
                <Outlet/>
            </div>
          </div>
       
         </MyContext.Provider>
       
       
        
        </>
    )
}
export default Home;
export{MyContext}