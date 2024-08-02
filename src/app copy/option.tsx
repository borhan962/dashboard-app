'use client'
import React, {  useContext, useState } from "react";
import { FaXmark, FaTableColumns, FaGear } from "react-icons/fa6";
import Nav from "./nav";
import {createContext} from "react"
import Aside from "./aside"
import { mangeAllState } from "../app/context/store";



export default function Option(){
 
   const {handleXmarkClick , handleGearButton , setShow , show , handleColors , handleBgColor} = useContext(mangeAllState)
    return(

        <>
    <div className="  fixed z-10 bottom-12 w-20   rounded-full right-10 text-gray-500 h-20 p-7  bg-white  shadow-lg " onClick={handleGearButton}>
        <FaGear style={{ fontSize: "1.5rem" , cursor:"pointer"}}  />
    </div>

       <div className="container ">        
        <div id="sidebar" className={`w-96 fixed z-20 right-0 top-0  bg-white h-screen ps-5 ${show ? 'visible' : 'hidden'}`} >
         <div className="flex justify-between py-10">
            <div>
             <h3 className ="text-blue-950 font-extrabold text-lg">Material UI Configurator</h3>
             <p className="text-zinc-600 font-light text-md">See our dashboard options.</p>
            </div>
             <FaXmark style={{ position: "relative" , cursor:"pointer"}} onClick={handleXmarkClick} />
         </div>
         <h3 className="text-blue-950 font-bold text-lg">Side Colors</h3>

         <div className= "m-5">
            <button className="rounded-full bg-pink-400 w-7 h-7 border border-black me-5" value="#DB2777" onClick={handleColors}></button>
            <button className="rounded-full bg-black w-7 h-7 border border-black me-5" value="black" onClick={handleColors}></button>
            <button className="rounded-full bg-blue-400 w-7 h-7 border border-black me-5" value="blue" onClick={handleColors}></button>
            <button className="rounded-full bg-green-400 w-7 h-7 border border-black me-5"value="green" onClick={handleColors}></button>
            <button className="rounded-full bg-yellow-400 w-7 h-7 border border-black me-5"value="yellow" onClick={handleColors}></button>
        </div>
         <h3 className="text-blue-950 font-extrabold text-lg">Side Nav Type</h3>
         <p  className="text-zinc-600 font-light text-md">Choose between 2 different sidenav types.</p>

         <button className="focus:bg-black focus:text-white shadow-lg bg-transparent text-black border rounded-lg py-3 px-5 m-2 font-bold" value={"black"} onClick={handleBgColor} >Dark</button>
         <button className="focus:bg-black trans focus:text-white shadow-lg bg-transparent text-black border rounded-lg py-3 px-5 m-2 font-bold" value={"#F0F2F5"} onClick={handleBgColor}>Transparent</button>
         <button className="focus:bg-black focus:text-white shadow-lg bg-transparent text-black border rounded-lg py-3 px-5 m-2 font-bold" value={"white"} onClick={handleBgColor}>White</button>

         <div className="flex justify-between mt-5">
            <p className="text-blue-950 font-extrabold text-lg">NavBar Fixed</p>
            <label className="inline-flex items-center cursor-pointer me-3">
            <input type="checkbox" value="" className="sr-only peer"  />
            <div className="relative w-11 h-6  rounded-full peer peer-focus:ring-4  peer-focus:ring-blue-800 bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            
         </div>
         <hr className="mb-5 pt-4 mt-4 space-y-2 font-medium border-t border-gray-700"></hr>
         <div className="flex justify-between mt-5">
            <p className="text-blue-950 font-extrabold text-lg">Light / Dark</p>
            <label className="inline-flex items-center cursor-pointer me-3">
            <input type="checkbox" value="" className="sr-only peer"  />
            <div className="relative w-11 h-6  rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            
         </div>
         <hr className="mb-5 pt-4 mt-4 space-y-2 font-medium border-t border-gray-700 "></hr>


         <div className="flex justify-center">
         <button className=" bg-blue-700 border border-blue-700 text-white rounded-lg w-5/6  py-2 font-bold text-sm mt-2 focus:shadow-lg shadow-blue-950  transition ease-in-out ">DOCUMENATION</button>
         </div>
         <div className="flex justify-center">
             <button className="bg-transparent border border-gray-400 text-blue-950 rounded-lg w-5/6 py-2 font-bold text-sm mt-3">UPGRADE TO PRO</button>
         </div>
         

         <div className="flex items-center mx-2 justify-center my-3">
            <svg className ="w-5 h-5 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className ="w-5 h-5 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-5 h-5 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className ="w-5 h-5 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className ="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
           <h3 className="text-center text-blue-950 font-bold py-5 text-lg ">Thanks for Sharing</h3>

           <div className="flex justify-center">
             <button className="border rounded-lg text-white bg-blue-950 py-2 px-5 me-2 font-bold text-md">TWEET</button>
             <button className="border rounded-lg text-white bg-blue-950 py-2 px-5 me-2 font-bold text-md ">SHARE</button>
           </div>

        </div>
        </div>
        </>
    )
}