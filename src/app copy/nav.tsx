'use client'
import React, { createContext, useRef, useState } from "react";
import { FaGear, FaBell, FaUser, FaBars, FaTableColumns, FaBarsStaggered } from "react-icons/fa6";
import { config } from "@fortawesome/fontawesome-svg-core";
import Aside from "./aside"
import { useContext } from "react"
import { mangeAllState } from "../app/context/store";



export default function Nav() {
  
  const {handleGearButton  , openAndClose , handleShow} = useContext(mangeAllState)

  return (
    <>
      <nav className=" lg:w-full xl:w-5/6 p-5 xl:ms-60 md:flex justify-between pt-6">
        <div>
          <p><span className="text-zinc-400 ">Pages</span> / Dashboard</p>
          <p className="font-bold">Dashboard</p>
        </div>
        <div className="flex justify-center align-middle">
          <input type="text" placeholder="type here" className="bg-transparent border rounded border-gray-400 w-44 h-10 me-3 ps-3" />
          <button className="bg-transparent border rounded-lg border-red-500 w-36 h-10 text-red-600 me-3">ONLINE BUILDER</button>

          <div className=" flex  place-items-center text-zinc-500  ">
            <FaBars style={{ fontSize: "1.1rem", marginRight: "5px", cursor:"pointer" }} className={` ${openAndClose ? "hidden" : "visible"} xl:hidden`} onClick={handleShow} />
            <FaBarsStaggered style={{ fontSize: "1.1rem", marginRight: "5px"  , cursor:"pointer" }} className={` xl:hidden ${openAndClose ? "visible" : "hidden"} relative  `} onClick={handleShow} />
            <FaGear style={{ fontSize: "1.1rem", marginRight: "5px", cursor: "pointer" }} onClick={handleGearButton} />
            <FaBell style={{ fontSize: "1.1rem", marginRight: "5px" }} />
            <FaUser style={{ fontSize: "1.1rem", marginRight: "5px" }} />
            <p>Sign in</p>
          </div>
        </div>
      </nav>
    </>
  )


}