'use client'
import React, { useContext } from "react";
import { FaTableColumns } from "react-icons/fa6";
import { mangeAllState } from "./context/store";


export default function Aside(){
   
   const {showSideNav , setShowSideNav , bgColor,color} = useContext(mangeAllState)


   let textColor;
   switch (bgColor) {
     case 'white':
       textColor = 'black';
       break;
       case '#F0F2F5': 
       textColor = 'black';
       break;
     default:
       textColor = 'white';
   }
   
    return(
        <>
        <aside id="separator-sidebar"  className= {`fixed  ms-2 top-5 h-full  ${showSideNav ? "xl:visable" : "hidden"}  z-40  md:w-60  xl:block hi` }   onClick={showSideNav}>
            <div className={`px-3 py-4  rounded-lg overflow-y-auto  bg-zinc-800`} style={{backgroundColor:bgColor , color:"black" }} >
               <h3 className="font-bold p-5 text-lg text-white" style={{color:textColor }}>Matrial Dashboard</h3>
               <hr className="mb-5 pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 "></hr>
               <ul className="space-y-2 font-medium">
                  <li>
                     <a href="#" className={`flex items-center  p-2 text-white rounded-lg bg-pink-600  group`} style={{backgroundColor:color }}>
                        <FaTableColumns style={{color:textColor }}/>
                        <span className="flex-1 ms-3 whitespace-nowrap font-light" style={{color:textColor }}>Dashboard</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-white rounded-lg    group">
                        <FaTableColumns style={{color:textColor }} />
                        <span className="flex-1 ms-3 whitespace-nowrap font-light" style={{color:textColor }}>Tables</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-white rounded-lg    group">
                        <FaTableColumns style={{color:textColor }}/>
                        <span className="flex-1 ms-3 whitespace-nowrap font-light" style={{color:textColor }}>Billing</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-white rounded-lg    group">
                        <FaTableColumns style={{color:textColor }}/>
                        <span className="flex-1 ms-3 whitespace-nowrap font-light" style={{color:textColor }}>Virtecul Reality</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-white rounded-lg    group">
                        <FaTableColumns  style={{color:textColor }}/>
                        <span className="flex-1 ms-3 whitespace-nowrap font-light" style={{color:textColor }}>RTL</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-white rounded-lg    group">
                        <FaTableColumns style={{color:textColor }} />
                        <span className="flex-1 ms-3 whitespace-nowrap font-light" style={{color:textColor }}>Notfictions</span>
                     </a>
                  </li>
               </ul>
               <h3 className="text-white ps-4 py-6 font-bold text-sm" style={{color:textColor }}>
                  ACCOUNT PAGES
               </h3>
               <ul>
                  <li>
                     <a href="#" className="flex items-center p-2 text-white transition duration-75 rounded-lg    group">
                        <FaTableColumns style={{color:textColor }} />
                        <span className="ms-3 font-light" style={{color:textColor }}>Profile</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-white transition duration-75 rounded-lg    group">
                        <FaTableColumns style={{color:textColor }} />
                        <span className="ms-3 font-light" style={{color:textColor }}>Sign In</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-white transition duration-75 rounded-lg    group">
                        <FaTableColumns style={{color:textColor }} />
                        <span className="ms-3 font-light" style={{color:textColor }}>Sign Up</span>
                     </a>
                  </li>
               </ul>
               <button className="bg-transparent border border-pink-700 text-pink-700 rounded-lg w-full py-2 font-bold text-sm mt-10 hover:opacity-50 transition ease-in-out ">DOCUMENATION</button>
               <button className="bg-pink-700 border border-pink-700 text-white rounded-lg w-full py-2 font-bold text-sm mt-3">UPGRADE TO PRO</button>
            </div>
         </aside>
        
        </>
    )
}